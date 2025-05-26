import Hero from '@/components/hero';
import FeaturedProducts from '@/components/featured-products';
import Categories from '@/components/categories';
import About from '@/components/about';
import Contact from '@/components/contact';
import ScrollToTop from '@/components/scrollToTop';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
  return (
     <main className="min-h-screen overflow-x-hidden">
      <Header/>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <About />
      <Contact />
      <ScrollToTop/>
      <Footer/>
      </main>
  );
}