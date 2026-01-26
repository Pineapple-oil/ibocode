export interface WpTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy?: string;
}

export interface WpMedia {
  source_url?: string;
  alt_text?: string;
}

export interface WpPost {
  id: number;
  slug: string;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: WpMedia[];
    'wp:term'?: WpTerm[][];
  };
}

const DEFAULT_WP_BASE = 'https://server.cosunglobal.com';

export const getWpBase = () => {
  const base = process.env.NEXT_PUBLIC_WP_API_BASE || DEFAULT_WP_BASE;
  return base.replace(/\/$/, '');
};

const buildWpUrl = (path: string) => `${getWpBase()}/wp-json${path}`;

export const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '').trim();

export const formatDate = (value: string) => {
  const date = new Date(value);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const getReadTime = (html: string) => {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(3, Math.ceil(words / 200));
  return `${minutes} min read`;
};

export const getFeaturedImage = (post: WpPost) => {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
};

export const getFeaturedAlt = (post: WpPost) => {
  return post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || stripHtml(post.title.rendered);
};

export const getTerms = (post: WpPost) => {
  const groups = post._embedded?.['wp:term'] ?? [];
  const terms = groups.flat();
  const categories = terms.filter((term) => term.taxonomy === 'category');
  const tags = terms.filter((term) => term.taxonomy === 'post_tag');
  return { categories, tags };
};

export const fetchPosts = async (page = 1, perPage = 9) => {
  const url = buildWpUrl(`/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`);
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) {
    return { posts: [] as WpPost[], totalPages: 1, total: 0 };
  }
  const posts = (await response.json()) as WpPost[];
  const totalPages = Number(response.headers.get('X-WP-TotalPages') ?? '1');
  const total = Number(response.headers.get('X-WP-Total') ?? String(posts.length));
  return { posts, totalPages, total };
};

export const fetchPostBySlug = async (slug: string) => {
  const url = buildWpUrl(`/wp/v2/posts?_embed&slug=${encodeURIComponent(slug)}`);
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) {
    return null;
  }
  const posts = (await response.json()) as WpPost[];
  return posts[0] ?? null;
};
