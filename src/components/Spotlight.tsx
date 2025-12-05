import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants/images';

const testimonials = [
  {
    id: 1,
    name: "Nick Anderson",
    occupation: "Senior Computer Engineer",
    testimonial: "Working with Paul completely changed my approach to fitness. The programming was efficient, strategic, and fit perfectly into my demanding schedule. Gained 12 lbs of lean muscle while actually having more energy for work.",
    result: "+7 lbs of Muscle in 5 Months",
    image: IMAGES.testimonials.client1
  },
  {
    id: 2,
    name: "Bobby Flannigan",
    occupation: "Executive Financial Planner",
    testimonial: "This program is legit. Coach Paul paid so much attention to even the smallest details, like exact meal timing and workouts around my crazy 60+ hour schedule. Highly recommend.",
    result: "-6bs of Fat in 2 Months",
    image: IMAGES.testimonials.client2
  },
  {
    id: 3,
    name: "Tommy Brockton",
    occupation: "Owner of Brockton's Grille",
    testimonial: "I feel so much better about myself after working with Coach Paul. He made fitness and dieting so simple for me. He gave me my fire back!! \"Bring the thunder!\"",
    result: "-25lbs of Fat in 6 Months",
    image: IMAGES.testimonials.client3
  },
  {
    id: 4,
    name: "Rick Samson",
    occupation: "CEO of Sanchez Group Financial",
    testimonial: "My life completely took a 180. I used to struggle with sleep, energy, and having to keep up with my work due to my poor health. Now, I wake up ready to tackle the day with all my energy back,",
    result: "+10 lbs of Muscle in 8 Months",
    image: IMAGES.testimonials.client4
  },
  {
    id: 5,
    name: "Mikey Hart",
    occupation: "VP of Sales, Arista Biotech",
    testimonial: "I grew leaps and bounds because of this program. Even when I fell off (more times than I should've), Coach Paul was always there for support and gave 100% into helping me.",
    result: "-50bs of Fat in 13 Months",
    image: IMAGES.testimonials.client5
  },
  {
    id: 6,
    name: "Amanda Foster",
    occupation: "Marketing Director",
    testimonial: "The transformation has been incredible. Paul's program gave me the confidence and strength I never knew I had. The personalized approach made all the difference in achieving real, lasting results.",
    result: "-15 lbs in 6 Months",
    image: IMAGES.testimonials.client6
  }
];

export default function Spotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section id="spotlight" className="bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-6xl tracking-[2px] mb-4">
            SPOTLIGHT
          </h2>
          <p className="font-['DM_Serif_Text:Regular',sans-serif] text-white/90 text-xl max-w-3xl mx-auto">
            The Hardest Workers in the Room. Join the community of professionals who've achieved their best physique while thriving in their careers.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
          >
            <p className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-5xl mb-2">50+</p>
            <p className="text-white/80 text-lg">Success Stories</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <p className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-5xl mb-2">5K+</p>
            <p className="text-white/80 text-lg">Workouts Completed</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <p className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-5xl mb-2">250+</p>
            <p className="text-white/80 text-lg">lbs Lost</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          >
            <p className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-5xl mb-2">5/5</p>
            <p className="text-white/80 text-lg">Average Rating</p>
          </motion.div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex justify-center gap-6 mb-8 overflow-hidden">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <div 
                key={testimonial.id}
                className="transition-all duration-500"
                style={{
                  opacity: idx === 1 ? 1 : 0.5,
                  transform: idx === 1 ? 'scale(1)' : 'scale(0.9)'
                }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  occupation={testimonial.occupation}
                  testimonial={testimonial.testimonial}
                  result={testimonial.result}
                  image={testimonial.image}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button 
              onClick={goToPrevious}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={goToNext}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-white w-8' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="font-['DM_Serif_Text:Regular',sans-serif] text-white/90 text-xl max-w-3xl mx-auto">
            Working with a real human coach has been proven to be the most effective way to build long-term change.
          </p>
        </div>
      </div>
    </section>
  );
}