import Blog from '@/views/Blog';
import { fetchPosts } from '@/lib/wp';

interface BlogPageProps {
  searchParams?: {
    page?: string | string[];
  };
}

export default async function Page({ searchParams }: BlogPageProps) {
  const rawPage = Array.isArray(searchParams?.page)
    ? searchParams?.page[0]
    : searchParams?.page;
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
