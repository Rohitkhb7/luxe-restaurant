"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, CheckCircle2, Clock, Users } from "lucide-react";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2",
    requests: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) return;

    setIsSubmitting(true);
    
    // Simulate premium API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setBookingId("ETL-" + Math.floor(100000 + Math.random() * 900000));
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "19:00",
      guests: "2",
      requests: ""
    });
    setIsSuccess(false);
  };

  return (
    <section id="reservation" className="py-24 md:py-32 bg-surface relative">
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-super-luxury text-gold font-medium mb-3 block">
            Table Booking
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-light-gray">
            Secure Your Culinary Seat
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto mt-6" />
        </div>

        {/* Card Panel */}
        <div className="glass-panel p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 md:space-y-8"
              >
                {/* Contact Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-luxury text-gold block mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rohith Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-background/40 border border-luxury-border focus:border-gold/60 focus:ring-1 focus:ring-gold/60 p-3.5 text-sm text-light-gray placeholder:text-muted-gray/50 rounded-sm outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-luxury text-gold block mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rohit@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-background/40 border border-luxury-border focus:border-gold/60 focus:ring-1 focus:ring-gold/60 p-3.5 text-sm text-light-gray placeholder:text-muted-gray/50 rounded-sm outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-luxury text-gold block mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-background/40 border border-luxury-border focus:border-gold/60 focus:ring-1 focus:ring-gold/60 p-3.5 text-sm text-light-gray placeholder:text-muted-gray/50 rounded-sm outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Details Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-luxury text-gold block mb-2 font-medium">
                      Select Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-background/40 border border-luxury-border focus:border-gold/60 focus:ring-1 focus:ring-gold/60 p-3.5 text-sm text-light-gray rounded-sm outline-none transition-all duration-300 relative z-10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-luxury text-gold block mb-2 font-medium">
                      Dining Time
                    </label>
                    <div className="relative">
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-background/40 border border-luxury-border focus:border-gold/60 focus:ring-1 focus:ring-gold/60 p-3.5 text-sm text-light-gray rounded-sm outline-none transition-all duration-300 appearance-none"
                      >
                        <option value="17:00">17:00 (5:00 PM)</option>
                        <option value="18:00">18:00 (6:00 PM)</option>
                        <option value="19:00">19:00 (7:00 PM)</option>
                        <option value="20:00">20:00 (8:00 PM)</option>
                        <option value="21:00">21:00 (9:00 PM)</option>
                        <option value="22:00">22:00 (10:00 PM)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-luxury text-gold block mb-2 font-medium">
                      Guest Count
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-background/40 border border-luxury-border focus:border-gold/60 focus:ring-1 focus:ring-gold/60 p-3.5 text-sm text-light-gray rounded-sm outline-none transition-all duration-300 appearance-none"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8+ Guests (Event Inquiry)</option>
                    </select>
                  </div>
                </div>

                {/* Dietary or Specific Requests */}
                <div>
                  <label className="text-[10px] uppercase tracking-luxury text-gold block mb-2 font-medium">
                    Special Inquiries / Dietary Restrictions
                  </label>
                  <textarea
                    rows={4}
                    placeholder="E.g., vegetarian request, anniversary celebration, allergies..."
                    value={formData.requests}
                    onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                    className="w-full bg-background/40 border border-luxury-border focus:border-gold/60 focus:ring-1 focus:ring-gold/60 p-3.5 text-sm text-light-gray placeholder:text-muted-gray/50 rounded-sm outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-background px-12 py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 font-medium rounded-sm w-full md:w-auto relative cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Verifying Table Availability...
                      </span>
                    ) : (
                      "Confirm Booking Request"
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center py-8 flex flex-col items-center"
              >
                {/* Animated checkmark */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="text-gold mb-6"
                >
                  <CheckCircle2 size={64} />
                </motion.div>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-light-gray mb-3">
                  Reservation Confirmed
                </h3>
                <p className="text-sm text-muted-gray max-w-md mx-auto mb-8 font-light">
                  A verification receipt has been dispatched to <strong className="text-light-gray">{formData.email}</strong>. We look forward to hosting your gastronomic evening.
                </p>

                {/* Details Summary Receipt */}
                <div className="w-full max-w-md bg-background/50 border border-luxury-border rounded-sm p-6 mb-8 text-left space-y-4">
                  <div className="flex justify-between border-b border-luxury-border/30 pb-2">
                    <span className="text-[10px] uppercase text-muted-gray font-semibold">Booking Reference:</span>
                    <span className="text-sm text-gold font-mono font-medium">{bookingId}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs font-light">
                    <div>
                      <span className="text-[9px] uppercase text-muted-gray block mb-1">Host Name</span>
                      <span className="text-light-gray font-medium">{formData.name}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase text-muted-gray block mb-1">Guest Seats</span>
                      <span className="text-light-gray font-medium flex items-center gap-1">
                        <Users size={12} className="text-gold" /> {formData.guests} Guests
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase text-muted-gray block mb-1">Dining Date</span>
                      <span className="text-light-gray font-medium flex items-center gap-1">
                        <Calendar size={12} className="text-gold" /> {formData.date}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase text-muted-gray block mb-1">Scheduled Time</span>
                      <span className="text-light-gray font-medium flex items-center gap-1">
                        <Clock size={12} className="text-gold" /> {formData.time}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="border border-luxury-border/80 hover:border-gold/40 text-xs text-muted-gray hover:text-gold uppercase tracking-luxury py-2.5 px-6 rounded-sm transition-all duration-300 cursor-pointer"
                >
                  Book Another Table
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
