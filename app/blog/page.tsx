import Blog from '@/views/Blog';
import { fetchPosts } from '@/lib/wp';
import type { WpPost } from '@/lib/wp';
import blogContent from '@/content/defaults/blog.json';

type BlogPageProps = PageProps<'/blog'>;

// When the WordPress backend is unavailable, fall back to the posts defined in
// site-content defaults so the blog index is never empty.
const fallbackPosts = blogContent.posts.map((post, index) => ({
  id: index + 1,
  slug: `post-${index + 1}`,
  date: post.date,
  title: { rendered: post.title },
  excerpt: { rendered: post.excerpt },
  content: { rendered: post.excerpt },
  _embedded: {
    'wp:featuredmedia': post.image ? [{ source_url: post.image, alt_text: post.title }] : [],
    'wp:term': [[{ id: 1, name: post.category, slug: 'category', taxonomy: 'category' }]],
  },
})) as WpPost[];

export default async function Page({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const rawPage = Array.isArray(resolvedSearchParams.page)
    ? resolvedSearchParams.page[0]
    : resolvedSearchParams.page;
  const pageParam = Number(rawPage ?? '1');
  const page = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;
  const { posts, totalPages, total } = await fetchPosts(page, 9);

  const useFallback = posts.length === 0;
  const resolvedPosts = useFallback ? fallbackPosts : posts;

  return (
    <Blog
      posts={resolvedPosts}
      pagination={{
        page,
        totalPages: useFallback ? 1 : totalPages,
        total: useFallback ? resolvedPosts.length : total,
      }}
    />
  );
}
