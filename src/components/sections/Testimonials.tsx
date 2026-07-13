"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/restaurantData";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" as any }
    })
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#0B0B0B] text-light-gray relative overflow-hidden border-b border-luxury-border">
      {/* Subtle ambient light flare */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/2 blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Quote Icon */}
        <div className="w-16 h-16 rounded-full bg-surface border border-luxury-border flex items-center justify-center text-gold mb-10 shadow-lg">
          <Quote size={28} className="transform rotate-180" />
        </div>

        {/* Testimonials Animated Area */}
        <div className="relative min-h-[300px] sm:min-h-[220px] w-full text-center flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full flex flex-col items-center"
            >
              {/* Star Rating */}
              <div className="flex gap-1.5 mb-6 justify-center">
                {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Review Comment */}
              <blockquote className="font-serif text-lg sm:text-2xl font-light italic leading-relaxed text-light-gray mb-8 max-w-3xl">
                &ldquo;{activeTestimonial.comment}&rdquo;
              </blockquote>

              {/* Critic Reference */}
              <cite className="not-italic">
                <span className="font-serif text-base text-gold block">
                  {activeTestimonial.name}
                </span>
                <span className="text-[10px] uppercase tracking-luxury text-muted-gray mt-1 block">
                  {activeTestimonial.role}
                </span>
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Elements */}
        <div className="flex items-center gap-6 mt-12">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-luxury-border/60 hover:border-gold/60 text-muted-gray hover:text-gold transition-colors flex items-center justify-center focus:outline-none"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "bg-gold scale-125" : "bg-muted-gray/30 hover:bg-muted-gray/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full border border-luxury-border/60 hover:border-gold/60 text-muted-gray hover:text-gold transition-colors flex items-center justify-center focus:outline-none"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
