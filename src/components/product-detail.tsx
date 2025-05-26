'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Minus, Plus, Heart, ShoppingCart, Truck, RotateCw, Shield } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/contexts/cart-context';
import { toast } from 'sonner';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? `Removed from favorites` : `Added to favorites`);
  };

  return (
    <div className="container mx-auto px-4 text-gray-100 " data-aos="fade-up">
      <Link 
        href="/products" 
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ChevronLeft className="h-4 w-4" />
        <span>Back to Products</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
            <Image 
              src={mainImage} 
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              className="object-cover"
            />
          </div>
          
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button 
                key={index}
                onClick={() => setMainImage(image)}
                className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden ${
                  mainImage === image ? 'ring-2 ring-primary' : 'ring-1 ring-border'
                }`}
              >
                <Image 
                  src={image} 
                  alt={`${product.name} - view ${index + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
            <p className="text-muted-foreground">{product.category}</p>
          </div>
          
          <div className="mb-6">
            {product.discount > 0 ? (
              <div className="flex items-end space-x-2">
                <span className="text-2xl font-bold text-purple-600">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="text-lg text-gray-300 line-through">
                  ${product.price.toFixed(2)}
                </span>
                <span className="bg-red-600/50 text-red-300 text-sm font-medium px-2 py-0.5 rounded">
                  {product.discount}% OFF
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <div className="prose prose-invert text-muted-foreground mb-6">
            <p>{product.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium text-foreground mb-3">Quantity</h3>
            <div className="flex items-center">
              <button 
                onClick={decrementQuantity}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="mx-3 w-6 text-center text-foreground">{quantity}</span>
              <button 
                onClick={incrementQuantity}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="flex space-x-4 mb-8">
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-purple-600 hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            
            <button 
              onClick={toggleFavorite}
              className={`w-14 h-14 rounded-md flex items-center justify-center ${
                isFavorite 
                  ? 'bg-primary/10 text-primary border border-primary/20' 
                  : 'bg-accent text-foreground hover:text-primary border border-border'
              } transition-colors`}
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart className="h-6 w-6" fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
          </div>
          
          <div className="space-y-4 border-t border-border pt-6">
            <div className="flex items-start space-x-3">
              <Truck className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground">Free Shipping</h4>
                <p className="text-sm text-muted-foreground">Free shipping on orders over $75</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <RotateCw className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground">Easy Returns</h4>
                <p className="text-sm text-muted-foreground">30-day return policy</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground">Quality Guarantee</h4>
                <p className="text-sm text-muted-foreground">Each item is handcrafted with precision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}