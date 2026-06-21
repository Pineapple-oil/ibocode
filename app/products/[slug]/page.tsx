import ProductDetail from '@/views/Products/ProductDetail';
import { canUseWoo, fetchProductBySlug } from '@/lib/woocommerce';

type ProductPageProps = PageProps<'/products/[slug]'>;

export default async function Page({ params }: ProductPageProps) {
  const { slug } = await params;

  // When WooCommerce is not configured, or the product is not found in the store,
  // fall back to the site-content default product detail so the page always renders.
  if (!canUseWoo()) {
    return <ProductDetail />;
  }

  const product = await fetchProductBySlug(slug);

  if (!product) {
    return <ProductDetail />;
  }

  return <ProductDetail product={product} />;
}
