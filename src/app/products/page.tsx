import { Suspense } from 'react';
import Layout from '@/components/layout';
import ProductsGrid from '@/components/products-grid';
import ProductsFilters from '@/components/products-filters';
import { Skeleton } from '@/components/ui/skeleton';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string; sort?: string };
}) {
  // ✅ Await searchParams before accessing its properties
  const params = await searchParams;
  const category = typeof params.category === 'string' ? params.category : '';
  const sort = typeof params.sort === 'string' ? params.sort : 'featured';

  return (
    <Layout>
      <div className="bg-zinc-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-8 mb-8 pt-20">
            <h1 className="text-3xl font-bold text-gray-100">All Products</h1>
            <p className="text-sm md:text-base text-gray-100">
              Showing our unique 3D printed designs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 text-gray-100">
              <ProductsFilters selectedCategory={category} />
            </div>

            <div className="lg:col-span-3">
              <Suspense fallback={<ProductGridSkeleton />}>
                <ProductsGrid category={category} sort={sort} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-card rounded-lg overflow-hidden border ">
          <Skeleton className="aspect-square w-full" />
          <div className="p-4">
            <Skeleton className="h-6 w-2/3 mb-2" />
            <Skeleton className="h-4 w-1/3 mb-4" />
            <Skeleton className="h-5 w-1/4" />
          </div>
        </div>
      ))}
    </div>
  );
}
