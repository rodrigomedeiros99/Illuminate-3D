import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Printer, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Printer className="h-8 w-8 text-primary" />
              <span className="text-2xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text md:text-3xl font-extrabold text-transparent font-bold">Illuminate 3D</span>
            </div>
            <p className="text-gray-400 mb-6">
              Creating beautiful 3D printed objects to illuminate your life and spaces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/products?category=lamps" className="text-gray-400 hover:text-white transition-colors">Lamps</Link></li>
              <li><Link href="/products?category=vases" className="text-gray-400 hover:text-white transition-colors">Vases</Link></li>
              <li><Link href="/products?category=decor" className="text-gray-400 hover:text-white transition-colors">Home Decor</Link></li>
              <li><Link href="/products?category=tech" className="text-gray-400 hover:text-white transition-colors">Tech Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400">contact@illuminate3d.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-gray-400">
                  123 Innovation Drive<br />
                  Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Illuminate 3D. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}