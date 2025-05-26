'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ProductCard from './product-card';
import { featuredProducts } from '@/data/products';
import { motion } from 'framer-motion';


export default function FeaturedProducts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [maxVisibleItems, setMaxVisibleItems] = useState(4);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const width = carouselRef.current.offsetWidth;
        setCarouselWidth(width);
        
        let visibleItems = 4;
        if (width < 640) visibleItems = 1;
        else if (width < 1024) visibleItems = 2;
        else if (width < 1280) visibleItems = 3;
        
        setMaxVisibleItems(visibleItems);
        setItemWidth(width / visibleItems);
        setMaxIndex(Math.max(0, featuredProducts.length - visibleItems));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [featuredProducts.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="featured-products" className="py-20 bg-card relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/100 via-gray-900 to-gray-900/100"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text md:text-5xl font-extrabold text-transparent mb-4">Featured Designs</h2>
            <p className="text-gray-400">
              Explore our most innovative 3D printed creations, each piece crafted with precision and artistic vision.
            </p>
          </motion.div>
          
          <Link 
            href="/products" 
            className="mt-4 md:mt-0 text-purple-500 hover:text-primary/90 font-medium inline-flex items-center gap-2 group"
          >
            View All Products
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="relative" data-aos="fade-up">
          <div className="overflow-hidden" ref={carouselRef}>
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${activeIndex * itemWidth}px)`,
              }}
            >
              {featuredProducts.map((product) => (
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
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/90 backdrop-blur-sm hover:bg-background border border-border rounded-full p-3 shadow-lg z-10 text-gray-50 hover:text-primary transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 " />
            </button>
          )}
          
          {activeIndex < maxIndex && (
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/90 backdrop-blur-sm hover:bg-background border border-border rounded-full p-3 shadow-lg z-10 text-gray-50 hover:text-primary transition-colors"
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