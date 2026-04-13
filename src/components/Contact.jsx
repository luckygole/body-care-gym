import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success('Message sent successfully! We will contact you soon.', {
        style: {
          background: '#171717',
          color: '#fff',
          border: '1px solid rgba(255,59,0,0.5)',
        },
        iconTheme: {
          primary: '#ff3b00',
          secondary: '#fff',
        },
      });
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Header Info */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-accent font-heading font-bold tracking-widest uppercase mb-2 block">Reach Out</h4>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Start Your <br/><span className="text-stroke text-transparent">Transformation</span>
            </h2>
            <p className="font-body text-gray-400 text-lg mb-8 max-w-lg">
              Have questions about our plans, trainers, or facilities? Drop us a message and our team will get back to you and guide you to your best shape.
            </p>
            <div className="w-full h-48 bg-[url('https://images.unsplash.com/photo-1540496905036-5937c10647cc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center rounded-xl overflow-hidden relative grayscale opacity-70">
              <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-2xl flex flex-col gap-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-heading font-semibold text-gray-300 uppercase tracking-widest">Full Name</label>
                  <input type="text" id="name" required className="bg-primary/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(255,59,0,0.3)] transition-all duration-300" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-heading font-semibold text-gray-300 uppercase tracking-widest">Email Address</label>
                  <input type="email" id="email" required className="bg-primary/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(255,59,0,0.3)] transition-all duration-300" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-heading font-semibold text-gray-300 uppercase tracking-widest">Phone</label>
                  <input type="tel" id="phone" className="bg-primary/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(255,59,0,0.3)] transition-all duration-300" placeholder="(123) 456-7890" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="goal" className="text-sm font-heading font-semibold text-gray-300 uppercase tracking-widest">Primary Goal</label>
                  <select id="goal" defaultValue="" className="bg-primary/50 border border-white/10 rounded-lg p-4 text-gray-300 focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(255,59,0,0.3)] transition-all duration-300 appearance-none">
                    <option value="" disabled>Select an option</option>
                    <option value="weight_loss">Weight Loss</option>
                    <option value="muscle_gain">Muscle Gain</option>
                    <option value="endurance">Endurance & Cardio</option>
                    <option value="general_fitness">General Fitness</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-heading font-semibold text-gray-300 uppercase tracking-widest">Message</label>
                <textarea id="message" rows="4" required className="bg-primary/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(255,59,0,0.3)] transition-all duration-300 resize-none" placeholder="Tell us more about how we can help..."></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className={`mt-4 bg-accent text-white font-heading font-black text-lg py-4 rounded-lg uppercase tracking-widest transition-all duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white hover:text-primary shadow-[0_4px_14px_rgba(255,59,0,0.4)] hover:shadow-[0_4px_25px_rgba(255,59,0,0.6)]'}`}
              >
                {loading ? 'Submitting...' : 'Submit Now'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
