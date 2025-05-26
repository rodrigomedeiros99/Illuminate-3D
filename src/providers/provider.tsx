'use client';

import { CartProvider } from '@/contexts/cart-context';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return <CartProvider>{children}</CartProvider>;
}