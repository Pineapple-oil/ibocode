(function () {
  if (!window.CosunHeadless) return;

  var isMetaBox = CosunHeadless.isMetaBox;
  var targetEl  = document.getElementById(isMetaBox ? 'cosun-headless-metabox-editor' : 'cosun-headless-editor');
  var navEl     = document.getElementById('cosun-headless-nav');

  if (!targetEl) return;

  // -------------------------------------------------------------------------
  // State
  // -------------------------------------------------------------------------
  var fullContent   = CosunHeadless.content || {};
  var pages         = CosunHeadless.pages   || [];
  var currentTab    = isMetaBox ? CosunHeadless.currentSlug : null; // slug string
  var sectionState  = {};   // { [slug]: clonedSectionData }
  var mediaDomain   = CosunHeadless.mediaDomain || '';

  // -------------------------------------------------------------------------
  // Utilities
  // -------------------------------------------------------------------------
  var imageKeyPattern   = /(image|img|photo|logo|background|banner|thumbnail|hero|gallery|icon)/i;
  var longTextPattern   = /(description|excerpt|note|paragraph|intro|text|support|summary|message)/i;

  function deepClone(v) {
    if (window.structuredClone) return window.structuredClone(v);
    return JSON.parse(JSON.stringify(v));
  }

  function formatLabel(key) {
    if (typeof key === 'number') return 'Item ' + (key + 1);
    return String(key)
      .replace(/_/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  /** Read a value from fullContent using dot-path */
  function getByPath(path) {
    var keys   = path.split('.');
    var cursor = fullContent;
    for (var i = 0; i < keys.length; i++) {
      if (cursor === null || typeof cursor !== 'object') return undefined;
      cursor = cursor[keys[i]];
    }
    return cursor;
  }

  /** Write a value back into an object using remaining path keys */
  function setValueAtPath(obj, path, value) {
    for (var i = 0; i < path.length - 1; i++) {
      obj = obj[path[i]];
    }
    obj[path[path.length - 1]] = value;
  }

  function isImageField(key, value) {
    if (typeof value !== 'string') return false;
    if (imageKeyPattern.test(key)) return true;
    return /\.(png|jpe?g|webp|gif|svg)$/i.test(value);
  }

  function shouldUseTextarea(key, value) {
    if (typeof value !== 'string') return false;
    if (value.length > 120) return true;
    return longTextPattern.test(key);
  }

  // -------------------------------------------------------------------------
  // Field renderers
  // -------------------------------------------------------------------------
  function renderPrimitive(value, path, label) {
    var wrapper = el('div', { className: 'cosun-field' });
    var lbl     = el('label', {}); lbl.textContent = label;
    wrapper.appendChild(lbl);

    if (typeof value === 'boolean') {
      var cb = el('input', { type: 'checkbox' });
      cb.checked = value;
      cb.addEventListener('change', function () { setValueAtPath(sectionState[currentTab], path, cb.checked); });
      wrapper.appendChild(cb);
      return wrapper;
    }

    if (typeof value === 'number') {
      var ni = el('input', { type: 'number', value: String(value) });
      ni.addEventListener('input', function () {
        setValueAtPath(sectionState[currentTab], path, ni.value === '' ? '' : Number(ni.value));
      });
      wrapper.appendChild(ni);
      return wrapper;
    }

    var strVal  = (value === null || value === undefined) ? '' : String(value);
    var keyName = String(path[path.length - 1]);

    if (isImageField(keyName, strVal)) {
      var row  = el('div', { className: 'cosun-field-row' });
      var inp  = el('input', { type: 'text', value: strVal });
      inp.addEventListener('input', function () { setValueAtPath(sectionState[currentTab], path, inp.value); });
      row.appendChild(inp);

      var btn = el('button', { type: 'button', className: 'button' });
      btn.textContent = 'Select Image';
      btn.addEventListener('click', function () {
        var frame = wp.media({ title: 'Select Image', button: { text: 'Use this image' }, multiple: false });
        frame.on('select', function () {
          var att = frame.state().get('selection').first().toJSON();
          inp.value = att.url;
          setValueAtPath(sectionState[currentTab], path, att.url);
          renderEditor();
        });
        frame.open();
      });
      row.appendChild(btn);
      wrapper.appendChild(row);

      if (strVal) {
        var previewSrc = strVal;
        if (mediaDomain && strVal.charAt(0) === '/') {
          previewSrc = mediaDomain + strVal;
        }
        var img = el('img', { className: 'cosun-image-preview', src: previewSrc, alt: '' });
        wrapper.appendChild(img);
      }
      return wrapper;
    }

    if (shouldUseTextarea(keyName, strVal)) {
      var ta = el('textarea', { rows: '3' }); ta.value = strVal;
      ta.addEventListener('input', function () { setValueAtPath(sectionState[currentTab], path, ta.value); });
      wrapper.appendChild(ta);
      return wrapper;
    }

    var ti = el('input', { type: 'text', value: strVal });
    ti.addEventListener('input', function () { setValueAtPath(sectionState[currentTab], path, ti.value); });
    wrapper.appendChild(ti);
    return wrapper;
  }

  function renderArray(items, path, label) {
    var container = el('div', { className: 'cosun-array' });
    var titleEl   = el('div', { className: 'cosun-array-title' }); titleEl.textContent = label;
    container.appendChild(titleEl);

    items.forEach(function (item, index) {
      var itemWrap = el('div', { className: 'cosun-array-item' });
      var hdr = el('div', { className: 'cosun-array-item-header' }); hdr.textContent = formatLabel(index);
      itemWrap.appendChild(hdr);
      itemWrap.appendChild(renderValue(item, path.concat(index), formatLabel(index)));

      var ctls = el('div', { className: 'cosun-array-controls' });
      var rm   = el('button', { type: 'button', className: 'button button-secondary' }); rm.textContent = 'Remove';
      rm.addEventListener('click', (function (idx) {
        return function () { items.splice(idx, 1); renderEditor(); };
      })(index));
      ctls.appendChild(rm);
      itemWrap.appendChild(ctls);
      container.appendChild(itemWrap);
    });

    var addBtn = el('button', { type: 'button', className: 'button' }); addBtn.textContent = '+ Add Item';
    addBtn.addEventListener('click', function () {
      items.push(items.length ? deepClone(items[0]) : '');
      renderEditor();
    });
    container.appendChild(addBtn);
    return container;
  }

  function renderObject(obj, path, label, isRoot) {
    var container = isRoot ? el('div', {}) : el('details', { className: 'cosun-section', open: true });
    var body = container;

    if (!isRoot) {
      var summary = el('summary', {}); summary.textContent = label;
      container.appendChild(summary);
      body = el('div', { className: 'cosun-section-body' });
      container.appendChild(body);
    }

    Object.keys(obj).forEach(function (key) {
      body.appendChild(renderValue(obj[key], path.concat(key), formatLabel(key)));
    });
    return container;
  }

  function renderValue(value, path, label) {
    if (Array.isArray(value))                return renderArray(value, path, label);
    if (value && typeof value === 'object')  return renderObject(value, path, label, false);
    return renderPrimitive(value, path, label);
  }

  // -------------------------------------------------------------------------
  // DOM helper
  // -------------------------------------------------------------------------
  function el(tag, attrs) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'className') { node.className = attrs[k]; }
      else { node.setAttribute(k, attrs[k]); }
    });
    return node;
  }

  // -------------------------------------------------------------------------
  // Navigation sidebar
  // -------------------------------------------------------------------------
  function buildNav() {
    if (isMetaBox || !navEl) return;

    navEl.innerHTML = '';

    // Group pages
    var groups = {};
    var groupOrder = [];
    pages.forEach(function (page) {
      if (!groups[page.group]) {
        groups[page.group] = [];
        groupOrder.push(page.group);
      }
      groups[page.group].push(page);
    });

    groupOrder.forEach(function (groupName) {
      var section = el('div', { className: 'cosun-nav-group' });
      var heading = el('div', { className: 'cosun-nav-group-title' });
      heading.textContent = groupName;
      section.appendChild(heading);

      groups[groupName].forEach(function (page) {
        var item = el('button', { type: 'button', className: 'cosun-nav-item' + (currentTab === page.slug ? ' active' : ''), 'data-slug': page.slug });
        item.innerHTML = '<span class="cosun-nav-icon">' + (page.icon || '📄') + '</span>'
          + '<span class="cosun-nav-label">' + page.title.replace(/^COSUN\s*[–-]\s*/i, '') + '</span>';
        item.addEventListener('click', function () {
          switchTab(page.slug);
        });
        section.appendChild(item);
      });

      navEl.appendChild(section);
    });
  }

  // -------------------------------------------------------------------------
  // Editor area
  // -------------------------------------------------------------------------
  function renderEditor() {
    targetEl.innerHTML = '';

    if (!currentTab) {
      var welcome = el('div', { className: 'cosun-welcome' });
      welcome.innerHTML = '<h2>👋 选择左侧页面开始编辑</h2><p>每个页面对应网站前端的一个版块，修改后点击"保存"即刻生效。</p>';
      targetEl.appendChild(welcome);
      return;
    }

    var page = pages.find(function (p) { return p.slug === currentTab; });
    if (!page) return;

    // Toolbar
    var toolbar = el('div', { className: 'cosun-toolbar' });

    var titleEl = el('div', { className: 'cosun-toolbar-title' });
    titleEl.textContent = (page.icon || '') + ' ' + page.title.replace(/^COSUN\s*[–-]\s*/i, '');
    toolbar.appendChild(titleEl);

    var pathEl = el('div', { className: 'cosun-toolbar-path' });
    pathEl.textContent = page.jsonPath;
    toolbar.appendChild(pathEl);

    var statusEl = el('div', { className: 'cosun-toolbar-status' });
    toolbar.appendChild(statusEl);

    var actions = el('div', { className: 'cosun-toolbar-actions' });

    // Expand / Collapse
    var expandBtn = el('button', { type: 'button', className: 'button button-secondary' });
    expandBtn.textContent = '展开全部';
    expandBtn.addEventListener('click', function () {
      targetEl.querySelectorAll('details.cosun-section').forEach(function (d) { d.open = true; });
    });
    actions.appendChild(expandBtn);

    var collapseBtn = el('button', { type: 'button', className: 'button button-secondary' });
    collapseBtn.textContent = '收起全部';
    collapseBtn.addEventListener('click', function () {
      targetEl.querySelectorAll('details.cosun-section').forEach(function (d) { d.open = false; });
    });
    actions.appendChild(collapseBtn);

    // Reset section
    var resetBtn = el('button', { type: 'button', className: 'button button-secondary' });
    resetBtn.textContent = '↩ 恢复默认';
    resetBtn.addEventListener('click', function () {
      if (!window.confirm('将此页面内容重置为出厂默认值？此操作无法撤销。')) return;
      statusEl.textContent = 'Resetting…';
      saveRequest('cosun_headless_reset')
        .then(function () {
          return reloadContent();
        })
        .then(function () {
          switchTab(currentTab, true);
          statusEl.textContent = '已重置';
        })
        .catch(function (msg) { statusEl.textContent = msg; });
    });
    actions.appendChild(resetBtn);

    // Save section
    var saveBtn = el('button', { type: 'button', className: 'button button-primary' });
    saveBtn.textContent = '💾 立即保存 (COSUN)';
    saveBtn.addEventListener('click', function () {
      statusEl.textContent = 'Saving…';
      saveBtn.disabled = true;
      saveSectionRequest(page.jsonPath, sectionState[currentTab])
        .then(function (msg) {
          // Merge back into fullContent
          setByPathFull(page.jsonPath, sectionState[currentTab]);
          statusEl.textContent = '✔ ' + msg;
        })
        .catch(function (msg) { statusEl.textContent = '✖ ' + msg; })
        .finally(function () { saveBtn.disabled = false; });
    });
    actions.appendChild(saveBtn);

    toolbar.appendChild(actions);
    targetEl.appendChild(toolbar);

    // Content body
    var body = el('div', { className: 'cosun-editor-body' });
    var sData = sectionState[currentTab];
    if (Array.isArray(sData)) {
      body.appendChild(renderArray(sData, [], page.title));
    } else if (sData && typeof sData === 'object') {
      body.appendChild(renderObject(sData, [], page.title, true));
    } else {
      body.appendChild(renderPrimitive(sData, [currentTab], page.title));
    }
    targetEl.appendChild(body);
  }

  // -------------------------------------------------------------------------
  // Tab switching
  // -------------------------------------------------------------------------
  function switchTab(slug, force) {
    if (currentTab === slug && !force) return;
    currentTab = slug;

    // Initialise section state from fullContent if not yet done
    var page = pages.find(function (p) { return p.slug === slug; });
    if (page) {
      if (!sectionState[slug]) {
        var baseContent = getByPath(page.jsonPath);
        sectionState[slug] = deepClone(baseContent !== undefined ? baseContent : {});
      }
    }

    if (!isMetaBox) {
      // Update URL hash
      history.replaceState(null, '', '#tab=' + slug);
    }

    buildNav();
    renderEditor();
  }

  // -------------------------------------------------------------------------
  // Write merged value back to fullContent
  // -------------------------------------------------------------------------
  function setByPathFull(path, value) {
    var keys   = path.split('.');
    var cursor = fullContent;
    for (var i = 0; i < keys.length - 1; i++) {
      if (!cursor[keys[i]]) cursor[keys[i]] = {};
      cursor = cursor[keys[i]];
    }
    cursor[keys[keys.length - 1]] = value;
  }

  // -------------------------------------------------------------------------
  // Reload full content from server
  // -------------------------------------------------------------------------
  function reloadContent() {
    return fetch(CosunHeadless.ajaxUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: new URLSearchParams({ action: 'cosun_headless_get_content', nonce: CosunHeadless.nonce }).toString()
    })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (data && data.success && data.data) {
        fullContent = data.data;
      }
    });
  }

  // -------------------------------------------------------------------------
  // AJAX helpers
  // -------------------------------------------------------------------------
  function saveRequest(action, payload) {
    var params = new URLSearchParams();
    params.append('action', action);
    params.append('nonce', CosunHeadless.nonce);
    if (payload) params.append('content', JSON.stringify(payload));

    return fetch(CosunHeadless.ajaxUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: params.toString()
    })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data || !data.success) throw new Error((data && data.data && data.data.message) || 'Request failed.');
      return (data.data && data.data.message) || 'Done.';
    });
  }

  function saveSectionRequest(jsonPath, sectionData) {
    var params = new URLSearchParams();
    params.append('action', 'cosun_headless_save_section');
    params.append('nonce', CosunHeadless.nonce);
    params.append('jsonPath', jsonPath);
    params.append('sectionContent', JSON.stringify(sectionData));

    return fetch(CosunHeadless.ajaxUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: params.toString()
    })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data || !data.success) throw new Error((data && data.data && data.data.message) || 'Save failed.');
      return (data.data && data.data.message) || 'Saved.';
    });
  }

  // -------------------------------------------------------------------------
  // Boot
  // -------------------------------------------------------------------------
  function init() {
    if (isMetaBox) {
      // In Meta Box context, just render the current slug's editor
      if (currentTab) {
        switchTab(currentTab, true);
      }
    } else {
      // Normal admin page context
      var hash = window.location.hash;
      var match = hash.match(/[#&?]tab=([^&]+)/);
      var initialSlug = match ? decodeURIComponent(match[1]) : (pages.length ? pages[0].slug : null);

      if (initialSlug) {
        switchTab(initialSlug);
      } else {
        buildNav();
        renderEditor();
      }
    }
  }

  init();
})();
