import Blog from '@/views/Blog';
import { fetchPosts } from '@/lib/wp';

type BlogPageProps = PageProps<'/blog'>;

export default async function Page({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const rawPage = Array.isArray(resolvedSearchParams.page)
    ? resolvedSearchParams.page[0]
    : resolvedSearchParams.page;
  const pageParam = Number(rawPage ?? '1');
  const page = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;
  const { posts, totalPages, total } = await fetchPosts(page, 9);

  return (
    <Blog
      posts={posts}
      pagination={{
        page,
        totalPages,
        total,
      }}
    />
  );
}
