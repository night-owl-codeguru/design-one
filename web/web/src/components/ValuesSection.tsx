'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Sparkles } from 'lucide-react';

export default function ValuesSection() {
  const values = [
    {
      icon: Target,
      title: "CRAFTED WITH PURPOSE",
      description: "Every TJ's brew starts with real ingredients and bold flavours. It's all intentional, handcrafted and never half-hearted.",
      accent: "golden-pour",
    },
    {
      icon: Heart,
      title: "CELEBRATION OF AUTHENTICITY",
      description: "No gimmicks. No fluff. Just honest beer for people who know the good stuff when they sip it.",
      accent: "burnt-copper",
    },
    {
      icon: Sparkles,
      title: "MADE FOR THE MOMENTS",
      description: "TJ's turns everyday moments into something worth clinking glasses for.",
      accent: "brutal-orange",
    },
  ];

  return (
    <section id="values" className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-brutal-brown via-dark-roast to-brutal-brown relative overflow-hidden scroll-mt-20">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#F4A825 1px, transparent 1px), linear-gradient(90deg, #F4A825 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-brutal-heading font-extrabold text-golden-pour mb-6 tracking-brutal-wider leading-tight">
            WHAT WE&apos;RE MADE OF:<br />
            <span className="text-soft-wheat">SERVED ICE-COLD AND STRAIGHT-UP</span>
          </h2>
          <div className="w-32 h-2 bg-brutal-gradient mx-auto mt-8"></div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="brutal-card bg-soft-wheat p-6 sm:p-10 h-full hover:bg-gradient-to-br hover:from-soft-wheat hover:to-brutal-tan transition-all duration-300">
                {/* Icon */}
                <div className={`w-20 h-20 bg-${value.accent} brutal-border shadow-brutal mb-8 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-dark-roast" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-dark-roast mb-6 tracking-brutal-wide leading-tight">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-brutal-brown font-medium leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative line */}
                <div className={`mt-8 h-1 bg-${value.accent} group-hover:w-full w-1/2 transition-all duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="brutal-border bg-gradient-to-br from-golden-pour to-burnt-copper p-1">
            <div className="bg-dark-roast p-12 text-center">
              <p className="text-4xl font-extrabold text-golden-pour tracking-brutal-wide leading-tight">
                "BEER IS THE START OF SOMETHING BIGGER—<br />
                <span className="text-soft-wheat">CONNECTION, CRAFT, AND JOY."</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
