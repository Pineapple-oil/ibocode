import BlogSingle from '@/views/BlogSingle';
import { fetchPostBySlug } from '@/lib/wp';
import type { WpPost } from '@/lib/wp';
import blogSingle from '@/content/defaults/blog-single.json';

type BlogPostPageProps = PageProps<'/blog/[slug]'>;

export default async function Page({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  // When the post isn't in WordPress (or the backend is unavailable), render the
  // default article from site-content so the page always shows content.
  if (!post) {
    const single = blogSingle;
    const contentHtml = [
      single.body.paragraphs.length ? `<p>${single.body.paragraphs.join('</p><p>')}</p>` : '',
      single.body.sectionTitle ? `<h2>${single.body.sectionTitle}</h2>` : '',
      single.body.sectionParagraph ? `<p>${single.body.sectionParagraph}</p>` : '',
      single.body.subheading ? `<h3>${single.body.subheading}</h3>` : '',
      single.body.subParagraphs.length ? `<p>${single.body.subParagraphs.join('</p><p>')}</p>` : '',
    ]
      .filter(Boolean)
      .join('');
    const tags = single.footer.tags ?? [];
    const fallbackPost = {
      id: 1,
      slug,
      date: '2026-06-18T09:00:00',
      title: { rendered: single.hero.title },
      excerpt: { rendered: single.body.paragraphs[0] ?? '' },
      content: { rendered: contentHtml },
      _embedded: {
        'wp:featuredmedia': single.heroImage
          ? [{ source_url: single.heroImage, alt_text: single.hero.title }]
          : [],
        'wp:term': [
          [
            { id: 1, name: single.hero.eyebrow ?? 'Insights', slug: 'insights', taxonomy: 'category' },
            ...tags.map((tag, index) => ({ id: 100 + index, name: tag, slug: `tag-${index}`, taxonomy: 'post_tag' })),
          ],
        ],
      },
    } as WpPost;
    return <BlogSingle post={fallbackPost} />;
  }

  return <BlogSingle post={post} />;
}
