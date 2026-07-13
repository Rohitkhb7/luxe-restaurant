"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { chefSpecials } from "@/data/restaurantData";

export default function ChefsSpecials() {
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as any }
    }
  };

  const textVariants = (direction: "left" | "right") => ({
    hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  });

  const imageVariants = (direction: "left" | "right") => ({
    hidden: { opacity: 0, x: direction === "left" ? 40 : -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
    }
  });

  return (
    <section id="specials" className="py-24 md:py-32 bg-surface text-light-gray relative overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gold/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center mb-20 md:mb-28"
        >
          <span className="text-xs uppercase tracking-super-luxury text-gold font-medium mb-3 block">
            Signature Gastronomy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-light-gray">
            The Chef&apos;s Specials
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto mt-6" />
        </motion.div>

        {/* Specials List */}
        <div className="space-y-24 md:space-y-32">
          {chefSpecials.map((special, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={special.id}
                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
              >
                {/* Image Component (Left/Right depending on odd/even) */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={imageVariants(isEven ? "right" : "left")}
                  className={`w-full lg:w-1/2 aspect-[4/3] sm:aspect-[16/10] relative rounded-sm overflow-hidden group shadow-2xl border border-luxury-border/60 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={special.image}
                    alt={special.title}
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover transform group-hover:scale-[1.03] transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>

                {/* Narrative Details Component */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={textVariants(isEven ? "left" : "right")}
                  className={`w-full lg:w-1/2 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <span className="text-[10px] uppercase tracking-luxury text-gold font-semibold bg-gold/5 border border-gold/10 px-3 py-1 rounded-sm mb-4 inline-block">
                    {special.category}
                  </span>
                  
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-light-gray mb-3">
                    {special.title}
                  </h3>
                  
                  <span className="text-xl font-light text-gold block mb-6">
                    {special.price}
                  </span>
                  
                  <p className="font-serif italic text-muted-gray text-sm mb-6 leading-relaxed border-l-2 border-gold/30 pl-4">
                    &ldquo;{special.story}&rdquo;
                  </p>
                  
                  <p className="text-sm text-muted-gray leading-relaxed mb-8">
                    {special.description}
                  </p>
                  
                  {/* Ingredients Tags */}
                  <div className="mb-8">
                    <span className="text-[10px] uppercase tracking-luxury text-light-gray font-medium mb-3 block">
                      Ingredients Spotlight
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {special.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="text-[11px] bg-background border border-luxury-border text-muted-gray px-3 py-1.5 rounded-sm hover:border-gold/30 hover:text-gold transition-colors duration-300"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sommelier Note */}
                  <div className="pt-4 border-t border-luxury-border/30">
                    <p className="text-xs text-muted-gray">
                      <strong className="text-gold uppercase tracking-wider font-semibold mr-2">
                        Tasting Pairing:
                      </strong>
                      {special.notes}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
