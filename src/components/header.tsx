'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Printer } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/contexts/cart-context';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '#about', label: 'About', scroll: true },
    { href: '#contact', label: 'Contact', scroll: true },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/70 backdrop-blur-md ' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
          {/*  <Printer className="h-8 w-8 text-white" /> */}
            <span className="text-3xl sm:text-3xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-extrabold text-transparent">Illuminate 3D</span>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.scroll ? (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href.slice(1))}
                  className={`font-medium text-gray-100 transition-colors hover:text-primary ${
                    pathname === link.href ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`font-medium text-gray-100 transition-colors hover:text-primary ${
                    pathname === link.href ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/products"
              className="bg-purple-700 hover:bg-purple-600/70 text-gray-100 px-4 py-2 rounded-2xl font-medium transition-colors"
            >
              Order Now
            </Link>
            <Link 
              href="/cart" 
              className="text-gray-100 hover:text-primary transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-4 -right-2 bg-purple-700 text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
          
          <div className="lg:hidden flex items-center space-x-4">
            <Link 
              href="/cart" 
              className="text-gray-100 hover:text-primary transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-4 -right-2 bg-purple-700 text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              onClick={toggleMenu}
              className="text-gray-100 hover:text-primary transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 ' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />
      
      {/* Mobile Menu Panel */}
      <div 
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[280px] bg-gray-900 border-l text-gray-100  transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b ">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button 
            onClick={toggleMenu}
            className="p-2 hover:bg-accent rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="p-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              link.scroll ? (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href.slice(1))}
                  className={`w-full text-left px-4 py-3 rounded-md transition-colors hover:bg-accent ${
                    pathname === link.href ? 'text-primary font-medium' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`block px-4 py-3 rounded-md transition-colors hover:bg-accent ${
                    pathname === link.href ? 'text-primary font-medium' : 'text-foreground'
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.body.style.overflow = 'auto';
                  }}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link
              href="/products"
              className="block w-full bg-purple-600 hover:bg-purple-600/90 text-gray-100 px-4 py-3 rounded-2xl font-medium transition-colors text-center mt-4"
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = 'auto';
              }}
            >
              Order Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}