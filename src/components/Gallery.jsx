import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop",
];

const Gallery = () => {
  return (
    <section id="gallery" className="w-full bg-primary py-24">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-accent font-heading font-bold tracking-widest uppercase mb-2"
        >
          Gallery
        </motion.h4>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
        >
          Inside <span className="text-stroke text-transparent">Body Care</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="relative group overflow-hidden h-72 md:h-96"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <img 
              src={img} 
              alt={`Gym facility ${idx + 1}`} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-accent font-heading font-bold uppercase tracking-widest text-sm mb-1 block">Facility Preview</span>
                <h3 className="font-heading font-bold text-white text-xl">State of the art</h3>
              </div>
            </div>
            {/* Glow border on hover */}
            <div className="absolute inset-0 border-[3px] border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100" style={{ transitionProperty: 'opacity, transform' }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
