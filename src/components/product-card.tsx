'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/contexts/cart-context';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? `Removed from favorites` : `Added to favorites`);
  };

  const finalPrice = product.discount > 0 
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <Link 
      href={`/products/${product.id}`}
      className="group block"
    >
      <div 
        className="relative overflow-hidden rounded-xl bg-background border border-border transition-all duration-300 hover:border-primary/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-square relative">
          <Image 
            src={product.images[0]} 
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`object-cover transition-transform duration-700 ${
              isHovered && product.images.length > 1 ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {product.images.length > 1 && (
            <Image 
              src={product.images[1]} 
              alt={`${product.name} - alternate view`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={`object-cover transition-transform duration-700 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </div>
        
        <div className="absolute top-2 right-2 z-10">
          <button 
            onClick={toggleFavorite}
            className={`rounded-full p-2 transition-all ${
              isFavorite 
                ? 'bg-gray-700/40 text-purple-600' 
                : 'bg-gray-600/60 backdrop-blur-sm text-foreground hover:text-primary'
            }`}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-purple-600/90 text-gray-100 text-xs font-medium px-2 py-1 rounded-full">
            New
          </div>
        )}
        
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-900/90  text-gray-100 text-xs font-medium px-2 py-1 rounded-full">
            {product.discount}% OFF
          </div>
        )}
      </div>
      
      <div className="mt-4 space-y-3">
        <div>
          <h3 className="font-medium text-gray-100 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-400">{product.category}</p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-gray-100 font-medium">${finalPrice.toFixed(2)}</span>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="w-full bg-purple-600/90 hover:bg-primary text-gray-100 py-2.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-colors font-medium"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
}