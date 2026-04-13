import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { Toaster } from 'react-hot-toast';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Transformations from './components/Transformations';
import Memberships from './components/Memberships';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Smooth Scrolling Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Stop scrolling on load
    lenis.stop();

    const timer = setTimeout(() => {
      setLoading(false);
      lenis.start();
    }, 2500); // 2.5s loading animation

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Toaster position="bottom-right" />
      <CustomCursor />
      
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="relative w-full min-h-screen bg-primary">
          <Navbar />
          <Hero />
          <About />
          <Programs />
          <Transformations />
          <Memberships />
          <Gallery />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
