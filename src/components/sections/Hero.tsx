"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom premium easeOutExpo
      },
    },
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Premium Fullscreen Ambient Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1800"
          alt="L'Étoile Ambient Dining Room"
          fill
          priority
          className="object-cover object-center transform scale-105 select-none"
        />
        {/* Multilayer Dark Overlay for readability and elegant page transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-black/40 z-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center z-20 mt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Elegant Subtitle */}
          <motion.span
            variants={itemVariants}
            className="text-xs md:text-sm font-medium tracking-super-luxury text-gold uppercase mb-4 md:mb-6 block"
          >
            An Immersive Gastronomic Journey
          </motion.span>

          {/* Luxury Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-6xl md:text-8xl font-light tracking-tight text-light-gray leading-[1.1] mb-6 md:mb-8"
          >
            Culinary Poetry <br />
            <span className="font-serif italic text-gold font-normal">in Motion</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-muted-gray max-w-2xl font-light leading-relaxed mb-8 md:mb-12"
          >
            Experience a curated selection of seasonal tasting menus where modern culinary innovation converges with heritage recipes. Every dish is a dialogue with nature.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            <a
              href="#reservation"
              onClick={(e) => handleScrollTo(e, "#reservation")}
              className="group flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover px-8 py-4 text-xs font-semibold uppercase tracking-widest text-background transition-all duration-300 w-full sm:w-auto rounded-sm shadow-lg shadow-gold/10"
            >
              Reserve A Table
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#featured"
              onClick={(e) => handleScrollTo(e, "#featured")}
              className="flex items-center justify-center border border-light-gray/25 hover:border-gold hover:text-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest text-light-gray transition-all duration-300 w-full sm:w-auto rounded-sm bg-black/20 backdrop-blur-sm"
            >
              Explore Menu
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="text-[9px] tracking-super-luxury text-muted-gray uppercase mb-2 font-medium"
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-gold" size={18} />
        </motion.div>
      </div>
    </section>
  );
}
