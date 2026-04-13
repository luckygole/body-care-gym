import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Plans', href: '#plans' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Rough active section logic
      const sections = document.querySelectorAll('section');
      let currentSection = 'Home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          currentSection = section.getAttribute('id');
        }
      });
      if(currentSection) {
        setActiveSection(currentSection.charAt(0).toUpperCase() + currentSection.slice(1));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-primary/90 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="font-heading text-2xl font-black text-white tracking-widest z-50">
          BODY<span className="text-accent">CARE</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative font-body text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-colors group"
            >
              {link.name}
              {activeSection === link.name ? (
                <motion.div 
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent"
                />
              ) : (
                <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              )}
            </a>
          ))}
          <a href="#plans" className="ml-4 px-6 py-2.5 bg-accent text-white font-heading font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
            Join Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white text-3xl z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-primary/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="font-heading text-3xl font-semibold text-white hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
