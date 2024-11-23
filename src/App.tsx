import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceAreas from './components/ServiceAreas';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Navbar />
      <Hero />
      <Services />
      <ServiceAreas />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <CookieBanner />
    </div>
  );
}

export default App;