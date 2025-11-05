'use client';

import Link from 'next/link';
import { Beer, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Beer Store', href: '/beers' },
    { name: "Tappin'", href: '/tappin' },
    { name: 'Merch Store', href: '/merchandise' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <div className={`transition-all duration-300 brutal-border rounded-2xl px-6 py-4 ${
        scrolled 
          ? 'bg-dark-roast/95 backdrop-blur-xl shadow-brutal-xl' 
          : 'bg-dark-roast/80 backdrop-blur-lg shadow-brutal-lg'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 brutal-border shadow-brutal group-hover:shadow-brutal-lg group-hover:scale-110 transition-all bg-golden-pour flex items-center justify-center">
              <Beer className="w-8 h-8 text-dark-roast" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-golden-pour tracking-brutal-wide leading-none group-hover:text-soft-wheat transition-colors">
                TJ&apos;S BREW WORKS
              </h1>
              <p className="text-xs text-soft-wheat font-optima tracking-wider">TO JOY. ALWAYS.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleNavigation(item.href)}
                className="text-soft-wheat hover:text-golden-pour font-bold text-sm tracking-wider transition-all relative group px-2 py-1"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-golden-pour group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* CTA Buttons */}
            <Link 
              href="/visit"
              className="px-6 py-3 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg hover:scale-105 font-bold text-sm tracking-wider uppercase transition-all text-dark-roast"
            >
              VISIT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-12 h-12 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg hover:rotate-90 transition-all flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-dark-roast" /> : <Menu className="w-6 h-6 text-dark-roast" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 space-y-3 border-t-2 border-golden-pour/20 mt-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => handleNavigation(item.href)}
                      className="block w-full text-left px-5 py-4 brutal-card bg-soft-wheat/10 text-golden-pour hover:bg-golden-pour hover:text-dark-roast hover:scale-105 font-bold tracking-wide transition-all"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <Link
                    href="/visit"
                    className="block w-full px-5 py-4 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold tracking-wide uppercase transition-all text-center text-dark-roast"
                  >
                    VISIT US
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
