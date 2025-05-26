import Layout from '@/components/layout';
import ProductDetail from '@/components/product-detail';
import RelatedProducts from '@/components/related-products';
import { notFound } from 'next/navigation';
import { allProducts } from '@/data/products';

// ✅ This works perfectly in Next.js 15
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}

// ✅ Don't use custom PageProps, just inline the type
export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = allProducts.find((p) => p.id === params.id);

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
