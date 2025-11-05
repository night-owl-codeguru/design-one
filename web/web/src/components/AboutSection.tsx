'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-soft-wheat relative overflow-hidden scroll-mt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #2D1B12 0px, #2D1B12 2px, transparent 2px, transparent 10px)',
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-brutal-heading font-extrabold text-dark-roast mb-6 tracking-brutal-wide">
              MORE THAN A BEER,<br />IT&apos;S A VIBE.
            </h2>
            <div className="w-32 h-2 bg-brutal-gradient mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="brutal-card p-8">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-golden-pour brutal-border">
                    <Sparkles className="w-8 h-8 text-dark-roast" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-roast mb-3 tracking-brutal-wide">
                      PIONEERING SINCE 2012
                    </h3>
                    <p className="text-lg text-brutal-brown leading-relaxed">
                      Founded as Maharashtra&apos;s first craft brewery, TJ&apos;s Brew Works has been 
                      serving fresh, premium, handcrafted beer in a laid-back café vibe for over a decade.
                    </p>
                  </div>
                </div>
              </div>

              <div className="brutal-card p-8 bg-gradient-to-br from-golden-pour/20 to-burnt-copper/20">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-burnt-copper brutal-border">
                    <Users className="w-8 h-8 text-soft-wheat" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-roast mb-3 tracking-brutal-wide">
                      CONNECTION & CRAFT
                    </h3>
                    <p className="text-lg text-brutal-brown leading-relaxed">
                      Beer is just the start of something bigger. We believe in bringing people 
                      together through authentic experiences and exceptional brews.
                    </p>
                  </div>
                </div>
              </div>

              <div className="brutal-card p-8">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-dark-roast brutal-border">
                    <Heart className="w-8 h-8 text-golden-pour" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-roast mb-3 tracking-brutal-wide">
                      CRAFTED TO CONNECT
                    </h3>
                    <p className="text-lg text-brutal-brown leading-relaxed">
                      Every pour, every moment, every laugh—it&apos;s all part of the TJ&apos;s experience. 
                      We&apos;re not just brewing beer; we&apos;re brewing joy.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="morph-card p-12 brutal-border shadow-brutal-xl">
                <div className="text-center space-y-6">
                  <div className="text-8xl font-extrabold text-transparent bg-clip-text bg-brutal-gradient">
                    2012
                  </div>
                  <div className="text-xl font-bold text-dark-roast tracking-brutal-wide">
                    YEARS OF BREWING EXCELLENCE
                  </div>
                  <div className="grid grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-burnt-copper mb-2">9</div>
                      <div className="text-sm font-bold text-dark-roast tracking-wider">BEER VARIANTS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-burnt-copper mb-2">∞</div>
                      <div className="text-sm font-bold text-dark-roast tracking-wider">GOOD VIBES</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-burnt-copper mb-2">1</div>
                      <div className="text-sm font-bold text-dark-roast tracking-wider">PIONEER</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decoration */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-golden-pour brutal-border shadow-brutal rotate-12 flex items-center justify-center">
                <span className="text-4xl">🍺</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
