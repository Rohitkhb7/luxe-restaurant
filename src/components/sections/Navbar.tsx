"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "The Experience", href: "#hero" },
  { label: "Our Dishes", href: "#featured" },
  { label: "Chef's Specials", href: "#specials" },
  { label: "Our Story", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 glass-nav shadow-2xl"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="group flex flex-col items-center"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-light text-light-gray group-hover:text-gold transition-colors duration-300">
              L&apos;ÉTOILE
            </span>
            <span className="text-[9px] tracking-[0.4em] text-gold uppercase mt-0.5">
              HAUTE CUISINE
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs uppercase tracking-widest text-muted-gray hover:text-gold transition-colors duration-300 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Reservation CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <a
              href="#reservation"
              onClick={(e) => handleScrollTo(e, "#reservation")}
              className="inline-block border border-gold/40 hover:border-gold hover:bg-gold px-6 py-2.5 text-xs uppercase tracking-widest text-light-gray hover:text-background transition-all duration-500 font-medium rounded-sm"
            >
              Book A Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-light-gray hover:text-gold transition-colors p-2 focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col justify-center items-center lg:hidden"
          >
            {/* Elegant Background Accent */}
            <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

            <div className="flex flex-col items-center space-y-6 text-center z-10 px-6">
              <span className="font-serif text-3xl tracking-[0.2em] font-light text-gold mb-8">
                L&apos;ÉTOILE
              </span>
              
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-lg uppercase tracking-widest text-light-gray hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.5 }}
                className="pt-6"
              >
                <a
                  href="#reservation"
                  onClick={(e) => handleScrollTo(e, "#reservation")}
                  className="inline-block border border-gold bg-gold/10 hover:bg-gold px-8 py-3 text-sm uppercase tracking-widest text-gold hover:text-background transition-all duration-300 font-medium rounded-sm"
                >
                  Reserve A Table
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
