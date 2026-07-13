"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/restaurantData";

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as any }
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-surface relative">
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
            Visual Gastronomy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-light-gray">
            Moments Inside L&apos;Étoile
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto mt-6" />
        </motion.div>

        {/* Pinterest Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              onClick={() => setSelectedItem(item)}
              className={`group relative overflow-hidden rounded-sm cursor-pointer border border-luxury-border/30 hover:border-gold/20 transition-colors duration-500 ${item.spanClass}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                className="object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              
              {/* Luxury Muted Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2 text-gold">
                    <ZoomIn size={14} />
                    <span className="text-[9px] uppercase tracking-super-luxury font-semibold">
                      Enlarge Details
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-light-gray font-light">
                    {item.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-luxury text-muted-gray">
                    {item.category}
                  </span>
                </div>
              </div>
              
              {/* Subtle Ambient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Portal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 text-light-gray/70 hover:text-gold p-3 focus:outline-none z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>

            {/* Lightbox Content Frame */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full aspect-[4/3] sm:aspect-[16/10] md:max-h-[85vh] rounded-sm overflow-hidden border border-luxury-border shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image itself
            >
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-contain bg-[#0F0F0F]"
              />
              
              {/* Image Description Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md border-t border-luxury-border p-4 md:p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-light text-light-gray">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs text-muted-gray uppercase tracking-widest mt-1">
                    {selectedItem.category}
                  </p>
                </div>
                <span className="text-[10px] text-gold border border-gold/30 px-3 py-1 rounded-sm tracking-luxury self-start sm:self-auto">
                  L&apos;ÉTOILE IMAGERY
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
