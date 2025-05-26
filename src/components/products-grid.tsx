'use client';

import { useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ProductCard from './product-card';
import { allProducts } from '@/data/products';

interface ProductsGridProps {
  category: string;
  sort: string;
}

export default function ProductsGrid({ category, sort }: ProductsGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const priceRange = searchParams.get('price') || '';
  
  const filteredProducts = useMemo(() => {
    let products = [...allProducts];
    
    // Filter by category
    if (category) {
      products = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }
    
    // Filter by price range
    if (priceRange) {
      products = products.filter(product => {
        const price = product.discount > 0 
          ? product.price * (1 - product.discount / 100) 
          : product.price;
          
        switch (priceRange) {
          case 'under-50':
            return price < 50;
          case '50-100':
            return price >= 50 && price <= 100;
          case '100-200':
            return price >= 100 && price <= 200;
          case 'over-200':
            return price > 200;
          default:
            return true;
        }
      });
    }
    
    // Sort products
    switch (sort) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        products.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
        break;
      case 'featured':
      default:
        // No additional sorting needed for featured
        break;
    }
    
    return products;
  }, [category, sort, priceRange]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', event.target.value);
    if (category) {
      params.set('category', category);
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-300">{filteredProducts.length} products</p>
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-gray-300 text-sm">Sort by:</label>
          <select 
            id="sort"
            value={sort}
            onChange={handleSortChange}
            className="bg-card border border-border text-foreground text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} data-aos="fade-up">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}