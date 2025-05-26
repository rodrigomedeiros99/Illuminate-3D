import Layout from '@/components/layout';
import ProductDetail from '@/components/product-detail';
import RelatedProducts from '@/components/related-products';
import { notFound } from 'next/navigation';
import { allProducts } from '@/data/products';

// ✅ Define the correct props interface
interface ProductPageProps {
  params: {
    id: string;
  };
}

// ✅ Correct return type for generateStaticParams
export async function generateStaticParams(): Promise<ProductPageProps['params'][]> {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}

// ✅ Use the typed props
export default function ProductPage({ params }: ProductPageProps) {
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
