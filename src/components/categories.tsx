'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'lamps',
    name: 'Lighting Solutions',
    description: 'Illuminate your space with futuristic designs',
    image: 'https://images.unsplash.com/photo-1742970784789-51ba2f4d6419?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    count: 24
  },
  {
    id: 'vases',
    name: 'Modern Vessels',
    description: 'Sculptural pieces for contemporary spaces',
    image: 'https://images.unsplash.com/photo-1739446700416-f1491913a158?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    count: 18
  },
  {
    id: 'decor',
    name: 'Art Objects',
    description: 'Statement pieces that define spaces',
    image: 'https://images.unsplash.com/photo-1730267252406-e412e23efedf',
    count: 32
  },
  {
    id: 'tech',
    name: 'Tech Innovations',
    description: 'Where function meets future',
    image: 'https://images.unsplash.com/photo-1747228983976-13875480e315',
    count: 15
  }
];

export default function Categories() {
  return (
    <section className="py-20 bg-zinc-950 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text md:text-5xl font-extrabold text-transparent  mb-4">Explore Categories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our collection of precision-engineered 3D printed products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              href={`/products?category=${category.id}`} 
              key={category.id}
              className="group block"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative rounded-xl overflow-hidden bg-card border border-border"
              >
                <div className="aspect-[4/5] relative">
                  <Image 
                    src={category.image} 
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-300 ">{category.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{category.count} Products</span>
                    <ArrowRight className="h-4 w-4 text-purple-600 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}