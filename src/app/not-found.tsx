import Link from 'next/link';
import { Home, Printer } from 'lucide-react';
import Layout from '@/components/layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/100 via-gray-950 to-neutral-900/100" />
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-600/10 text-purple-600 px-4 py-2 rounded-full mb-8">
              <Printer className="h-5 w-5" />
              <span className="font-medium">Print Job Failed</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                404
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-4">
              Page Not Found
            </h2>
            
            <p className="text-gray-100 mb-8 text-lg">
              Looks like our printer encountered an error. The page you&apos;re looking for seems to be missing from our build plate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-primary/90 text-gray-100 font-medium py-3 px-6 rounded-full transition-colors group"
              >
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
              
              <Link 
                href="/products"
                className="inline-flex items-center justify-center gap-2 border-2 border-purple-600/20 hover:border-primary/40 text-gray-100 font-medium py-3 px-6 rounded-full transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}