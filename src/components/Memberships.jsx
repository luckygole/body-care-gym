import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/mo",
    features: ["Gym Access", "Use of Lockers", "1 Trainer Guide per week", "Basic Equipment Access"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$59",
    period: "/mo",
    features: ["24/7 Gym Access", "Personal Trainer (2/week)", "Custom Diet Plan", "Full Equipment Access", "Group Classes"],
    popular: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "/mo",
    features: ["VIP Support 24/7", "Dedicated Personal Trainer", "Premium Nutrition Plan", "Sauna & Spa Access", "Monthly Massage"],
    popular: false,
  }
];

const Memberships = () => {
  return (
    <section id="plans" className="py-24 bg-primary relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-accent font-heading font-bold tracking-widest uppercase mb-2"
          >
            Pricing
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            Membership <span className="text-stroke text-transparent">Plans</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2 }}
              className={`relative p-8 rounded-2xl flex flex-col h-full bg-secondary border transition-all duration-300 ${
                plan.popular 
                ? "border-accent shadow-[0_0_30px_rgba(255,59,0,0.3)] md:-translate-y-4 md:scale-105 z-10" 
                : "border-white/10 hover:border-white/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white font-heading font-bold uppercase tracking-widest text-xs py-1.5 px-4 rounded-full shadow-[0_0_15px_rgba(255,59,0,0.6)]">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-heading font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-5xl font-black font-heading text-white mb-6">
                {plan.price}<span className="text-lg text-gray-500 font-body">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300 font-body text-sm md:text-base">
                    <FaCheck className="text-accent mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 font-heading font-bold uppercase tracking-wider transition-all duration-300 ${
                plan.popular
                ? "bg-accent text-white hover:bg-white hover:text-primary shadow-[0_4px_14px_rgba(255,59,0,0.4)]"
                : "bg-white/10 text-white hover:bg-accent hover:shadow-[0_4px_14px_rgba(255,59,0,0.4)]"
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;
