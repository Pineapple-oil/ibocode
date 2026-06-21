<?php
/**
 * Plugin Name: Ibocode Headless Content
 * Description: Headless content editor and REST endpoint for the Ibocode React site.
 * Version: 0.2.0
 * Author: Ibocode
 */

if (!defined('ABSPATH')) {
    exit;
}

define('COSUN_HEADLESS_CONTENT_OPTION', 'cosun_headless_site_content');
define('COSUN_HEADLESS_CONTENT_VERSION', 2);
define('COSUN_HEADLESS_DB_VERSION', 1);
define('COSUN_HEADLESS_CONTENT_VERSION_OPTION', 'cosun_headless_content_version');
define('COSUN_HEADLESS_PAGES_CREATED_OPTION', 'cosun_headless_pages_created');

// ---------------------------------------------------------------------------
// Database helpers
// ---------------------------------------------------------------------------

function cosun_headless_table_name() {
    global $wpdb;
    return $wpdb->prefix . 'cosun_headless_content';
}

function cosun_headless_install_table() {
    global $wpdb;
    $table = cosun_headless_table_name();
    $charset = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE {$table} (
        id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
        content longtext NOT NULL,
        updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY  (id)
    ) {$charset};";

    require_once ABSPATH . 'wp-admin/includes/upgrade.php';
    dbDelta($sql);

    update_option('cosun_headless_db_version', COSUN_HEADLESS_DB_VERSION, false);
}

// ---------------------------------------------------------------------------
// Default content
// ---------------------------------------------------------------------------

function cosun_headless_read_json($filename) {
    $path = plugin_dir_path(__FILE__) . 'default-content/' . $filename;
    if (!file_exists($path)) {
        return [];
    }
    $raw = file_get_contents($path);
    if ($raw === false) {
        return [];
    }
    $data = json_decode($raw, true);
    if (!is_array($data)) {
        return [];
    }
    return $data;
}

function cosun_headless_default_content() {
    return [
        'schemaVersion' => COSUN_HEADLESS_CONTENT_VERSION,
        'global' => cosun_headless_read_json('global.json'),
        'pages' => [
            'home' => cosun_headless_read_json('home.json'),
            'about' => [
                'index' => cosun_headless_read_json('about-index.json'),
                'profile' => cosun_headless_read_json('about-profile.json'),
                'whyUs' => cosun_headless_read_json('about-whyus.json'),
                'team' => cosun_headless_read_json('about-team.json'),
            ],
            'manufacturing' => [
                'index' => cosun_headless_read_json('manufacturing-index.json'),
                'factory' => cosun_headless_read_json('manufacturing-factory.json'),
                'capacity' => cosun_headless_read_json('manufacturing-capacity.json'),
                'lines' => cosun_headless_read_json('manufacturing-lines.json'),
                'engineering' => cosun_headless_read_json('manufacturing-engineering.json'),
            ],
            'solutions' => [
                'index' => cosun_headless_read_json('solutions-index.json'),
                'customization' => cosun_headless_read_json('solutions-customization.json'),
                'process' => cosun_headless_read_json('solutions-process.json'),
            ],
            'quality' => [
                'index' => cosun_headless_read_json('quality-index.json'),
                'process' => cosun_headless_read_json('quality-process.json'),
                'reliability' => cosun_headless_read_json('quality-reliability.json'),
                'certifications' => cosun_headless_read_json('quality-certifications.json'),
            ],
            'faq' => cosun_headless_read_json('faq.json'),
            'contact' => cosun_headless_read_json('contact.json'),
            'blog' => cosun_headless_read_json('blog.json'),
            'blogSingle' => cosun_headless_read_json('blog-single.json'),
            'products' => [
                'index' => cosun_headless_read_json('products-index.json'),
                'detail' => cosun_headless_read_json('products-detail.json'),
            ],
        ],
    ];
}

// ---------------------------------------------------------------------------
// Page definitions
// ---------------------------------------------------------------------------

/**
 * Returns definitions for the auxiliary WP pages that the plugin creates.
 * Each entry: [ 'title', 'slug', 'jsonPath' (dot-separated key path), 'group' ]
 */
function cosun_headless_page_definitions() {
    return [
        // Global
        [
            'title'    => 'Ibocode – Global Settings',
            'slug'     => 'cosun-global',
            'jsonPath' => 'global',
            'group'    => 'Global',
            'icon'     => '⚙️',
        ],
        // Home
        [
            'title'    => 'Ibocode – Home',
            'slug'     => 'cosun-home',
            'jsonPath' => 'pages.home',
            'group'    => 'Pages',
            'icon'     => '🏠',
        ],
        // About
        [
            'title'    => 'Ibocode – About',
            'slug'     => 'cosun-about',
            'jsonPath' => 'pages.about.index',
            'group'    => 'About',
            'icon'     => '🏢',
        ],
        [
            'title'    => 'Ibocode – About: Company Profile',
            'slug'     => 'cosun-about-profile',
            'jsonPath' => 'pages.about.profile',
            'group'    => 'About',
            'icon'     => '🏢',
        ],
        [
            'title'    => 'Ibocode – About: Why Us',
            'slug'     => 'cosun-about-whyus',
            'jsonPath' => 'pages.about.whyUs',
            'group'    => 'About',
            'icon'     => '🏢',
        ],
        [
            'title'    => 'Ibocode – About: Our Team',
            'slug'     => 'cosun-about-team',
            'jsonPath' => 'pages.about.team',
            'group'    => 'About',
            'icon'     => '🏢',
        ],
        // Manufacturing
        [
            'title'    => 'Ibocode – Manufacturing',
            'slug'     => 'cosun-manufacturing',
            'jsonPath' => 'pages.manufacturing.index',
            'group'    => 'Manufacturing',
            'icon'     => '🏭',
        ],
        [
            'title'    => 'Ibocode – Manufacturing: Factory',
            'slug'     => 'cosun-manufacturing-factory',
            'jsonPath' => 'pages.manufacturing.factory',
            'group'    => 'Manufacturing',
            'icon'     => '🏭',
        ],
        [
            'title'    => 'Ibocode – Manufacturing: Capacity',
            'slug'     => 'cosun-manufacturing-capacity',
            'jsonPath' => 'pages.manufacturing.capacity',
            'group'    => 'Manufacturing',
            'icon'     => '🏭',
        ],
        [
            'title'    => 'Ibocode – Manufacturing: Lines',
            'slug'     => 'cosun-manufacturing-lines',
            'jsonPath' => 'pages.manufacturing.lines',
            'group'    => 'Manufacturing',
            'icon'     => '🏭',
        ],
        [
            'title'    => 'Ibocode – Manufacturing: Engineering',
            'slug'     => 'cosun-manufacturing-engineering',
            'jsonPath' => 'pages.manufacturing.engineering',
            'group'    => 'Manufacturing',
            'icon'     => '🏭',
        ],
        // OEM & ODM
        [
            'title'    => 'Ibocode – OEM & ODM',
            'slug'     => 'cosun-oem-odm',
            'jsonPath' => 'pages.solutions.index',
            'group'    => 'OEM & ODM',
            'icon'     => '🔧',
        ],
        [
            'title'    => 'Ibocode – OEM & ODM: Customization',
            'slug'     => 'cosun-oem-odm-customization',
            'jsonPath' => 'pages.solutions.customization',
            'group'    => 'OEM & ODM',
            'icon'     => '🔧',
        ],
        [
            'title'    => 'Ibocode – OEM & ODM: Process',
            'slug'     => 'cosun-oem-odm-process',
            'jsonPath' => 'pages.solutions.process',
            'group'    => 'OEM & ODM',
            'icon'     => '🔧',
        ],
        // Quality
        [
            'title'    => 'Ibocode – Quality',
            'slug'     => 'cosun-quality',
            'jsonPath' => 'pages.quality.index',
            'group'    => 'Quality',
            'icon'     => '✅',
        ],
        [
            'title'    => 'Ibocode – Quality: QC Process',
            'slug'     => 'cosun-quality-process',
            'jsonPath' => 'pages.quality.process',
            'group'    => 'Quality',
            'icon'     => '✅',
        ],
        [
            'title'    => 'Ibocode – Quality: Reliability',
            'slug'     => 'cosun-quality-reliability',
            'jsonPath' => 'pages.quality.reliability',
            'group'    => 'Quality',
            'icon'     => '✅',
        ],
        [
            'title'    => 'Ibocode – Quality: Certifications',
            'slug'     => 'cosun-quality-certifications',
            'jsonPath' => 'pages.quality.certifications',
            'group'    => 'Quality',
            'icon'     => '✅',
        ],
        // Standalone
        [
            'title'    => 'Ibocode – FAQ',
            'slug'     => 'cosun-faq',
            'jsonPath' => 'pages.faq',
            'group'    => 'Pages',
            'icon'     => '❓',
        ],
        [
            'title'    => 'Ibocode – Contact',
            'slug'     => 'cosun-contact',
            'jsonPath' => 'pages.contact',
            'group'    => 'Pages',
            'icon'     => '📧',
        ],
    ];
}

// ---------------------------------------------------------------------------
// Create auxiliary WP pages on activation
// ---------------------------------------------------------------------------

function cosun_headless_create_pages() {
    $pages = cosun_headless_page_definitions();
    $admin_url = admin_url('admin.php?page=cosun-headless-content');

    foreach ($pages as $page) {
        $existing = get_page_by_path($page['slug'], OBJECT, 'page');
        if ($existing) {
            continue; // Already created — skip
        }

        $content = sprintf(
            '<div style="font-family:sans-serif;border:2px solid #f6c343;border-radius:10px;padding:20px;background:#fffbea;max-width:600px;">'
            . '<strong style="font-size:16px;">⚡ Ibocode Headless — %s</strong><br/>'
            . '<p style="color:#555;margin:10px 0 0;">此页面由 Ibocode Headless Content 插件管理。<br/>'
            . '前端数据路径：<code style="background:#f0f0f0;padding:2px 6px;border-radius:4px;">%s</code></p>'
            . '<p style="margin:12px 0 0;"><a href="%s#tab=%s" style="background:#f6c343;color:#0f172a;padding:8px 18px;border-radius:999px;text-decoration:none;font-weight:600;">✏️ 编辑此页内容</a></p>'
            . '</div>',
            esc_html($page['title']),
            esc_html($page['jsonPath']),
            esc_url($admin_url),
            esc_attr($page['slug'])
        );

        wp_insert_post([
            'post_title'   => $page['title'],
            'post_name'    => $page['slug'],
            'post_status'  => 'draft',
            'post_type'    => 'page',
            'post_content' => $content,
            'meta_input'   => [
                '_cosun_headless_json_path' => $page['jsonPath'],
            ],
        ]);
    }

    update_option(COSUN_HEADLESS_PAGES_CREATED_OPTION, '1', false);
}

// ---------------------------------------------------------------------------
// Get / save content
// ---------------------------------------------------------------------------

function cosun_headless_get_content() {
    global $wpdb;
    $table = cosun_headless_table_name();
    $row = $wpdb->get_row($wpdb->prepare("SELECT content FROM {$table} WHERE id = %d LIMIT 1", 1), ARRAY_A);
    $content = [];
    if ($row && !empty($row['content'])) {
        $decoded = json_decode($row['content'], true);
        if (is_array($decoded)) {
            $content = $decoded;
        }
    }
    if (!is_array($content) || empty($content)) {
        $content = cosun_headless_default_content();
    }
    return $content;
}

/**
 * Read a nested value from an array using a dot-separated path.
 */
function cosun_headless_get_by_path(array $data, string $path) {
    $keys = explode('.', $path);
    $cursor = $data;
    foreach ($keys as $key) {
        if (!is_array($cursor) || !array_key_exists($key, $cursor)) {
            return null;
        }
        $cursor = $cursor[$key];
    }
    return $cursor;
}

/**
 * Set a nested value in an array using a dot-separated path.
 */
function cosun_headless_set_by_path(array &$data, string $path, $value): void {
    $keys = explode('.', $path);
    $cursor = &$data;
    foreach ($keys as $key) {
        if (!isset($cursor[$key]) || !is_array($cursor[$key])) {
            $cursor[$key] = [];
        }
        $cursor = &$cursor[$key];
    }
    $cursor = $value;
}

// ---------------------------------------------------------------------------
// Activation hook
// ---------------------------------------------------------------------------

function cosun_headless_activate() {
    cosun_headless_install_table();

    global $wpdb;
    $table = cosun_headless_table_name();
    $row = $wpdb->get_var($wpdb->prepare("SELECT id FROM {$table} WHERE id = %d", 1));
    if (!$row) {
        $legacy = get_option(COSUN_HEADLESS_CONTENT_OPTION);
        $seed = is_array($legacy) ? $legacy : cosun_headless_default_content();
        $wpdb->replace(
            $table,
            [
                'id'         => 1,
                'content'    => wp_json_encode($seed),
                'updated_at' => current_time('mysql'),
            ],
            ['%d', '%s', '%s']
        );
    }

    update_option(COSUN_HEADLESS_CONTENT_VERSION_OPTION, COSUN_HEADLESS_CONTENT_VERSION, false);

    // Create auxiliary WP pages
    cosun_headless_create_pages();
}

register_activation_hook(__FILE__, 'cosun_headless_activate');

// ---------------------------------------------------------------------------
// Runtime upgrade checks
// ---------------------------------------------------------------------------

add_action('plugins_loaded', function () {
    $stored_version = (int) get_option('cosun_headless_db_version', 0);
    if ($stored_version < COSUN_HEADLESS_DB_VERSION) {
        cosun_headless_install_table();
    }

    $content_version = (int) get_option(COSUN_HEADLESS_CONTENT_VERSION_OPTION, 0);
    if ($content_version < COSUN_HEADLESS_CONTENT_VERSION) {
        global $wpdb;
        $table = cosun_headless_table_name();
        $wpdb->replace(
            $table,
            [
                'id'         => 1,
                'content'    => wp_json_encode(cosun_headless_default_content()),
                'updated_at' => current_time('mysql'),
            ],
            ['%d', '%s', '%s']
        );
        update_option(COSUN_HEADLESS_CONTENT_VERSION_OPTION, COSUN_HEADLESS_CONTENT_VERSION, false);
    }

    // Create pages if not yet done (e.g. upgrading from v0.1)
    if (!get_option(COSUN_HEADLESS_PAGES_CREATED_OPTION)) {
        cosun_headless_create_pages();
    }
});

// ---------------------------------------------------------------------------
// REST API
// ---------------------------------------------------------------------------

add_action('rest_api_init', function () {
    register_rest_route('cosun/v1', '/site-content', [
        'methods'             => WP_REST_Server::READABLE,
        'callback'            => function () {
            $content = cosun_headless_get_content();
            $domain = rtrim(get_option('cosun_headless_media_domain', ''), '/');
            if ($domain !== '') {
                array_walk_recursive($content, function(&$item) use ($domain) {
                    if (is_string($item) && strpos($item, '/') === 0) {
                        if (preg_match('/\.(png|jpe?g|webp|gif|svg|mp4)$/i', $item) || strpos($item, '/wp-content/') === 0) {
                            $item = $domain . $item;
                        }
                    }
                });
            }
            return rest_ensure_response($content);
        },
        'permission_callback' => '__return_true',
    ]);
});

add_filter('rest_pre_serve_request', function ($served, $result, $request, $server) {
    $route = $request->get_route();
    if (strpos($route, '/cosun/v1/') === 0) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
    }
    return $served;
}, 10, 4);

// ---------------------------------------------------------------------------
// Admin menu & UI
// ---------------------------------------------------------------------------

function cosun_headless_render_admin_page() {
    echo '<div class="wrap cosun-headless">';
    echo '<h1>Ibocode Headless Content</h1>';
    echo '<div id="cosun-headless-app"><div id="cosun-headless-nav"></div><div id="cosun-headless-editor"></div></div>';
    echo '</div>';
}

function cosun_headless_admin_menu() {
    add_menu_page(
        'Ibocode Headless Content',
        'Ibocode Content',
        'manage_options',
        'cosun-headless-content',
        'cosun_headless_render_admin_page',
        'dashicons-admin-site-alt3',
        60
    );
    add_submenu_page(
        'cosun-headless-content',
        'Settings',
        'Settings',
        'manage_options',
        'cosun-headless-settings',
        'cosun_headless_render_settings_page'
    );
}

function cosun_headless_render_settings_page() {
    if (isset($_POST['cosun_media_domain']) && check_admin_referer('cosun_headless_settings_save')) {
        $domain = rtrim(sanitize_text_field($_POST['cosun_media_domain']), '/');
        update_option('cosun_headless_media_domain', $domain);
        echo '<div class="notice notice-success is-dismissible"><p>设置已保存。</p></div>';
    }
    $domain = get_option('cosun_headless_media_domain', '');
    ?>
    <div class="wrap">
        <h1>🔧 Ibocode Headless 设置</h1>
        <form method="post" action="">
            <?php wp_nonce_field('cosun_headless_settings_save'); ?>
            <table class="form-table">
                <tr>
                    <th scope="row"><label for="cosun_media_domain">前端图片域名<br/>(Media Base URL)</label></th>
                    <td>
                        <input name="cosun_media_domain" type="url" id="cosun_media_domain" value="<?php echo esc_attr($domain); ?>" class="regular-text" placeholder="https://cms.yourdomain.com">
                        <p class="description">
                            由于系统采用了前后端分离架构，如果您在 JSON 中直接选择的图片带有 <code>/wp-content/uploads/...</code> 这种相对路径，Next.js 前端将无法正确定位到 WordPress 服务器。<br/>
                            填写您的 <strong>WordPress 完整域名</strong>（例如：<code>https://cms.ibocode.com</code>），插件会在通过 API 输出数据时自动在这个域名前缀加在所有的相对路径前面，确保前端图片完美加载。
                        </p>
                    </td>
                </tr>
            </table>
            <?php submit_button('保存设置'); ?>
        </form>
    </div>
    <?php
}

add_action('admin_menu', 'cosun_headless_admin_menu');

function cosun_headless_admin_assets($hook) {
    $is_headless_page  = ($hook === 'toplevel_page_cosun-headless-content');
    $is_page_edit      = ($hook === 'post.php' || $hook === 'post-new.php');
    $current_json_path = null;
    $current_slug      = null;

    if ($is_page_edit) {
        global $post;
        if ($post && $post->post_type === 'page') {
            $current_json_path = get_post_meta($post->ID, '_cosun_headless_json_path', true);
            if ($current_json_path) {
                // 读取页面的 slug
                $pages = cosun_headless_page_definitions();
                foreach ($pages as $p) {
                    if ($p['jsonPath'] === $current_json_path) {
                        $current_slug = $p['slug'];
                        break;
                    }
                }
            }
        }
    }

    if (!$is_headless_page && !$current_json_path) {
        return;
    }

    wp_enqueue_style(
        'cosun-headless-admin',
        plugin_dir_url(__FILE__) . 'admin.css',
        [],
        '0.2.1'
    );
    wp_enqueue_script(
        'cosun-headless-admin',
        plugin_dir_url(__FILE__) . 'admin.js',
        ['jquery'],
        '0.2.1',
        true
    );
    wp_enqueue_media();

    wp_localize_script('cosun-headless-admin', 'CosunHeadless', [
        'content'     => cosun_headless_get_content(),
        'nonce'       => wp_create_nonce('cosun_headless_save'),
        'ajaxUrl'     => admin_url('admin-ajax.php'),
        'pages'       => cosun_headless_page_definitions(),
        'isMetaBox'   => !$is_headless_page,
        'currentSlug' => $current_slug,
        'mediaDomain' => rtrim(get_option('cosun_headless_media_domain', ''), '/'),
    ]);
}

add_action('admin_enqueue_scripts', 'cosun_headless_admin_assets');

// ---------------------------------------------------------------------------
// AJAX: save all content
// ---------------------------------------------------------------------------

function cosun_headless_save() {
    if (!current_user_can('manage_options')) {
        wp_send_json_error(['message' => 'Insufficient permissions.'], 403);
    }
    check_ajax_referer('cosun_headless_save', 'nonce');

    $raw = isset($_POST['content']) ? wp_unslash($_POST['content']) : '';
    if ($raw === '') {
        wp_send_json_error(['message' => 'Missing content payload.'], 400);
    }

    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        wp_send_json_error(['message' => 'Invalid content payload.'], 400);
    }

    global $wpdb;
    $table = cosun_headless_table_name();
    $wpdb->replace(
        $table,
        [
            'id'         => 1,
            'content'    => wp_json_encode($decoded),
            'updated_at' => current_time('mysql'),
        ],
        ['%d', '%s', '%s']
    );
    wp_send_json_success(['message' => 'Content saved.']);
}

add_action('wp_ajax_cosun_headless_save', 'cosun_headless_save');

// ---------------------------------------------------------------------------
// AJAX: save a single section (by dot-path)
// ---------------------------------------------------------------------------

function cosun_headless_save_section() {
    if (!current_user_can('manage_options')) {
        wp_send_json_error(['message' => 'Insufficient permissions.'], 403);
    }
    check_ajax_referer('cosun_headless_save', 'nonce');

    $json_path = isset($_POST['jsonPath']) ? sanitize_text_field(wp_unslash($_POST['jsonPath'])) : '';
    $raw       = isset($_POST['sectionContent']) ? wp_unslash($_POST['sectionContent']) : '';

    if ($json_path === '' || $raw === '') {
        wp_send_json_error(['message' => 'Missing jsonPath or sectionContent.'], 400);
    }

    $section_data = json_decode($raw, true);
    if (!is_array($section_data) && !is_string($section_data)) {
        wp_send_json_error(['message' => 'Invalid sectionContent payload.'], 400);
    }

    $content = cosun_headless_get_content();
    cosun_headless_set_by_path($content, $json_path, $section_data);

    global $wpdb;
    $table = cosun_headless_table_name();
    $wpdb->replace(
        $table,
        [
            'id'         => 1,
            'content'    => wp_json_encode($content),
            'updated_at' => current_time('mysql'),
        ],
        ['%d', '%s', '%s']
    );

    wp_send_json_success(['message' => 'Section saved.']);
}

add_action('wp_ajax_cosun_headless_save_section', 'cosun_headless_save_section');

// ---------------------------------------------------------------------------
// AJAX: reset to defaults
// ---------------------------------------------------------------------------

function cosun_headless_reset() {
    if (!current_user_can('manage_options')) {
        wp_send_json_error(['message' => 'Insufficient permissions.'], 403);
    }
    check_ajax_referer('cosun_headless_save', 'nonce');

    global $wpdb;
    $table = cosun_headless_table_name();
    $wpdb->replace(
        $table,
        [
            'id'         => 1,
            'content'    => wp_json_encode(cosun_headless_default_content()),
            'updated_at' => current_time('mysql'),
        ],
        ['%d', '%s', '%s']
    );
    wp_send_json_success(['message' => 'Content reset to defaults.']);
}

add_action('wp_ajax_cosun_headless_reset', 'cosun_headless_reset');

// ---------------------------------------------------------------------------
// Meta Box on page edit screens
// ---------------------------------------------------------------------------

add_action('add_meta_boxes', function () {
    $slugs = array_column(cosun_headless_page_definitions(), 'slug');
    add_meta_box(
        'cosun_headless_meta_box',
        '⚡ Ibocode Headless Content',
        'cosun_headless_render_meta_box',
        'page',
        'normal',
        'high'
    );
});

function cosun_headless_render_meta_box($post) {
    $json_path = get_post_meta($post->ID, '_cosun_headless_json_path', true);
    if (!$json_path) {
        echo '<p style="color:#888;font-size:12px;">此页面不关联 Ibocode 内容块。</p>';
        return;
    }

    echo '<div id="cosun-headless-metabox-editor" class="cosun-headless is-metabox"></div>';
}
