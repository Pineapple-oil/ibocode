import Home from '@/views/Home';
import { fetchFeaturedProducts, fetchProductCategories } from '@/lib/woocommerce';

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

export default async function Page() {
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
