'use client';

import Link from 'next/link';
import { ArrowRight, Beer, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-roast via-brutal-brown to-burnt-copper pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-golden-pour rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-burnt-copper rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Pre-headline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 brutal-border bg-golden-pour/10 backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-golden-pour" />
            <span className="text-golden-pour font-bold tracking-brutal-wide uppercase text-sm">
              Since 2012 • Maharashtra's Pioneer
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-6 tracking-brutal-wider leading-none"
          >
            <span className="block text-golden-pour brutal-text-shadow">
              TJ&apos;S
            </span>
            <span className="block text-soft-wheat mt-4">
              TO JOY
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-soft-wheat font-medium mb-8 sm:mb-12 max-w-3xl mx-auto leading-tight"
          >
            Good beer. Great people. Chaos optional.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center items-center"
          >
            <Link 
              href="/beers"
              className="group px-6 sm:px-10 py-4 sm:py-5 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-base sm:text-xl tracking-brutal-wide uppercase transition-all duration-300 hover:translate-x-1 hover:translate-y-1 flex items-center gap-3 justify-center w-full sm:w-auto"
            >
              <Beer className="w-5 h-5 sm:w-6 sm:h-6" />
              Explore Our Brews
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link 
              href="/visit"
              className="group px-6 sm:px-10 py-4 sm:py-5 bg-transparent brutal-border border-golden-pour text-golden-pour shadow-brutal hover:shadow-brutal-lg hover:bg-golden-pour hover:text-dark-roast font-bold text-base sm:text-xl tracking-brutal-wide uppercase transition-all duration-300 hover:translate-x-1 hover:translate-y-1 flex items-center gap-3 justify-center w-full sm:w-auto"
            >
              Find Your Vibe
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20"
          >
            <div className="w-8 h-12 brutal-border border-golden-pour mx-auto rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-golden-pour rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative beer foam */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-soft-wheat to-transparent"></div>
    </section>
  );
}
