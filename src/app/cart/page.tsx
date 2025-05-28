import Layout from '@/components/layout';
import CartContent from '@/components/cart-content';
import Link from 'next/link';
import {  ChevronLeft} from 'lucide-react';

export default function CartPage() {
  return (
    <Layout>
      <div className="bg-zinc-950  min-h-screen pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className='flex  justify-between items-start'>
 <h1 className="text-3xl font-bold mb-8 text-gray-100">Your Cart</h1>
           <div className=" mt-2 text-gray-300 ">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/90 font-medium"
          >
            <ChevronLeft className="h-4 w-4" />
            <span >Continue Shopping</span>
          </Link>
        </div>
         
        </div>
         <CartContent />
          </div>
      </div>
    </Layout>
  );
}