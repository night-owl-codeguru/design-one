'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Beer } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contact" className="bg-dark-roast text-soft-wheat relative overflow-hidden scroll-mt-20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Logo & Tagline */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-golden-pour brutal-border shadow-brutal-lg flex items-center justify-center">
                <Beer className="w-12 h-12 text-dark-roast" />
              </div>
              <div>
                <h3 className="text-4xl font-extrabold text-golden-pour tracking-brutal-wider">
                  TJ&apos;S BREW WORKS
                </h3>
                <p className="text-xl font-medium text-soft-wheat tracking-brutal-wide font-optima">
                  To Joy. Always.
                </p>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Navigation */}
            <div>
              <h4 className="text-xl font-extrabold text-golden-pour mb-6 tracking-brutal-wide">
                EXPLORE
              </h4>
              <ul className="space-y-4">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Beer Store', href: '/beers' },
                  { name: "TJ's Tappin'", href: '/tappin' },
                  { name: 'Merch Store', href: '/merchandise' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'Contact', href: '/contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium hover:text-golden-pour transition-colors hover:translate-x-2 inline-block duration-300 text-left"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beer Variants */}
            <div>
              <h4 className="text-xl font-extrabold text-golden-pour mb-6 tracking-brutal-wide">
                OUR BREWS
              </h4>
              <ul className="space-y-4">
                {["Devil's Dark", 'Blonde', 'Quin B', 'Hopsmack', 'And 5 More...'].map((beer) => (
                  <li key={beer}>
                    <Link
                      href="/beers"
                      className="text-lg font-medium hover:text-golden-pour transition-colors hover:translate-x-2 inline-block duration-300 text-left"
                    >
                      {beer}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-extrabold text-golden-pour mb-6 tracking-brutal-wide">
                REACH US
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-golden-pour mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-sm mb-1">PHONE</p>
                    <a href="tel:+919820106363" className="text-lg hover:text-golden-pour transition-colors">
                      +91 98201 06363
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-golden-pour mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-sm mb-1">EMAIL</p>
                    <a href="mailto:tj@tjsbrewworks.com" className="text-lg hover:text-golden-pour transition-colors break-all">
                      tj@tjsbrewworks.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address & Social */}
            <div>
              <h4 className="text-xl font-extrabold text-golden-pour mb-6 tracking-brutal-wide">
                VISIT US
              </h4>
              <div className="flex items-start gap-3 mb-8">
                <MapPin className="w-6 h-6 text-golden-pour mt-1 flex-shrink-0" />
                <div>
                  <p className="text-base leading-relaxed">
                    Primary Cuisine Pvt. Ltd.<br />
                    A-500, MIDC, TTC Industrial Area<br />
                    Mahape, Navi Mumbai<br />
                    Maharashtra - 400710
                  </p>
                </div>
              </div>

              <div>
                <p className="font-bold text-sm mb-4 text-golden-pour">FOLLOW US</p>
                <div className="flex gap-4">
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
                      className="w-12 h-12 brutal-border border-golden-pour hover:bg-golden-pour hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-golden-pour group-hover:text-dark-roast transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-1 bg-gradient-to-r from-transparent via-golden-pour to-transparent mb-8"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="text-sm">
              <p className="mb-2">
                © {currentYear} TJ&apos;s Brew Works. All Rights Reserved.
              </p>
              <p className="text-brutal-tan">
                A unit of Primary Cuisine Pvt. Ltd.
              </p>
            </div>

            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-golden-pour transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-golden-pour transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Signature Tagline */}
          <div className="text-center mt-12">
            <p className="text-2xl font-extrabold text-golden-pour tracking-brutal-wider font-optima">
              TJ&apos;S TO JOY. ALWAYS.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative foam bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-golden-pour via-burnt-copper to-golden-pour"></div>
    </footer>
  );
}
