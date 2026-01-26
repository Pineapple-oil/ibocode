import { notFound } from 'next/navigation';
import BlogSingle from '@/views/BlogSingle';
import { fetchPostBySlug } from '@/lib/wp';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: BlogPostPageProps) {
  const post = await fetchPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return <BlogSingle post={post} />;
}
