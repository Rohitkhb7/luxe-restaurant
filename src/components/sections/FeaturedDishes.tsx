"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { featuredDishes } from "@/data/restaurantData";

export default function FeaturedDishes() {
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as any }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: idx * 0.15,
        ease: [0.16, 1, 0.3, 1] as any
      }
    })
  };

  return (
    <section id="featured" className="py-24 md:py-32 bg-[#0B0B0B] border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs uppercase tracking-super-luxury text-gold font-medium mb-3 block">
            Seasonal Selections
          </span >
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-light-gray">
            Featured Creations
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto mt-6" />
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {featuredDishes.map((dish, idx) => (
            <motion.div
              key={dish.id}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group flex flex-col h-full bg-surface/40 hover:bg-surface/70 border border-luxury-border/50 hover:border-gold/20 transition-all duration-500 rounded-sm overflow-hidden"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 bg-background/80 backdrop-blur-md text-[10px] text-gold uppercase tracking-widest px-3 py-1 font-semibold border border-luxury-border rounded-sm">
                  {dish.category}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-baseline mb-4 gap-2">
                  <h3 className="font-serif text-lg sm:text-xl font-light text-light-gray group-hover:text-gold transition-colors duration-300">
                    {dish.title}
                  </h3>
                  <span className="text-sm font-medium text-gold whitespace-nowrap">
                    {dish.price}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-gray font-light leading-relaxed flex-1">
                  {dish.description}
                </p>
                <div className="mt-6 pt-4 border-t border-luxury-border/30 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-luxury text-gold group-hover:underline cursor-pointer font-medium">
                    Order Selection
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
