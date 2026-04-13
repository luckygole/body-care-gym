import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Member for 2 years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150",
    text: "Best gym experience ever! The facilities are unmatched and the trainers genuinely care about your progress. My body completely changed after joining.",
  },
  {
    name: "Sarah Williams",
    role: "Pro Athlete",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=150&h=150",
    text: "Amazing trainers and results. I needed a facility that could support my intensive training regimes, and Body Care exceeded all expectations.",
  },
  {
    name: "Michael Chen",
    role: "Weight Loss Achiever",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150",
    text: "I was intimidated by gyms before coming here. The community is incredibly welcoming and I've lost over 40lbs in 6 months using their specialized plan.",
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-accent font-heading font-bold tracking-widest uppercase mb-2"
          >
            Testimonials
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            What Our <span className="text-stroke text-transparent">Members</span> Say
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
            className="pb-16"
          >
            {testimonials.map((test, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-primary/50 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl flex flex-col items-center text-center">
                  <FaQuoteLeft className="text-4xl text-accent/50 mb-6" />
                  <p className="font-body text-xl md:text-2xl text-gray-300 italic mb-10 leading-relaxed font-light">
                    "{test.text}"
                  </p>
                  <div className="flex flex-col items-center">
                    <img src={test.image} alt={test.name} className="w-16 h-16 rounded-full border-2 border-accent mb-4 object-cover" />
                    <h5 className="font-heading font-bold text-white text-lg">{test.name}</h5>
                    <span className="font-body text-accent text-sm uppercase tracking-wider">{test.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Pagination Container */}
          <div className="swiper-custom-pagination flex justify-center gap-2 mt-4" style={{ '--swiper-pagination-color': '#ff3b00', '--swiper-pagination-bullet-inactive-color': 'rgba(255,255,255,0.3)' }}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
