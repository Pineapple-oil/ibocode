import ProductsIndex from '@/views/Products/ProductsIndex';
import { fetchProductCategories, fetchProducts } from '@/lib/woocommerce';
import { stripHtml } from '@/lib/wp';

type ProductsPageProps = PageProps<'/products'>;

export default async function Page({ searchParams }: ProductsPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const rawCategory = Array.isArray(resolvedSearchParams.category)
    ? resolvedSearchParams.category[0]
    : resolvedSearchParams.category;
  const activeCategorySlug =
    typeof rawCategory === 'string' && rawCategory.trim() && rawCategory !== 'all'
      ? rawCategory
      : undefined;

  const [categoriesResult, productsResult, newArrivalsResult] = await Promise.all([
    fetchProductCategories(),
    fetchProducts({
      categoryId: undefined, // resolved below after categories load
      perPage: 12,
    }),
    fetchProducts({ perPage: 3, orderby: 'date', order: 'desc' }),
  ]);

  const categories = categoriesResult.data;
  const activeCategory = activeCategorySlug
    ? categories.find((category) => category.slug === activeCategorySlug)
    : undefined;
  const resolvedActiveSlug = activeCategory?.slug;

  // If a category filter is active, re-fetch filtered products
  const filteredResult = activeCategorySlug
    ? await fetchProducts({ categoryId: activeCategory?.id, perPage: 12 })
    : productsResult;

  const products = filteredResult.data;
  const errorMessage = categoriesResult.error ?? filteredResult.error;

  const totalCount = categories.reduce((sum, category) => sum + (category.count ?? 0), 0);
  const categoryLinks = [
    {
      id: 0,
      label: 'All Products',
      slug: 'all',
      count: totalCount || products.length,
    },
    ...categories.map((category) => ({
      id: category.id,
      label: category.name,
      slug: category.slug,
      count: category.count ?? 0,
      image: category.image?.src,
    })),
  ];

  const productCards = products.map((product) => ({
    id: product.id,
    title: product.name,
    slug: product.slug,
    code: product.sku || `#${product.id}`,
    image: product.images?.[0]?.src,
    badges: [
      product.featured ? 'Featured' : null,
      product.on_sale ? 'Sale' : null,
      product.stock_status === 'outofstock' ? 'Out of Stock' : null,
    ].filter(Boolean) as string[],
    tags: product.categories?.map((category) => category.name) ?? [],
    href: `/products/${product.slug}`,
  }));

  const newArrivals = newArrivalsResult.data.map((product) => ({
    title: product.name,
    code: product.sku || `#${product.id}`,
    image: product.images?.[0]?.src,
  }));

  const hasWooProducts = productCards.length > 0;
  const description = activeCategory?.description ? stripHtml(activeCategory.description) : undefined;
  const countLabel = hasWooProducts ? `${productCards.length} Products Available` : undefined;

  return (
    <ProductsIndex
      error={errorMessage}
      categories={categoryLinks}
      products={productCards}
      newArrivals={newArrivals.length > 0 ? newArrivals : undefined}
      activeCategory={resolvedActiveSlug}
      title={activeCategory?.name}
      description={description}
      countLabel={countLabel}
    />
  );
}
