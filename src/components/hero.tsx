'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight,ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center pt-28">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1705475025559-ad8efdedc74f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold  text-white">
            Welcome to <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent  font-extrabold">Illuminate</span>
          </h1>
          <h2 className="text-3xl md:text-5xl  text-white mb-8  font-extrabold">
            3D Printing Solutions
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-400 mb-6">
              Transform your ideas into reality with our premium 3D printing services.
               From concept to creation, we bring your vision to life.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <Link 
                href="/products"
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group"
              >
                Explore Products
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="#contact"
                className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
          <div className="flex justify-center align-bottom pt-44  animate-bounce">
          <ChevronDown
            size={45}
            className="text-purple-600 cursor-pointer"
            onClick={() =>
              document
                .getElementById("featured-products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
        </motion.div>
        
      </div>
    </div>
    
  );
}