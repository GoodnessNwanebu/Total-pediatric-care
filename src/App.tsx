/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MapPin, Clock, Heart, ArrowRight, MessageCircle, ShieldCheck, Users, Activity, Calendar, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-forest selection:text-cream bg-cream">
      {/* 
        STICKY HEADER - "Zero Friction" Contact
      */}
      <div className="sticky top-0 z-50 bg-cream/80 backdrop-blur-xl border-b border-forest/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
            <div className="flex flex-col items-center sm:items-start">
              <span className="font-serif text-2xl font-semibold tracking-tight text-forest">Total Pediatric Care</span>
            </div>
            
            <div className="flex items-center gap-3">
              <a 
                href="sms:+19545550198" 
                className="hidden sm:flex items-center gap-2 text-forest font-medium px-5 py-2.5 rounded-full hover:bg-forest/5 transition-colors"
              >
                <MessageCircle size={18} />
                <span>Text Us</span>
              </a>
              <a 
                href="tel:+19545550198" 
                className="group flex items-center gap-3 bg-forest text-cream px-6 py-3 rounded-full hover:bg-forest-light transition-all shadow-sm hover:shadow-md"
              >
                <Phone size={18} className="fill-current group-hover:scale-110 transition-transform" />
                <span className="font-medium tracking-wide">(954) 555-0198</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {/* FIGMA-STYLE HERO - Centered, Massive, Organic */}
        <section className="pt-16 pb-20 sm:pt-24 sm:pb-32 px-4 overflow-hidden">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
            
            {/* NBC Pill - Equal padding all around */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center p-3 sm:p-4 rounded-full bg-forest/5 text-forest border border-forest/10 text-xs sm:text-sm font-medium mb-8 sm:mb-10 text-center"
            >
              Featured on NBC 6 for protecting children's healthcare
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-[5.5rem] font-serif leading-[1.05] sm:leading-[0.95] tracking-tighter text-forest mb-6 sm:mb-8"
            >
              Pediatric care that treats you like <span className="italic text-forest-light">family.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl opacity-70 max-w-2xl leading-relaxed mb-8 font-light"
            >
              When your child is sick, you shouldn't have to wait weeks. We provide expert, compassionate care when you need it most.
            </motion.p>

            {/* TrustIndex Reviews Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-2 mb-16 bg-white/50 backdrop-blur-sm border border-forest/10 px-6 py-3 rounded-full shadow-sm"
            >
              <div className="flex gap-1 text-amber-500">
                <Star size={18} className="fill-current" />
                <Star size={18} className="fill-current" />
                <Star size={18} className="fill-current" />
                <Star size={18} className="fill-current" />
                <Star size={18} className="fill-current" />
              </div>
              <span className="text-forest font-semibold ml-1">4.9/5</span>
              <span className="text-forest/40 mx-1 hidden sm:inline">•</span>
              <a 
                href="https://www.trustindex.io/reviews/mytotalpediatriccare.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-forest/80 hover:text-forest transition-colors font-medium text-sm sm:text-base underline underline-offset-4 decoration-forest/20 hover:decoration-forest/50"
              >
                Trusted by 538+ families
              </a>
            </motion.div>

            {/* Massive Image with Refined UI Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-4xl mx-auto"
            >
              <div className="aspect-[16/10] sm:aspect-[21/9] rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl shadow-forest/10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop" 
                  alt="Pediatrician comforting a child" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-forest/10 mix-blend-multiply"></div>
              </div>

              {/* Refined Pill 1 - Bottom Left */}
              <div className="absolute bottom-4 sm:bottom-12 -left-2 sm:-left-8 bg-white/95 backdrop-blur-md px-3 py-2 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 border border-forest/5">
                <div className="bg-sage/50 p-1.5 sm:p-2 rounded-full">
                  <Clock className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] text-forest" />
                </div>
                <span className="font-medium text-forest tracking-tight text-xs sm:text-base">Walk-ins Welcome</span>
              </div>

              {/* Refined Pill 2 - Top Right */}
              <div className="absolute top-4 sm:top-12 -right-2 sm:-right-8 bg-forest/95 backdrop-blur-md text-cream px-3 py-2 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 border border-forest-light/20">
                <div className="bg-cream/20 p-1.5 sm:p-2 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] text-cream" />
                </div>
                <span className="font-medium tracking-tight text-xs sm:text-base">Medicaid Accepted</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ORGANIC BENTO BOX - Services & Info */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
            
            {/* Bento 1: Behavioral Health (Large, Dark) */}
            <div className="md:col-span-7 bg-forest text-cream rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-forest-light/20 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-110"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 text-cream text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-md">
                  <Activity size={16} />
                  Comprehensive Care
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 leading-[1.1] max-w-xl">
                  You are not alone in navigating your child's behavioral health.
                </h2>
                <p className="text-base sm:text-lg opacity-80 max-w-lg leading-relaxed font-light mb-6 sm:mb-8">
                  Unlike many clinics that only handle physical checkups, we offer dedicated support for ADHD, autism, anxiety, and complete mental well-being.
                </p>
              </div>
              
              <div className="relative z-10">
                <a href="tel:+19545550198" className="inline-flex items-center gap-2 bg-cream text-forest px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-sm sm:text-base font-medium hover:bg-sage transition-colors w-fit">
                  Discuss your child's needs <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Bento 2: Everyday Care (Light) */}
            <div className="md:col-span-5 bg-white border border-forest/5 shadow-sm rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 bg-sand rounded-2xl flex items-center justify-center mb-6">
                  <Heart size={24} className="text-forest" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4 text-forest">Everyday Care</h3>
                <p className="text-base sm:text-lg opacity-70 leading-relaxed">
                  From the fevers that won't break to the school physicals you need by tomorrow morning, we're here.
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-2 text-sm sm:text-base font-medium text-forest"><div className="w-1.5 h-1.5 rounded-full bg-forest-light"></div> Sick Visits</li>
                <li className="flex items-center gap-2 text-sm sm:text-base font-medium text-forest"><div className="w-1.5 h-1.5 rounded-full bg-forest-light"></div> Vaccines & Physicals</li>
              </ul>
            </div>

            {/* Bento 3: Newborn Support (Soft Green) */}
            <div className="md:col-span-5 bg-sage/40 rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-medium mb-4 text-forest">Newborn Support</h3>
                <p className="text-base sm:text-lg opacity-80 leading-relaxed text-forest/90">
                  Guiding new parents through the crucial first months with expert advice, milestone tracking, and gentle care.
                </p>
              </div>
            </div>

            {/* Bento 4: Location & Hours (Wide, Informational) */}
            <div className="md:col-span-7 bg-sand rounded-[2.5rem] sm:rounded-[3rem] p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
                
                {/* Location */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-forest text-cream p-2.5 rounded-xl">
                      <MapPin size={20} />
                    </div>
                    <h3 className="text-xl font-serif font-medium text-forest">Our Clinic</h3>
                  </div>
                  <p className="text-base sm:text-lg font-medium text-forest leading-relaxed">
                    100 E. Commercial Blvd.<br/>
                    Oakland Park, FL 33334
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-forest text-cream p-2.5 rounded-xl">
                      <Calendar size={20} />
                    </div>
                    <h3 className="text-xl font-serif font-medium text-forest">Hours</h3>
                  </div>
                  <ul className="space-y-4 text-forest/80 text-sm sm:text-base">
                    <li className="flex justify-between items-start border-b border-forest/10 pb-3">
                      <span className="font-medium">Mon - Fri</span>
                      <div className="text-right">
                        <span>8:30 AM - 5:30 PM</span>
                        <span className="block text-xs sm:text-sm opacity-70 mt-1">(Lunch: 1:00 PM - 2:00 PM)</span>
                      </div>
                    </li>
                    <li className="flex justify-between items-center border-b border-forest/10 pb-3">
                      <span className="font-medium">Saturday</span>
                      <span>8:30 AM - 12:30 PM</span>
                    </li>
                    <li className="flex justify-between items-center opacity-50">
                      <span className="font-medium">Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* MULTIPLAYER TEAM SECTION */}
        <section className="py-24 bg-white border-y border-forest/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-serif mb-16 text-forest">Meet the Team</h2>
            
            {/* Overlapping Avatars (Figma Multiplayer Style) */}
            <div className="flex justify-center items-center mb-12 px-4">
              {[
                "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop", // Placeholder 1
                "https://images.unsplash.com/photo-1594824436998-058a231d6856?q=80&w=400&auto=format&fit=crop", // Placeholder 2
                "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop", // Placeholder 3 (Center)
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop", // Placeholder 4
                "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=400&auto=format&fit=crop", // Placeholder 5
              ].map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-full border-4 sm:border-8 border-white shadow-xl overflow-hidden bg-sand
                    ${i === 2 ? 'w-32 h-32 sm:w-48 sm:h-48 z-30 scale-110' : 'w-24 h-24 sm:w-32 sm:h-32'} 
                    ${i !== 0 ? '-ml-6 sm:-ml-10' : ''}
                    ${i === 1 || i === 3 ? 'z-20' : ''}
                    ${i === 0 || i === 4 ? 'z-10 opacity-90' : ''}
                  `}
                >
                  <img src={img} alt="Team member" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </div>

            <p className="text-xl sm:text-2xl opacity-80 max-w-3xl mx-auto leading-relaxed font-light text-forest">
              Led by <span className="font-medium">Dr. Karl Yousef</span>, our team is deeply committed to the health, happiness, and future of South Florida's children.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-medium text-forest/60">
              <span className="px-4 py-2 bg-sand rounded-full">Dr. Karl Yousef</span>
              <span className="px-4 py-2 bg-sand rounded-full">Dr. Diah</span>
              <span className="px-4 py-2 bg-sand rounded-full">Dr. Steinberg</span>
              <span className="px-4 py-2 bg-sand rounded-full">Dr. Sheikh</span>
              <span className="px-4 py-2 bg-sand rounded-full">Charmaine Limpioso, APRN</span>
            </div>
          </div>
        </section>

        {/* FINAL CTA - Zero Friction */}
        <section className="py-24 sm:py-32 bg-forest text-cream text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl sm:text-6xl font-serif mb-8 tracking-tight leading-none">We're accepting new patients.</h2>
            <p className="text-xl opacity-80 mb-12 font-light">
              Don't wait weeks for an appointment. Text or call us right now to get your child the care they deserve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <a 
                href="tel:+19545550198" 
                className="w-full sm:w-auto flex justify-center items-center gap-3 bg-cream text-forest px-8 py-4.5 rounded-full hover:bg-sage transition-all text-lg font-medium shadow-xl"
              >
                <Phone size={20} className="fill-current" />
                Call (954) 555-0198
              </a>
              <a 
                href="sms:+19545550198" 
                className="w-full sm:w-auto flex justify-center items-center gap-3 bg-forest-light text-cream px-8 py-4.5 rounded-full hover:bg-forest-light/80 transition-all text-lg font-medium border border-cream/20"
              >
                <MessageCircle size={20} />
                Text Us Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-cream py-16 sm:py-24 border-t border-forest/10 text-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl font-semibold mb-6 block tracking-tight">Total Pediatric Care</span>
              <p className="max-w-sm text-base opacity-70 leading-relaxed mb-12">
                Building healthy futures, one child at a time. A lifetime of trust starts here.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium mb-6 uppercase text-xs tracking-widest opacity-60">Contact</h4>
                <ul className="space-y-4 text-base opacity-80">
                  <li className="flex items-center gap-3"><Phone size={18}/> (954) 555-0198</li>
                  <li className="flex items-center gap-3"><MessageCircle size={18}/> Text us anytime</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-6 uppercase text-xs tracking-widest opacity-60">Location</h4>
                <ul className="space-y-4 text-base opacity-80">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="shrink-0 mt-1" />
                    <span className="leading-relaxed">100 E. Commercial Blvd.<br/>Oakland Park, FL 33334</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 h-64 sm:h-80 lg:h-[400px] rounded-3xl overflow-hidden shadow-inner border border-forest/10">
            <iframe 
              title="Total Pediatric Care Location"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade" 
              src="https://maps.google.com/maps?q=Total+Pediatric+Care,+100+E+Commercial+Blvd,+Fort+Lauderdale,+FL+33334&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </footer>
    </div>
  );
}

