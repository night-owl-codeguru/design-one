'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Users, Music, Instagram, Facebook, Twitter } from 'lucide-react';

export default function CommunitySection() {
  return (
    <section id="community" className="py-16 sm:py-24 md:py-32 bg-soft-wheat relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-brutal-heading font-extrabold text-dark-roast mb-6 tracking-brutal-wider leading-tight">
              WHERE GOOD BEER<br />BRINGS GOOD PEOPLE TOGETHER
            </h2>
            <p className="text-2xl text-brutal-brown font-medium max-w-3xl mx-auto">
              TJ&apos;s is more than a brewery—it&apos;s a lifestyle, a community, a vibe.
            </p>
            <div className="w-32 h-2 bg-brutal-gradient mx-auto mt-8"></div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="brutal-card p-8 text-center group hover:bg-golden-pour/20"
            >
              <div className="w-20 h-20 bg-golden-pour brutal-border shadow-brutal mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Calendar className="w-10 h-10 text-dark-roast" />
              </div>
              <h3 className="text-2xl font-extrabold text-dark-roast mb-4 tracking-brutal-wide">
                LIVE EVENTS
              </h3>
              <p className="text-lg text-brutal-brown font-medium">
                From brewery tours to live music nights—there&apos;s always something brewing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="brutal-card p-8 text-center group hover:bg-burnt-copper/20"
            >
              <div className="w-20 h-20 bg-burnt-copper brutal-border shadow-brutal mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Users className="w-10 h-10 text-soft-wheat" />
              </div>
              <h3 className="text-2xl font-extrabold text-dark-roast mb-4 tracking-brutal-wide">
                COMMUNITY
              </h3>
              <p className="text-lg text-brutal-brown font-medium">
                Join our tribe of beer enthusiasts, food lovers, and good vibe seekers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="brutal-card p-8 text-center group hover:bg-brutal-orange/20"
            >
              <div className="w-20 h-20 bg-brutal-orange brutal-border shadow-brutal mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Music className="w-10 h-10 text-dark-roast" />
              </div>
              <h3 className="text-2xl font-extrabold text-dark-roast mb-4 tracking-brutal-wide">
                EXPERIENCES
              </h3>
              <p className="text-lg text-brutal-brown font-medium">
                Craft beer tastings, food pairings, and memorable moments worth sharing.
              </p>
            </motion.div>
          </div>

          {/* Social Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="morph-card brutal-border p-12 text-center shadow-brutal-xl"
          >
            <h3 className="text-3xl font-extrabold text-dark-roast mb-6 tracking-brutal-wide">
              CONNECT WITH US
            </h3>
            <p className="text-xl text-brutal-brown mb-10 max-w-2xl mx-auto">
              Follow our journey, catch the latest events, and become part of the TJ&apos;s family.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mb-10">
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/tjsbrewworks' },
                { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/tjsbrewworks' },
                { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/tjsbrewworks' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-dark-roast brutal-border shadow-brutal hover:shadow-brutal-lg hover:bg-golden-pour hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                  aria-label={social.label}
                >
                  <social.icon className="w-8 h-8 text-golden-pour group-hover:text-dark-roast transition-colors" />
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center">
              <Link 
                href="/visit"
                className="px-6 sm:px-10 py-4 sm:py-5 bg-dark-roast brutal-border shadow-brutal hover:shadow-brutal-lg text-golden-pour font-bold text-base sm:text-xl tracking-brutal-wide uppercase transition-all duration-300 hover:translate-x-2 hover:translate-y-2 text-center"
              >
                VISIT US
              </Link>
              <a 
                href="https://instagram.com/tjsbrewworks"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-10 py-4 sm:py-5 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-base sm:text-xl tracking-brutal-wide uppercase transition-all duration-300 hover:translate-x-2 hover:translate-y-2 inline-flex items-center justify-center"
              >
                FOLLOW ON SOCIAL
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
