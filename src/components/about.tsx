'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Layers, Lightbulb, Sparkles, Users } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Advanced Technology',
    description: 'Using state-of-the-art 3D printing technology to create precise, high-quality products'
  },
  {
    icon: Lightbulb,
    title: 'Innovative Design',
    description: 'Pushing boundaries with unique designs that combine form and function'
  },
  {
    icon: Sparkles,
    title: 'Quality Materials',
    description: 'Premium materials ensure durability and stunning visual appeal'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled designers and engineers dedicated to bringing your vision to life'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-gray-900 to-gray-900"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text md:text-4xl font-extrabold text-transparent font-bold">Crafting the Future of Design</h2>
            <p className="text-gray-400 text-lg">
              At Illuminate 3D, we're passionate about pushing the boundaries of what's possible with 3D printing technology. 
              Our journey began with a simple idea: to create beautiful, functional objects that inspire and innovate.
            </p>
            <p className="text-gray-400">
              Every piece we create is a testament to our commitment to quality, innovation, and sustainable manufacturing. 
              We combine cutting-edge technology with artistic vision to bring unique designs into reality.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">1000+</div>
                <div className="text-gray-400">Products Created</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1737010513550-9a2040761980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE5fHwzZCUyMHByaW50aW5nfGVufDB8fDB8fHww"
                alt="3D Printing Process"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <feature.icon className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-lg text-gray-200 font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}