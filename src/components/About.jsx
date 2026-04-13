import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-primary relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image Side */}
        <motion.div 
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
              alt="Gym Workout" 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-lg shadow-2xl"
            />
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 glass p-6 border-b-4 border-b-accent opacity-90 hidden md:block">
              <h3 className="font-heading font-black text-5xl text-white mb-1"><span className="text-accent">5</span>+</h3>
              <p className="font-body text-gray-300 font-semibold uppercase tracking-wider text-sm">Years of<br/>Experience</p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-white/10 -rotate-3 z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-accent -rotate-6 z-0 mix-blend-overlay"></div>
        </motion.div>

        {/* Content Side */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h4 className="text-accent font-heading font-bold tracking-widest uppercase mb-2 block">Who We Are</h4>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Why Choose <br/><span className="text-stroke text-transparent">Body</span> Care?
            </h2>
          </div>
          
          <p className="font-body text-gray-400 text-lg mb-10 leading-relaxed">
            We are more than just a gym. We are a community of dedicated fitness enthusiasts, professional trainers, and health experts. From top-tier equipment to customized nutrition guides, we provide everything you need to break past your limits.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Certified Trainers", text: "Expert guidance for your goals." },
              { title: "Modern Equipment", text: "Latest tech and premium gear." },
              { title: "Personalized Plans", text: "Tailored workouts just for you." },
              { title: "Nutrition Guidance", text: "Diet maps for real results." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="p-6 glass border-l-4 border-l-transparent hover:border-l-accent hover:bg-white/10 transition-all duration-300 cursor-default group"
                whileHover={{ y: -5 }}
              >
                <h4 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{item.title}</h4>
                <p className="font-body text-gray-400 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-12">
            <a href="#programs" className="text-white font-heading font-bold uppercase tracking-widest border-b-2 border-accent pb-1 hover:text-accent transition-colors">
              Discover Our Programs &rarr;
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
