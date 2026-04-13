import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FaDumbbell, FaHeartbeat, FaBurn, FaLeaf, FaUserTie, FaAppleAlt } from 'react-icons/fa';

const programs = [
  { icon: FaDumbbell, title: "Weight Training", desc: "Build muscle and increase raw strength with free weights." },
  { icon: FaHeartbeat, title: "Cardio Fitness", desc: "Boost your stamina and heart health with intensive cardio." },
  { icon: FaBurn, title: "Fat Loss Program", desc: "Burn calories faster with our targeted HIIT routines." },
  { icon: FaLeaf, title: "Yoga & Flexibility", desc: "Improve mobility, balance, and mind-body connection." },
  { icon: FaUserTie, title: "Personal Training", desc: "1-on-1 coaching for accelerated and focused results." },
  { icon: FaAppleAlt, title: "Nutrition Coaching", desc: "Customized meal plans engineered for your exact goals." },
];

const ProgramCard = ({ program }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="group relative max-w-md w-full bg-secondary rounded-xl border border-white/10 overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 59, 0, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative p-8 h-full flex flex-col">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 border border-white/5 group-hover:border-accent/50 group-hover:shadow-[0_0_15px_rgba(255,59,0,0.3)] transition-all duration-300">
          {(() => {
            const Icon = program.icon;
            return <Icon className="text-3xl text-white group-hover:text-accent transform group-hover:rotate-12 transition-all duration-300" />;
          })()}
        </div>
        <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{program.title}</h3>
        <p className="font-body text-gray-400 mb-6 flex-grow">{program.desc}</p>
        <a href="#contact" className="text-sm font-heading font-bold text-white uppercase tracking-widest group-hover:text-accent transition-colors w-fit">
          Learn More &rarr;
        </a>
      </div>
    </motion.div>
  );
};

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-primary relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-accent font-heading font-bold tracking-widest uppercase mb-2"
          >
            Capabilities
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            Our Elite <span className="text-stroke text-transparent">Programs</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {programs.map((program, idx) => (
            <ProgramCard key={idx} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
