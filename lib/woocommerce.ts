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

export const fetchProductCategories = async (): Promise<WooListResult<WooCategory[]>> => {
  const result = await fetchWoo<WooCategory[]>('/products/categories', {
    per_page: 100,
    hide_empty: 'true',
    orderby: 'name',
    order: 'asc',
  });
  return {
    data: result.data ?? [],
    error: result.ok ? undefined : result.error ?? 'Failed to fetch WooCommerce categories.',
    status: result.status,
  };
};

export const fetchProducts = async (options?: {
  page?: number;
  perPage?: number;
  categoryId?: number;
  search?: string;
  featured?: boolean;
}): Promise<WooListResult<WooProduct[]>> => {
  const result = await fetchWoo<WooProduct[]>('/products', {
    per_page: options?.perPage ?? 12,
    page: options?.page ?? 1,
    category: options?.categoryId,
    search: options?.search,
    featured: options?.featured ? 'true' : undefined,
    status: 'publish',
  });
  return {
    data: result.data ?? [],
    error: result.ok ? undefined : result.error ?? 'Failed to fetch WooCommerce products.',
    status: result.status,
  };
};

export const fetchProductBySlug = async (slug: string) => {
  const result = await fetchWoo<WooProduct[]>('/products', {
    slug,
    status: 'publish',
  });
  return result.data?.[0] ?? null;
};

export const canUseWoo = () => Boolean(WC_KEY && WC_SECRET);
