import Layout from '@/components/layout';
import ProductDetail from '@/components/product-detail';
import RelatedProducts from '@/components/related-products';
import { notFound } from 'next/navigation';
import { allProducts } from '@/data/products';

// Update the type definition to indicate params is a Promise
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ Await params before accessing its properties
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // ✅ Simulate async fetching (you can fetch from DB/API here)
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-zinc-900">
        <ProductDetail product={product} />
        <RelatedProducts
          currentProductId={product.id}
          category={product.category}
        />
      </div>
    </Layout>
  );
}
