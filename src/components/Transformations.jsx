import { motion } from 'framer-motion';
import CountUpModule from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CountUp = typeof CountUpModule === 'function' ? CountUpModule : CountUpModule.default;

const stats = [
  { value: 500, label: "Members", suffix: "+" },
  { value: 20, label: "Expert Trainers", suffix: "+" },
  { value: 5, label: "Years Experience", suffix: "" },
  { value: 1000, label: "Transformations", suffix: "+" },
];

const Transformations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with parallax effect simulation */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed bg-center z-0 filter grayscale"
      />
      <div className="absolute inset-0 bg-primary/90 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary z-0" />

      <div className="container relative z-10 mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h3 className="font-heading font-black text-4xl md:text-6xl text-white mb-2 flex items-center justify-center">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                <span className="text-accent">{stat.suffix}</span>
              </h3>
              <p className="font-body text-gray-400 font-medium uppercase tracking-widest text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
