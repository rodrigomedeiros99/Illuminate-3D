'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text md:text-5xl font-extrabold text-transparent  mb-4">Get in Touch</h2>
            <p className="text-gray-400">
              Have questions about our 3D printed products? We're here to help!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1 text-gray-100">Email Us</h3>
                    <p className="text-gray-400">contact@illuminate3d.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1 text-gray-100">Call Us</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-100 mb-1">Visit Us</h3>
                    <p className="text-gray-400">
                      123 Innovation Drive<br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-100">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800  border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-100">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-100">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-gray-800  border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-md transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-4 w-4 text-gray-100" />
                    <span className='text-gray-100'>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}