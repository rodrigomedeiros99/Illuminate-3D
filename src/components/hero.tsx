"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  // Initialize AOS on component mount
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: false
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="https://images.unsplash.com/photo-1705475025559-ad8efdedc74f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Car being washed"
          fill
          priority
          className="object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-bold leading-tight mb-4">
             Welcome to <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent  font-extrabold">Illuminate</span> 3D Printing Solutions

            </h1>
            
            <p className="text-md md:text-md 2xl:xl opacity-90 mb-8 max-w-xl">
              Transform your ideas into reality with our premium 3D printing services.
               From concept to creation, we bring your vision to life.

            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="bg-purple-600 hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 group"
                data-aos="fade-up" 
                data-aos-delay="100"
              >
                Explore Products
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="#contact" 
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center sm:justify-start gap-2"
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div 
            className="hidden lg:block" 
            data-aos="fade-left" 
            data-aos-delay="200"
          >
            <div className="bg-gradient-to-tr from-blue-500/20 to-teal-500/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl shadow-gray-800">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1715059250871-08786b8a884a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern car wash"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-white">
                <p className="font-medium text-lg">Next Generation Of 3D Printer</p>
                <p className="opacity-80">Using advanced technology</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating feature badges */}
        <div className="hidden md:flex justify-center mt-12 gap-6" data-aos="fade-up" data-aos-delay="400">
          {["Precision Crafting", "Custom Creations", "5-Star Service"].map((feature, index) => (
            <div key={index} className="px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white/90">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute mb-16 xl:mb-1 2xl:mb-6 bottom-10 inset-x-0 flex flex-col items-center text-white animate-bounce">
  <Link href="#services" className="flex flex-col items-center text-center">
    <span className="text-sm opacity-70 mb-2">Scroll Down</span>
    <FiArrowDown size={20} />
  </Link>
</div>

    </section>
  );
}