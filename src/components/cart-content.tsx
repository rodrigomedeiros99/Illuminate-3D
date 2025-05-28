'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ChevronLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { toast } from 'sonner';

export default function CartContent() {
  const { cartItems, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const shipping = subtotal > 75 ? 0 : 9.99;
  const taxRate = 0.07; // 7% tax rate
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
    toast.success('Item removed from cart');
  };

  const incrementQuantity = (productId: string, currentQuantity: number) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  const decrementQuantity = (productId: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      toast.success('Order placed successfully!');
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-card rounded-lg shadow-sm p-8 text-center border border-border" data-aos="fade-up">
        <div className="flex justify-center mb-4">
          <ShoppingCart className="h-16 w-16 text-gray-100" />
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Your cart is empty</h2>
        <p className=" mb-6 text-gray-100">Looks like you haven't added any items to your cart yet.</p>
        <Link 
          href="/products" 
          className="inline-flex text-gray-100 items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-md transition-colors"
        >
          <ChevronLeft className="h-4 w-4 " />
          <span>Continue Shopping</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 shadow-gray-200 ">
      <div className="lg:col-span-2">
        <div className="bg-gray-900 rounded-lg shadow-gray-700 shadow-lg overflow-hidden border border-border" data-aos="fade-up">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-100">Cart Items ({cartItems.length})</h2>
            
            {cartItems.map((item) => (
              <div 
                key={item.product.id} 
                className="flex flex-col py-6 border-b border-border last:border-none"
              >
                {/* Mobile Layout (< 768px) */}
                <div className="flex md:hidden flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 h-24 relative rounded-md overflow-hidden">
                      <Image 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="text-lg font-medium mb-1 break-words text-gray-100">{item.product.name}</h3>
                      <p className="text-gray-100 text-sm mb-2">{item.product.category}</p>
                      <div className="flex items-center gap-2">
                        {item.product.discount > 0 ? (
                          <>
                            <span className="text-purple-600 font-medium">
                              ${(item.product.price * (1 - item.product.discount / 100)).toFixed(2)}
                            </span>
                            <span className="text-gray-100 text-sm line-through">
                              ${item.product.price.toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span className="text-purple-600 font-medium">
                            ${item.product.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => decrementQuantity(item.product.id, item.quantity)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-gray-100 hover:bg-accent transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="mx-2 w-6 text-center text-gray-100">{item.quantity}</span>
                      <button 
                        onClick={() => incrementQuantity(item.product.id, item.quantity)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-gray-100 hover:bg-accent transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button 
                      onClick={() => handleRemoveItem(item.product.id)}
                      className="text-gray-100 hover:text-destructive transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Desktop Layout (≥ 768px) */}
                <div className="hidden md:flex md:flex-row items-start md:items-center">
                  <div className="flex-shrink-0 w-24 h-24 relative rounded-md overflow-hidden">
                    <Image 
                      src={item.product.images[0]} 
                      alt={item.product.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow md:ml-6 min-w-0">
                    <h3 className="text-lg font-medium mb-1 break-words text-gray-100">{item.product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2 text-gray-300">{item.product.category}</p>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {item.product.discount > 0 ? (
                        <>
                          <span className="text-purple-600 font-medium">
                            ${(item.product.price * (1 - item.product.discount / 100)).toFixed(2)}
                          </span>
                          <span className="text-purple-600 text-sm line-through">
                            ${item.product.price.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="text-purple-600 font-medium">
                          ${item.product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <button 
                        onClick={() => decrementQuantity(item.product.id, item.quantity)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-gray-100 hover:bg-accent transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="mx-3 w-6 text-center text-gray-100">{item.quantity}</span>
                      <button 
                        onClick={() => incrementQuantity(item.product.id, item.quantity)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-gray-100 hover:bg-accent transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => handleRemoveItem(item.product.id)}
                      className="text-gray-200 hover:text-destructive transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      
      <div className="lg:col-span-1">
        <div className="bg-gray-900 rounded-lg shadow-lg shadow-gray-700 p-6 border border-border" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-xl font-semibold mb-6 text-gray-100">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-300">Subtotal</span>
              <span className="font-medium text-gray-300">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Shipping</span>
              <span className="font-medium text-gray-300">
                {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Tax (7%)</span>
              <span className="font-medium text-gray-300">${tax.toFixed(2)}</span>
            </div>
            <div className="border-t border-border pt-4 mt-4">
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-gray-300">Total</span>
                <span className="text-lg font-semibold text-gray-300">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleCheckout}
            disabled={isCheckingOut}
            className="w-full bg-purple-600 hover:bg-primary/90 text-gray-100 font-medium py-3 px-6 rounded-md transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
          </button>
          
          <div className="mt-6 text-sm text-gray-300 text-center">
            <p>We accept all major credit cards, PayPal, and Apple Pay.</p>
          </div>
        </div>
      </div>
    </div>
  );
}