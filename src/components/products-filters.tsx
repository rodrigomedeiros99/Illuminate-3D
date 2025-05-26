'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, X } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';

const categories = [
  { id: '', name: 'All Products' },
  { id: 'lamps', name: 'Lamps & Lighting' },
  { id: 'vases', name: 'Vases & Planters' },
  { id: 'decor', name: 'Home Decor' },
  { id: 'tech', name: 'Tech Accessories' }
];

const priceRanges = [
  { id: 'under-50', name: 'Under $50', min: 0, max: 50 },
  { id: '50-100', name: '$50 - $100', min: 50, max: 100 },
  { id: '100-200', name: '$100 - $200', min: 100, max: 200 },
  { id: 'over-200', name: 'Over $200', min: 200, max: Infinity }
];

interface ProductsFiltersProps {
  selectedCategory: string;
}

export default function ProductsFilters({ selectedCategory }: ProductsFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedPrice = searchParams.get('price') || '';
  
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const handlePriceChange = (priceRange: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedPrice === priceRange) {
      params.delete('price');
    } else {
      params.set('price', priceRange);
    }
    if (selectedCategory) {
      params.set('category', selectedCategory);
    }
    router.push(`/products?${params.toString()}`);
  };
  
  const handleClearFilters = () => {
    router.push('/products');
  };
  
  return (
    <>
      {/* Mobile filter button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="w-full py-3 px-4 bg-card border rounded-md flex justify-between items-center"
        >
          <span className="font-medium">Filters</span>
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
      
      {/* Mobile filter sidebar */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)}></div>
          <div className="absolute top-0 right-0 h-full w-80 bg-gray-900 shadow-xl p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">Filters</h3>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="border-b border-border pb-4 mb-4">
              <button
                className="flex justify-between items-center w-full py-2"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                <h3 className="font-medium">Category</h3>
                <ChevronDown className={`h-5 w-5 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCategoryOpen && (
                <div className="mt-2 space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <Link
                        href={category.id ? `/products?category=${category.id}` : '/products'}
                        className={`block py-1 ${
                          selectedCategory === category.id ? 'text-primary font-medium' : 'text-foreground'
                        }`}
                        onClick={() => setIsFilterOpen(false)}
                      >
                        {category.name}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="border-b border-border pb-4 mb-4">
              <button
                className="flex justify-between items-center w-full py-2"
                onClick={() => setIsPriceOpen(!isPriceOpen)}
              >
                <h3 className="font-medium">Price Range</h3>
                <ChevronDown className={`h-5 w-5 transition-transform ${isPriceOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPriceOpen && (
                <div className="mt-2 space-y-2">
                  {priceRanges.map((range) => (
                    <div key={range.id} className="flex items-center">
                      <label className="flex items-center space-x-2 text-foreground">
                        <input
                          type="checkbox"
                          checked={selectedPrice === range.id}
                          onChange={() => handlePriceChange(range.id)}
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span>{range.name}</span>
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <button
              onClick={handleClearFilters}
              className="w-full py-2 px-4 border bg-purple-600  rounded-md text-foreground hover:bg-accent transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}
      
      {/* Desktop filters */}
      <div className="hidden lg:block bg-card rounded-lg shadow-sm p-6 border ">
        <div className="border-b border-border pb-4 mb-4">
          <button
            className="flex justify-between items-center w-full py-2"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            <h3 className="font-medium">Category</h3>
            <ChevronDown className={`h-5 w-5 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isCategoryOpen && (
            <div className="mt-2 space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <Link
                    href={category.id ? `/products?category=${category.id}` : '/products'}
                    className={`block py-1 ${
                      selectedCategory === category.id ? 'text-primary font-medium' : 'text-foreground'
                    }`}
                  >
                    {category.name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="border-b border-border pb-4 mb-4">
          <button
            className="flex justify-between items-center w-full py-2"
            onClick={() => setIsPriceOpen(!isPriceOpen)}
          >
            <h3 className="font-medium">Price Range</h3>
            <ChevronDown className={`h-5 w-5 transition-transform ${isPriceOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isPriceOpen && (
            <div className="mt-2 space-y-2">
              {priceRanges.map((range) => (
                <div key={range.id} className="flex items-center">
                  <label className="flex items-center space-x-2 text-foreground">
                    <input
                      type="checkbox"
                      checked={selectedPrice === range.id}
                      onChange={() => handlePriceChange(range.id)}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span>{range.name}</span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <button
          onClick={handleClearFilters}
          className="w-full py-2 px-4 border border-border rounded-md text-foreground hover:bg-accent transition-colors"
        >
          Clear Filters
        </button>
      </div>
    </>
  );
}