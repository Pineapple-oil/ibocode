import Home from '@/views/Home';
import { canUseWoo, fetchFeaturedProducts, fetchProductCategories } from '@/lib/woocommerce';
import productsIndex from '@/content/defaults/products-index.json';

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

export default async function Page() {
  // When WooCommerce is not configured, render the homepage from site-content
  // defaults so it never errors on the unreachable backend. The category cards
  // fall back to home.json automatically; the featured strip is populated from
  // the default product catalog.
  if (!canUseWoo()) {
    const catalogProducts = productsIndex.products.map((product, index) => ({
      id: index + 1,
      title: product.title,
      description: product.tags && product.tags.length ? product.tags.join(' · ') : 'Ibocode barcode scanner.',
      image: product.image || '',
      href: product.href || '/products',
    }));
    return <Home featuredProducts={catalogProducts} />;
  }

  const [categoriesResult, featuredProductsResult] = await Promise.all([
    fetchProductCategories(),
    fetchFeaturedProducts(9),
  ]);
  const featuredCategoryCards = categoriesResult.data.slice(0, 6).map((category) => ({
    id: category.id,
    title: category.name,
    description: category.description ? stripHtml(category.description) : '',
    image: category.image?.src || '',
    href: `/products?category=${category.slug}`,
  }));

  const featuredProducts = featuredProductsResult.data.map((product) => ({
    id: product.id,
    title: product.name,
    description: stripHtml(product.short_description || product.description || '') || 'Featured in our current WooCommerce assortment.',
    image: product.images?.[0]?.src || '',
    href: `/products/${product.slug}`,
  }));

  return <Home featuredCategoryCards={featuredCategoryCards} featuredProducts={featuredProducts} />;
}
