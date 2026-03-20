import 'server-only';

export interface WooImage {
  id: number;
  src: string;
  name?: string;
  alt?: string;
}

export interface WooTerm {
  id: number;
  name: string;
  slug: string;
}

export interface WooAttribute {
  id: number;
  name: string;
  options: string[];
  visible?: boolean;
}

export interface WooCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  count?: number;
  image?: WooImage | null;
  permalink?: string;
}

export interface WooProduct {
  id: number;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  featured: boolean;
  stock_status: string;
  images: WooImage[];
  categories: WooTerm[];
  tags: WooTerm[];
  attributes: WooAttribute[];
}

interface WooFetchResult<T> {
  ok: boolean;
  status: number;
  data: T | null;
  error?: string;
}

interface WooStoreCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  count?: number;
  image?: {
    id?: number;
    src?: string;
    thumbnail?: string;
    alt?: string;
    name?: string;
  } | null;
  permalink?: string;
}

interface WooStoreProduct {
  id: number;
  name: string;
  slug: string;
  permalink?: string;
  short_description?: string;
  description?: string;
  images?: Array<{
    id?: number;
    src?: string;
    thumbnail?: string;
    alt?: string;
    name?: string;
  }>;
}

interface WpProductCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  count?: number;
  link?: string;
}

interface WpEmbeddedMediaSize {
  source_url?: string;
}

interface WpEmbeddedMedia {
  source_url?: string;
  alt_text?: string;
  media_details?: {
    sizes?: {
      woocommerce_single?: WpEmbeddedMediaSize;
      woocommerce_thumbnail?: WpEmbeddedMediaSize;
      thumbnail?: WpEmbeddedMediaSize;
      medium?: WpEmbeddedMediaSize;
      full?: WpEmbeddedMediaSize;
    };
  };
}

interface WpEmbeddedTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy?: string;
}

interface WpProduct {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: WpEmbeddedMedia[];
    'wp:term'?: WpEmbeddedTerm[][];
  };
}

export interface WooListResult<T> {
  data: T;
  error?: string;
  status?: number;
}

const DEFAULT_WP_BASE = 'https://server.cosunglobal.com';
const WC_API_BASE = process.env.WC_API_BASE || process.env.NEXT_PUBLIC_WP_API_BASE || DEFAULT_WP_BASE;
const WC_API_ROOT = `${WC_API_BASE.replace(/\/$/, '')}/wp-json/wc/v3`;
const WC_KEY = process.env.WC_CONSUMER_KEY;
const WC_SECRET = process.env.WC_CONSUMER_SECRET;

const getAuthHeader = () => {
  if (!WC_KEY || !WC_SECRET) return null;
  const encoded = Buffer.from(`${WC_KEY}:${WC_SECRET}`).toString('base64');
  return `Basic ${encoded}`;
};

const buildUrl = (path: string, params?: Record<string, string | number | undefined | null>) => {
  const url = new URL(`${WC_API_ROOT}${path}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === null || value === '') return;
      url.searchParams.set(key, String(value));
    });
  }
  return url.toString();
};

const buildStoreUrl = (path: string, params?: Record<string, string | number | undefined | null>) => {
  const url = new URL(`${WC_API_BASE.replace(/\/$/, '')}/wp-json/wc/store/v1${path}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === null || value === '') return;
      url.searchParams.set(key, String(value));
    });
  }
  return url.toString();
};

const buildWpTaxonomyUrl = (path: string, params?: Record<string, string | number | undefined | null>) => {
  const url = new URL(`${WC_API_BASE.replace(/\/$/, '')}/wp-json/wp/v2${path}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === null || value === '') return;
      url.searchParams.set(key, String(value));
    });
  }
  return url.toString();
};

const fetchWoo = async <T>(path: string, params?: Record<string, string | number | undefined | null>): Promise<WooFetchResult<T>> => {
  const authHeader = getAuthHeader();
  if (!authHeader) {
    return { ok: false, status: 0, data: null, error: 'Missing WooCommerce credentials.' };
  }

  const response = await fetch(buildUrl(path, params), {
    headers: {
      Accept: 'application/json',
      Authorization: authHeader,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    let errorMessage = `Request failed: ${response.status}`;
    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      const errorBody = (await response.json().catch(() => null)) as
        | { message?: string; data?: { params?: Record<string, string> } }
        | null;
      if (errorBody?.message) {
        errorMessage = `${errorBody.message} (status ${response.status})`;
      } else if (errorBody?.data?.params) {
        const fields = Object.keys(errorBody.data.params).join(', ');
        errorMessage = `Invalid parameter(s): ${fields} (status ${response.status})`;
      }
    } else {
      const text = await response.text().catch(() => '');
      if (text) {
        errorMessage = `${text} (status ${response.status})`;
      }
    }
    return { ok: false, status: response.status, data: null, error: errorMessage };
  }

  const data = (await response.json()) as T;
  return { ok: true, status: response.status, data };
};

const fetchWooStore = async <T>(path: string, params?: Record<string, string | number | undefined | null>): Promise<WooFetchResult<T>> => {
  const response = await fetch(buildStoreUrl(path, params), {
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    let errorMessage = `Request failed: ${response.status}`;
    const text = await response.text().catch(() => '');
    if (text) {
      errorMessage = `${text} (status ${response.status})`;
    }
    return { ok: false, status: response.status, data: null, error: errorMessage };
  }

  const data = (await response.json()) as T;
  return { ok: true, status: response.status, data };
};

const fetchWpTaxonomy = async <T>(path: string, params?: Record<string, string | number | undefined | null>): Promise<WooFetchResult<T>> => {
  const response = await fetch(buildWpTaxonomyUrl(path, params), {
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    let errorMessage = `Request failed: ${response.status}`;
    const text = await response.text().catch(() => '');
    if (text) {
      errorMessage = `${text} (status ${response.status})`;
    }
    return { ok: false, status: response.status, data: null, error: errorMessage };
  }

  const data = (await response.json()) as T;
  return { ok: true, status: response.status, data };
};

const fetchWpProducts = async <T>(path: string, params?: Record<string, string | number | undefined | null>): Promise<WooFetchResult<T>> => {
  const response = await fetch(buildWpTaxonomyUrl(path, params), {
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    let errorMessage = `Request failed: ${response.status}`;
    const text = await response.text().catch(() => '');
    if (text) {
      errorMessage = `${text} (status ${response.status})`;
    }
    return { ok: false, status: response.status, data: null, error: errorMessage };
  }

  const data = (await response.json()) as T;
  return { ok: true, status: response.status, data };
};

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const mapWpProductToWooProduct = (product: WpProduct): WooProduct => {
  const media = product._embedded?.['wp:featuredmedia']?.[0];
  const imageSources = [
    media?.media_details?.sizes?.woocommerce_single?.source_url,
    media?.media_details?.sizes?.woocommerce_thumbnail?.source_url,
    media?.media_details?.sizes?.medium?.source_url,
    media?.media_details?.sizes?.thumbnail?.source_url,
    media?.source_url,
  ].filter(Boolean) as string[];

  const terms = (product._embedded?.['wp:term'] ?? []).flat();
  const categories = terms
    .filter((term) => term.taxonomy === 'product_cat')
    .map((term) => ({
      id: term.id,
      name: term.name,
      slug: term.slug,
    }));
  const tags = terms
    .filter((term) => term.taxonomy === 'product_tag')
    .map((term) => ({
      id: term.id,
      name: term.name,
      slug: term.slug,
    }));

  return {
    id: product.id,
    name: stripHtml(product.title.rendered),
    slug: product.slug,
    description: product.content.rendered || '',
    short_description: product.excerpt.rendered || '',
    sku: '',
    price: '',
    regular_price: '',
    sale_price: '',
    on_sale: false,
    featured: false,
    stock_status: 'instock',
    images: imageSources.map((src, index) => ({
      id: index + 1,
      src,
      alt: media?.alt_text || stripHtml(product.title.rendered),
    })),
    categories,
    tags,
    attributes: [],
  };
};

const mapWooStoreProductToWooProduct = (product: WooStoreProduct): WooProduct => ({
  id: product.id,
  name: stripHtml(product.name),
  slug: product.slug,
  description: product.description || '',
  short_description: product.short_description || '',
  sku: '',
  price: '',
  regular_price: '',
  sale_price: '',
  on_sale: false,
  featured: true,
  stock_status: 'instock',
  images: (product.images ?? []).map((image, index) => ({
    id: image.id ?? index + 1,
    src: image.src || image.thumbnail || '',
    name: image.name,
    alt: image.alt,
  })),
  categories: [],
  tags: [],
  attributes: [],
});

export const fetchProductCategories = async (): Promise<WooListResult<WooCategory[]>> => {
  const result = await fetchWoo<WooCategory[]>('/products/categories', {
    per_page: 100,
    hide_empty: 'true',
    orderby: 'name',
    order: 'asc',
  });

  if (result.ok && result.data) {
    return {
      data: result.data,
      error: undefined,
      status: result.status,
    };
  }

  const wpTermsResult = await fetchWpTaxonomy<WpProductCategory[]>('/product_cat', {
    per_page: 100,
    orderby: 'name',
    order: 'asc',
  });

  if (wpTermsResult.ok && wpTermsResult.data) {
    return {
      data: wpTermsResult.data.map((category) => ({
        id: category.id,
        name: category.name,
        slug: category.slug,
        description: category.description,
        count: category.count,
        permalink: category.link,
        image: null,
      })),
      error: undefined,
      status: wpTermsResult.status,
    };
  }

  const storeResult = await fetchWooStore<WooStoreCategory[]>('/products/categories', {
    per_page: 100,
    orderby: 'name',
    order: 'asc',
  });

  const fallbackData = (storeResult.data ?? []).map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    description: category.description,
    count: category.count,
    permalink: category.permalink,
    image: category.image
      ? {
          id: category.image.id ?? 0,
          src: category.image.thumbnail || category.image.src || '',
          name: category.image.name,
          alt: category.image.alt,
        }
      : null,
  }));

  return {
    data: fallbackData,
    error: storeResult.ok ? undefined : result.error ?? storeResult.error ?? 'Failed to fetch WooCommerce categories.',
    status: storeResult.status ?? result.status,
  };
};

export const fetchProducts = async (options?: {
  page?: number;
  perPage?: number;
  categoryId?: number;
  search?: string;
  featured?: boolean;
  orderby?: string;
  order?: 'asc' | 'desc';
}): Promise<WooListResult<WooProduct[]>> => {
  const result = await fetchWoo<WooProduct[]>('/products', {
    per_page: options?.perPage ?? 12,
    page: options?.page ?? 1,
    category: options?.categoryId,
    search: options?.search,
    featured: options?.featured ? 'true' : undefined,
    orderby: options?.orderby,
    order: options?.order,
    status: 'publish',
  });

  if (result.ok && result.data) {
    return {
      data: result.data,
      error: undefined,
      status: result.status,
    };
  }

  const wpResult = await fetchWpProducts<WpProduct[]>('/product', {
    _embed: '1',
    per_page: options?.perPage ?? 12,
    page: options?.page ?? 1,
    product_cat: options?.categoryId,
    search: options?.search,
    orderby: options?.orderby === 'date' ? 'date' : undefined,
    order: options?.order,
  });

  return {
    data: (wpResult.data ?? []).map(mapWpProductToWooProduct),
    error: wpResult.ok ? undefined : result.error ?? wpResult.error ?? 'Failed to fetch WooCommerce products.',
    status: wpResult.status ?? result.status,
  };
};

export const fetchProductBySlug = async (slug: string) => {
  const result = await fetchWoo<WooProduct[]>('/products', {
    slug,
    status: 'publish',
  });

  if (result.ok && result.data?.[0]) {
    return result.data[0];
  }

  const wpResult = await fetchWpProducts<WpProduct[]>('/product', {
    _embed: '1',
    slug,
  });

  if (wpResult.ok && wpResult.data?.[0]) {
    return mapWpProductToWooProduct(wpResult.data[0]);
  }

  return null;
};

export const fetchFeaturedProducts = async (limit = 6): Promise<WooListResult<WooProduct[]>> => {
  const result = await fetchWoo<WooProduct[]>('/products', {
    per_page: limit,
    featured: 'true',
    status: 'publish',
  });

  if (result.ok && result.data) {
    return {
      data: result.data,
      error: undefined,
      status: result.status,
    };
  }

  const storeResult = await fetchWooStore<WooStoreProduct[]>('/products', {
    per_page: limit,
    featured: 'true',
  });

  return {
    data: (storeResult.data ?? []).map(mapWooStoreProductToWooProduct),
    error: storeResult.ok ? undefined : result.error ?? storeResult.error ?? 'Failed to fetch featured WooCommerce products.',
    status: storeResult.status ?? result.status,
  };
};

export const canUseWoo = () => Boolean(WC_KEY && WC_SECRET);
