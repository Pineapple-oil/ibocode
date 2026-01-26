import { notFound } from 'next/navigation';
import BlogSingle from '@/views/BlogSingle';
import { fetchPostBySlug } from '@/lib/wp';

type BlogPostPageProps = PageProps<'/blog/[slug]'>;

export default async function Page({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return <BlogSingle post={post} />;
}
