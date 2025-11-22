import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  "Custom Training Program",
  "Weekly 1:1 Coaching Calls",
  "Weekly Program Adjustments",
  "Supplement Recommendations",
  "Lifestyle and Habit Coaching",
  "Personalized Nutrition Program",
  "Discount off of Our Brand New Supplement Line",
  "Training App Access",
  "Monthly Progress Report and Tracking",
  "Latest Biohacking and Health Strategies"
];

export default function Services() {
  const scrollToBooking = () => {
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-black py-24 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-5xl md:text-6xl tracking-[2px] mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            HEALTH WILL BE YOUR BEST RETURN ON INVESTMENT
          </motion.h2>
          <motion.h3 
            className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-4xl tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            The Elite Program
          </motion.h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-start gap-4 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: "easeOut"
              }}
            >
              <div className="mt-1 bg-white rounded-full p-1 flex-shrink-0">
                <Check className="w-5 h-5 text-black" />
              </div>
              <p className="text-white text-lg font-['Inter:Medium',sans-serif] group-hover:text-white/80 transition-colors">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <button 
            onClick={scrollToBooking}
            className="bg-white hover:bg-gray-100 hover:scale-105 text-black px-12 py-4 rounded-lg text-xl font-['Inter:Medium',sans-serif] transition-all duration-300 shadow-[0px_10px_15px_-3px_rgba(255,255,255,0.1)]"
          >
            Get Started
          </button>
          <p className="text-white/60 text-sm mt-3 font-['Inter:Regular',sans-serif]">
            Limited Spots Available
          </p>
        </motion.div>
      </div>
    </section>
  );
}