import { notFound } from 'next/navigation';
import ProductDetail from '@/views/Products/ProductDetail';
import { fetchProductBySlug } from '@/lib/woocommerce';

type ProductPageProps = PageProps<'/products/[slug]'>;

export default async function Page({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
