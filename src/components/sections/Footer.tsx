"use client";

import { useState } from "react";
import { ArrowUp, Facebook, Instagram, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-surface text-light-gray pt-20 pb-8 border-t border-luxury-border/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Section: Newsletter Subscribe */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-luxury-border/30 pb-16 gap-8">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="font-serif text-2xl font-light text-light-gray mb-2">
              The Epicurean Club
            </h3>
            <p className="text-xs sm:text-sm text-muted-gray font-light">
              Subscribe to receive private dining invitations, seasonal tasting menu previews, and culinary newsletters.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                className="w-full bg-background/50 border border-luxury-border focus:border-gold/50 p-3.5 text-xs text-light-gray placeholder:text-muted-gray/40 outline-none rounded-sm transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              disabled={subscribed}
              className="bg-gold hover:bg-gold-hover disabled:bg-gold/40 text-background px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 rounded-sm flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              {subscribed ? (
                "Subscribed"
              ) : (
                <>
                  Subscribe <Send size={12} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Middle Section: Links & Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <a href="#hero" onClick={(e) => handleScrollTo(e, "#hero")} className="flex flex-col">
              <span className="font-serif text-xl tracking-[0.2em] font-light text-light-gray">
                L&apos;ÉTOILE
              </span>
              <span className="text-[8px] tracking-[0.4em] text-gold uppercase mt-0.5">
                HAUTE CUISINE
              </span>
            </a>
            <p className="text-xs text-muted-gray font-light leading-relaxed">
              Crafting unforgettable sensory evenings. Blending traditional, woodfired heritage techniques with modernist culinary gastronomy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-[10px] uppercase tracking-luxury text-gold font-medium mb-1">
              The Restaurant
            </h4>
            <a href="#hero" onClick={(e) => handleScrollTo(e, "#hero")} className="text-xs text-muted-gray hover:text-gold transition-colors font-light">The Experience</a>
            <a href="#featured" onClick={(e) => handleScrollTo(e, "#featured")} className="text-xs text-muted-gray hover:text-gold transition-colors font-light">Our Featured Dishes</a>
            <a href="#specials" onClick={(e) => handleScrollTo(e, "#specials")} className="text-xs text-muted-gray hover:text-gold transition-colors font-light">Chef Specials</a>
            <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="text-xs text-muted-gray hover:text-gold transition-colors font-light">Our Narrative Philosophy</a>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-[10px] uppercase tracking-luxury text-gold font-medium mb-1">
              Reservations
            </h4>
            <p className="text-xs text-muted-gray font-light">
              120 Fifth Avenue, Floor 45, <br />
              New York, NY 10011
            </p>
            <p className="text-xs text-muted-gray font-light mt-2">
              Phone: +1 (212) 555-0199
            </p>
            <p className="text-xs text-muted-gray font-light">
              Email: reservations@letoile.com
            </p>
          </div>

          {/* Social connections */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase tracking-luxury text-gold font-medium">
              Connect With Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-background border border-luxury-border flex items-center justify-center text-muted-gray hover:text-gold hover:border-gold/30 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-background border border-luxury-border flex items-center justify-center text-muted-gray hover:text-gold hover:border-gold/30 transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-background border border-luxury-border flex items-center justify-center text-muted-gray hover:text-gold hover:border-gold/30 transition-all duration-300 text-xs font-semibold uppercase tracking-widest font-serif font-light leading-none"
                aria-label="Reviews on Tripadvisor"
              >
                TA
              </a>
            </div>
            <p className="text-[10px] text-muted-gray/60 font-light leading-relaxed">
              Review our Michelin Guide status, rating reports and visual galleries online.
            </p>
          </div>
        </div>

        {/* Bottom Section: Copyright & Back-to-top */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-luxury-border/20 pt-8 mt-4 gap-4">
          <div className="text-center sm:text-left">
            <p className="text-[10px] text-muted-gray font-light">
              &copy; {new Date().getFullYear()} L&apos;Étoile Fine Dining. All Rights Reserved.
            </p>
            <p className="text-[9px] text-muted-gray/40 font-light mt-0.5">
              Designed &amp; Developed by Antigravity Agency.
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-sm border border-luxury-border hover:border-gold hover:text-gold text-muted-gray flex items-center justify-center transition-colors duration-300 focus:outline-none cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
