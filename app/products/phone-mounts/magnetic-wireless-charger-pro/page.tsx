import ProductDetail from '@/views/Products/ProductDetail';
import { fetchProductBySlug } from '@/lib/woocommerce';

export default async function Page() {
  const product = await fetchProductBySlug('magnetic-wireless-charger-pro');
  return <ProductDetail product={product} />;
}
