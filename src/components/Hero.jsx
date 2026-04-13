import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backgrounds = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={backgrounds[bgIndex]} 
            alt="Gym Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-heading text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-white">
            Build <span className="text-stroke text-transparent">Strength.</span><br />
            Burn <span className="text-accent text-glow">Limits.</span>
          </h1>
          <p className="font-body text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
            Join Body Care and become the strongest version of yourself. Transform your body, transform your life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a 
              href="#plans"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white font-heading font-semibold text-lg px-8 py-4 uppercase tracking-wider shadow-[0_0_20px_rgba(255,59,0,0.4)] hover:shadow-[0_0_30px_rgba(255,59,0,0.6)] transition-shadow"
            >
              Join Now
            </motion.a>
            <motion.a 
              href="#programs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass text-white font-heading font-semibold text-lg px-8 py-4 uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Explore Plans
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Animated Sub Text Overlay */}
      <div className="absolute bottom-10 w-full flex justify-between px-12 z-10 hidden md:flex">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex gap-12 font-heading font-black text-white/20 text-4xl tracking-widest uppercase"
        >
          <span>Strength</span>
          <span>Energy</span>
          <span>Results</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 z-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
