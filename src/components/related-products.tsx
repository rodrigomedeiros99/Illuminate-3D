'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './product-card';
import { allProducts } from '@/data/products';

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [maxVisibleItems, setMaxVisibleItems] = useState(4);
  
  const relatedProducts = allProducts.filter(
    p => p.category === category && p.id !== currentProductId
  ).slice(0, 8);
  
  const maxIndex = Math.max(0, relatedProducts.length - maxVisibleItems);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const width = carouselRef.current.offsetWidth;
        
        let visibleItems = 4;
        if (width < 640) visibleItems = 1;
        else if (width < 1024) visibleItems = 2;
        else if (width < 1280) visibleItems = 3;
        
        setMaxVisibleItems(visibleItems);
        setItemWidth(width / visibleItems);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-zinc-900 mt-16 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-gray-100" data-aos="fade-up">You May Also Like</h2>
        
        <div className="relative" data-aos="fade-up">
          <div className="overflow-hidden" ref={carouselRef}>
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${activeIndex * itemWidth}px)`,
              }}
            >
              {relatedProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="flex-shrink-0"
                  style={{ width: itemWidth ? `${itemWidth}px` : '25%' }}
                >
                  <div className="p-4">
                    <ProductCard product={product} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {activeIndex > 0 && (
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border border-border rounded-full p-3 shadow-lg z-10 text-foreground hover:text-primary transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          
          {activeIndex < maxIndex && relatedProducts.length > maxVisibleItems && (
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border border-border rounded-full p-3 shadow-lg z-10 text-foreground hover:text-primary transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}