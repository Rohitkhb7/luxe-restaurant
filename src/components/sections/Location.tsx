"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, ShieldCheck } from "lucide-react";

export default function Location() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <section id="location" className="py-24 md:py-32 bg-[#0B0B0B] text-light-gray relative overflow-hidden border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-super-luxury text-gold font-medium mb-3 block">
            Visit Us
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-light-gray">
            Location &amp; Hours
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto mt-6" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* Details Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 flex flex-col justify-between space-y-8"
          >
            {/* Address & Contacts */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-surface border border-luxury-border flex items-center justify-center text-gold shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-luxury text-gold font-medium mb-1">
                    Address
                  </h3>
                  <p className="text-sm text-muted-gray font-light leading-relaxed">
                    120 Fifth Avenue, Floor 45, <br />
                    New York, NY 10011, United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-surface border border-luxury-border flex items-center justify-center text-gold shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-luxury text-gold font-medium mb-1">
                    Inquiries &amp; Reservations
                  </h3>
                  <p className="text-sm text-muted-gray font-light">
                    Phone: <a href="tel:+12125550199" className="hover:text-gold transition-colors">+1 (212) 555-0199</a>
                  </p>
                  <p className="text-sm text-muted-gray font-light mt-0.5">
                    Email: <a href="mailto:reservations@letoile.com" className="hover:text-gold transition-colors">reservations@letoile.com</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Operating Hours */}
            <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-luxury-border/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-surface border border-luxury-border flex items-center justify-center text-gold shrink-0">
                  <Clock size={18} />
                </div>
                <div className="w-full">
                  <h3 className="text-xs uppercase tracking-luxury text-gold font-medium mb-2">
                    Operating Hours
                  </h3>
                  <div className="space-y-1.5 text-sm text-muted-gray font-light w-full">
                    <div className="flex justify-between border-b border-luxury-border/10 pb-1">
                      <span>Tuesday - Thursday</span>
                      <span className="text-light-gray font-medium">17:30 - 22:30</span>
                    </div>
                    <div className="flex justify-between border-b border-luxury-border/10 pb-1">
                      <span>Friday - Saturday</span>
                      <span className="text-light-gray font-medium">17:00 - 23:30</span>
                    </div>
                    <div className="flex justify-between border-b border-luxury-border/10 pb-1">
                      <span>Sunday Brunch</span>
                      <span className="text-light-gray font-medium">11:30 - 15:30</span>
                    </div>
                    <div className="flex justify-between text-gold/60">
                      <span>Monday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Policies (Dress Code & Valet) */}
            <motion.div variants={itemVariants} className="space-y-3 pt-6 border-t border-luxury-border/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-surface border border-luxury-border flex items-center justify-center text-gold shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-luxury text-gold font-medium mb-1">
                    House Polices
                  </h3>
                  <p className="text-xs text-muted-gray font-light leading-relaxed">
                    <strong>Dress Code:</strong> Smart Casual &amp; Elegant. We respectfully request gentlemen avoid athletic attire, shorts, and open-toed footwear.
                  </p>
                  <p className="text-xs text-muted-gray font-light leading-relaxed mt-2">
                    <strong>Valet Parking:</strong> Available table-side at the main lobby entrance on Fifth Avenue starting from 17:00.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
            className="w-full lg:w-1/2 min-h-[350px] lg:min-h-[450px] relative rounded-sm overflow-hidden border border-luxury-border shadow-2xl"
          >
            {/* Embedded dark-filtered Google Maps Iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175402340854!2d-73.98785312342531!3d40.74844047138908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sin!4v1692186598583!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) grayscale(100%) brightness(90%) contrast(100%)"
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="L'Étoile Fine Dining Location Map"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
