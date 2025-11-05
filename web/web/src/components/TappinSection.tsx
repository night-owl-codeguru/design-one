'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Hand, GlassWater, PartyPopper } from 'lucide-react';

export default function TappinSection() {
  const steps = [
    {
      icon: Hand,
      title: "TAP",
      description: "Choose your favorite brew from our self-pour wall",
      color: "bg-golden-pour",
    },
    {
      icon: GlassWater,
      title: "POUR",
      description: "Control your perfect pour at your own pace",
      color: "bg-burnt-copper",
    },
    {
      icon: PartyPopper,
      title: "JOY",
      description: "Enjoy the freedom of craft beer, your way",
      color: "bg-brutal-orange",
    },
  ];

  return (
    <section id="tappin" className="py-16 sm:py-24 md:py-32 bg-soft-wheat relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-8 py-4 bg-dark-roast brutal-border shadow-brutal mb-8">
            <span className="text-golden-pour font-extrabold text-2xl tracking-brutal-wider">
              TJ&apos;S TAPPIN&apos;
            </span>
          </div>
          <h2 className="text-brutal-heading font-extrabold text-dark-roast mb-6 tracking-brutal-wider">
            TAP. POUR. JOY.
          </h2>
          <p className="text-2xl text-brutal-brown font-medium max-w-3xl mx-auto leading-relaxed">
            Experience the freedom of self-pour beer. Choose, pour, and enjoy at your own pace.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="brutal-card p-6 sm:p-10 text-center hover:scale-105 transition-transform duration-300">
                {/* Step Number */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-dark-roast brutal-border shadow-brutal flex items-center justify-center">
                  <span className="text-3xl font-extrabold text-golden-pour">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className={`w-24 h-24 ${step.color} brutal-border shadow-brutal-lg mx-auto mb-6 flex items-center justify-center`}>
                  <step.icon className="w-12 h-12 text-dark-roast" />
                </div>

                {/* Title */}
                <h3 className="text-4xl font-extrabold text-dark-roast mb-4 tracking-brutal-wider">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-brutal-brown font-medium leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 text-6xl text-burnt-copper transform -translate-y-1/2">
                    →
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="morph-card brutal-border p-12 shadow-brutal-xl text-center">
            <h3 className="text-3xl font-extrabold text-dark-roast mb-6 tracking-brutal-wide">
              THE TAPPIN&apos; WALL EXPERIENCE
            </h3>
            <p className="text-xl text-brutal-brown leading-relaxed mb-8">
              Our innovative self-pour system puts you in control. No waiting. No limits. 
              Just pure, fresh craft beer flowing exactly when you want it. Pay by the ounce, 
              explore all our variants, and discover your perfect pour.
            </p>
            <Link 
              href="/tappin"
              className="inline-block px-6 sm:px-10 py-4 sm:py-5 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-base sm:text-xl tracking-brutal-wide uppercase transition-all duration-300 hover:translate-x-2 hover:translate-y-2"
            >
              LEARN MORE ABOUT TJ&apos;S TAPPIN&apos;
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
