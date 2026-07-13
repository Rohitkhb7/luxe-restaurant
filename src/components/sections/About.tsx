"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0B0B0B] text-light-gray relative overflow-hidden border-b border-luxury-border">
      {/* Subtle gold flare background */}
      <div className="absolute top-[40%] left-[-15%] w-[600px] h-[600px] rounded-full bg-gold/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Overlapping Images */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative h-[450px] sm:h-[550px] mt-8 lg:mt-0">
            {/* Background Decorative Frame */}
            <div className="absolute border border-gold/25 w-[75%] h-[80%] -top-4 -left-4 pointer-events-none rounded-sm" />
            
            {/* Image 1: Main Large (Background) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
              className="absolute left-6 top-6 w-[70%] h-[75%] rounded-sm overflow-hidden shadow-2xl border border-luxury-border"
            >
              <Image
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800"
                alt="L'Étoile Dining Hall Ambiance"
                fill
                sizes="(max-w-768px) 70vw, 35vw"
                className="object-cover"
              />
            </motion.div>

            {/* Image 2: Secondary Small (Foreground Overlay) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] as any }}
              className="absolute right-4 bottom-6 w-[50%] h-[55%] rounded-sm overflow-hidden shadow-2xl border border-gold/20"
            >
              <Image
                src="https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800"
                alt="Chef Plating Fine Cuisine"
                fill
                sizes="(max-w-768px) 50vw, 25vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Side: Philosophy Text & Sign-off */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <motion.span
              variants={itemVariants}
              className="text-xs uppercase tracking-super-luxury text-gold font-medium mb-3 block"
            >
              Our Philosophy
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-5xl font-light text-light-gray leading-tight mb-6"
            >
              Heritage Bound, <br />
              <span className="font-serif italic text-gold font-normal">Modernist In Spirit</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gold/90 font-light italic leading-relaxed mb-6 font-serif border-l border-gold/40 pl-4"
            >
              &ldquo;Gastronomy is not simply the serving of food. It is an art form that records the heritage of seasons, the memory of soil, and the pursuit of absolute sensory harmony.&rdquo;
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4 text-xs sm:text-sm text-muted-gray leading-relaxed font-light mb-8">
              <p>
                Founded in 2018, L&apos;Étoile has sought to curate dining experiences that transcend the ordinary. Our kitchen operates as a laboratory of taste—using ancient preservation, local organic foraging, and modern culinary physics to unlock flavors in their purest, most concentrated forms.
              </p>
              <p>
                We collaborate directly with micro-farmers, artisanal fishermen, and biodynamic winemakers across the region to ensure that our carbon footprint remains minimal while our sensory impact remains monumental.
              </p>
            </motion.div>

            {/* Chef Signature */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-luxury-border/30 flex items-center gap-4">
              <div>
                <span className="font-serif text-lg text-light-gray italic block">Marc Laurent</span>
                <span className="text-[10px] uppercase tracking-luxury text-gold">Chef de Cuisine</span>
              </div>
              <div className="w-10 h-[1px] bg-gold/30" />
              <div>
                <span className="font-serif text-lg text-light-gray italic block">Elena Rostova</span>
                <span className="text-[10px] uppercase tracking-luxury text-gold">Master Sommelier</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
