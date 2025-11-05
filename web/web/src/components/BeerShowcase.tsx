'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Waves, Zap, Flame, Sun } from 'lucide-react';

const beerVariants = [
  {
    name: "Devil's Dark",
    tagline: "Bold roast. Big flavour. Devilishly smooth.",
    color: "from-brutal-brown to-dark-roast",
    icon: Flame,
    alcohol: "6.5%",
    type: "Dark Lager",
  },
  {
    name: "Blonde",
    tagline: "Light. Crisp. Effortlessly smooth.",
    color: "from-golden-pour to-brutal-amber",
    icon: Sun,
    alcohol: "4.8%",
    type: "Blonde Ale",
  },
  {
    name: "Quin B",
    tagline: "Fruity notes. Bold character.",
    color: "from-burnt-copper to-brutal-orange",
    icon: Zap,
    alcohol: "5.2%",
    type: "Belgian Ale",
  },
  {
    name: "Hopsmack",
    tagline: "Hop-forward. Punchy. Unmissable.",
    color: "from-brutal-amber to-golden-pour",
    icon: Waves,
    alcohol: "5.8%",
    type: "IPA",
  },
];

export default function BeerShowcase() {
  return (
    <section id="beers" className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-dark-roast via-brutal-brown to-dark-roast relative scroll-mt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-golden-pour/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-burnt-copper/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-brutal-heading font-extrabold text-golden-pour mb-6 tracking-brutal-wider">
            OUR POURS.<br />YOUR STORY.
          </h2>
          <p className="text-2xl text-soft-wheat font-medium max-w-3xl mx-auto">
            Nine brews, endless buzz. Each of our beer variants has a unique personality.
          </p>
          <div className="w-32 h-2 bg-brutal-gradient mx-auto mt-8"></div>
        </motion.div>

        {/* Beer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {beerVariants.map((beer, index) => (
            <motion.div
              key={beer.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="brutal-card bg-soft-wheat p-8 h-full hover:scale-105 transition-transform duration-300">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${beer.color} brutal-border shadow-brutal mb-6 flex items-center justify-center`}>
                  <beer.icon className="w-10 h-10 text-soft-wheat" />
                </div>

                {/* Beer Name */}
                <h3 className="text-3xl font-extrabold text-dark-roast mb-3 tracking-brutal-wide font-optima">
                  {beer.name.toUpperCase()}
                </h3>

                {/* Type & ABV */}
                <div className="flex gap-3 mb-4">
                  <span className="px-3 py-1 bg-dark-roast text-golden-pour text-xs font-bold tracking-wider">
                    {beer.type.toUpperCase()}
                  </span>
                  <span className="px-3 py-1 bg-burnt-copper text-soft-wheat text-xs font-bold tracking-wider">
                    {beer.alcohol} ABV
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-lg text-brutal-brown font-medium leading-relaxed">
                  {beer.tagline}
                </p>

                {/* Decorative line */}
                <div className="mt-6 h-1 bg-gradient-to-r from-golden-pour to-burnt-copper"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link 
            href="/beers"
            className="inline-block px-8 sm:px-12 py-4 sm:py-6 bg-golden-pour brutal-border shadow-brutal-lg hover:shadow-brutal-xl font-bold text-lg sm:text-2xl tracking-brutal-wide uppercase transition-all duration-300 hover:translate-x-2 hover:translate-y-2 hover:scale-105"
          >
            VIEW ALL 9 BEERS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
