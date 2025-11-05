import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Hand, GlassWater, PartyPopper, Beer, Coins, Zap, Users } from 'lucide-react';

export default function TappinPage() {
  const benefits = [
    {
      icon: Zap,
      title: "No Waiting",
      description: "Pour your beer instantly. No queues, no delays. Just pure, fresh craft beer on demand.",
    },
    {
      icon: Coins,
      title: "Pay By The Ounce",
      description: "Complete control over your spending. Try a little of everything or pour a full pint—you decide.",
    },
    {
      icon: Beer,
      title: "Try Them All",
      description: "With 9 variants on tap, sample different styles and discover new favorites without commitment.",
    },
    {
      icon: Users,
      title: "Your Pace, Your Way",
      description: "Socialize freely, pour when you want, and enjoy the ultimate craft beer experience.",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-dark-roast via-brutal-brown to-dark-roast pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-golden-pour rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-burnt-copper rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-8 px-6 py-3 brutal-border bg-golden-pour shadow-brutal hover:shadow-brutal-lg transition-all group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              <span className="font-bold tracking-wide">Back to Home</span>
            </Link>

            <div className="max-w-4xl">
              <div className="inline-block px-8 py-4 bg-golden-pour brutal-border shadow-brutal mb-8">
                <span className="text-dark-roast font-extrabold text-3xl tracking-brutal-wider">
                  TJ&apos;S TAPPIN&apos;
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-golden-pour mb-6 tracking-brutal-wider leading-none">
                TAP.<br />
                <span className="text-soft-wheat">POUR.</span><br />
                <span className="text-burnt-copper">JOY.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-soft-wheat font-medium leading-relaxed max-w-3xl">
                India's most innovative self-pour beer experience. Take control, explore flavors, 
                and pour your perfect pint—all at your own pace.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-soft-wheat">
          <div className="container mx-auto px-6">
            <h2 className="text-brutal-heading font-extrabold text-dark-roast mb-16 text-center tracking-brutal-wider">
              HOW IT WORKS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Hand,
                  step: "01",
                  title: "TAP",
                  description: "Choose from 9 unique beer variants on our self-pour wall. Each tap displays style, ABV, and flavor profile.",
                  color: "bg-golden-pour",
                },
                {
                  icon: GlassWater,
                  step: "02",
                  title: "POUR",
                  description: "Control your glass. Pour a taste, a half, or a full pint. Our system tracks your ounces and calculates your cost in real-time.",
                  color: "bg-burnt-copper",
                },
                {
                  icon: PartyPopper,
                  step: "03",
                  title: "JOY",
                  description: "Enjoy the freedom. Experiment with flavors, socialize freely, and create your perfect craft beer journey.",
                  color: "bg-brutal-orange",
                },
              ].map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="brutal-card p-10 text-center hover:scale-105 transition-transform duration-300 h-full">
                    {/* Step Number */}
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-dark-roast brutal-border shadow-brutal flex items-center justify-center">
                      <span className="text-2xl font-extrabold text-golden-pour">{step.step}</span>
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
                    <p className="text-lg text-brutal-brown leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-br from-brutal-brown to-dark-roast">
          <div className="container mx-auto px-6">
            <h2 className="text-brutal-heading font-extrabold text-golden-pour mb-16 text-center tracking-brutal-wider">
              WHY TJ&apos;S TAPPIN&apos;?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="brutal-card bg-soft-wheat p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-golden-pour brutal-border shadow-brutal flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-8 h-8 text-dark-roast" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-dark-roast mb-3 tracking-brutal-wide">
                        {benefit.title}
                      </h3>
                      <p className="text-lg text-brutal-brown leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital ID Flow */}
        <section className="py-20 bg-gradient-to-br from-brutal-orange to-burnt-copper">
          <div className="container mx-auto px-6">
            <h2 className="text-brutal-heading font-extrabold text-soft-wheat mb-16 text-center tracking-brutal-wider">
              YOUR DIGITAL TAP ID
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: "💳",
                  title: "GET YOUR ID",
                  description: "Sign up at the counter and receive your personal Tappin' ID card. Link it to your payment method.",
                },
                {
                  icon: "📱",
                  title: "TAP TO ACTIVATE",
                  description: "Touch your ID card to any tap reader on the wall. Your session starts instantly.",
                },
                {
                  icon: "🍺",
                  title: "POUR & TRACK",
                  description: "Pour any beer you want. Your ID tracks volume, cost, and creates your personal taste profile.",
                },
              ].map((step) => (
                <div key={step.title} className="brutal-card bg-soft-wheat p-8 text-center hover:scale-105 transition-all">
                  <div className="text-6xl mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-extrabold text-dark-roast mb-4 tracking-brutal-wide">
                    {step.title}
                  </h3>
                  <p className="text-lg text-brutal-brown leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Concept Dashboard */}
            <div className="max-w-4xl mx-auto brutal-card bg-dark-roast p-8 md:p-12 shadow-brutal-xl">
              <h3 className="text-3xl font-extrabold text-golden-pour mb-8 tracking-brutal-wide">
                YOUR TAPPIN' DASHBOARD (CONCEPT)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="brutal-border bg-soft-wheat p-6">
                  <p className="text-sm font-bold text-brutal-brown mb-2">AVAILABLE CREDITS</p>
                  <p className="text-4xl font-extrabold text-dark-roast">₹850.00</p>
                </div>
                <div className="brutal-border bg-soft-wheat p-6">
                  <p className="text-sm font-bold text-brutal-brown mb-2">POURED TODAY</p>
                  <p className="text-4xl font-extrabold text-dark-roast">48 oz</p>
                </div>
              </div>

              <div className="brutal-border bg-soft-wheat p-6">
                <h4 className="text-xl font-extrabold text-dark-roast mb-4">RECENT POURS</h4>
                <div className="space-y-3">
                  {[
                    { beer: "Devil's Dark", volume: "12 oz", cost: "₹105", time: "5 mins ago" },
                    { beer: "Hopsmack IPA", volume: "16 oz", cost: "₹152", time: "20 mins ago" },
                    { beer: "Blonde Ale", volume: "8 oz", cost: "₹60", time: "35 mins ago" },
                  ].map((pour, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b-2 border-dark-roast/10 last:border-0">
                      <div>
                        <p className="font-bold text-dark-roast">{pour.beer}</p>
                        <p className="text-sm text-brutal-brown">{pour.volume} • {pour.time}</p>
                      </div>
                      <p className="font-extrabold text-dark-roast">{pour.cost}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-golden-pour/20 brutal-border border-golden-pour text-center">
                <p className="text-sm font-bold text-golden-pour">
                  ✓ This is a concept mockup. Actual features may vary.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rules & Guidelines */}
        <section className="py-20 bg-soft-wheat">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-brutal-heading font-extrabold text-dark-roast mb-12 text-center tracking-brutal-wider">
                TAPPIN&apos; GUIDELINES
              </h2>

              <div className="morph-card brutal-border p-12 shadow-brutal-xl">
                <ul className="space-y-6 text-lg text-brutal-brown">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-golden-pour brutal-border flex items-center justify-center font-extrabold text-dark-roast flex-shrink-0">1</span>
                    <p><strong>Minimum charge applies:</strong> Each guest has a minimum pour requirement to ensure everyone gets to enjoy the experience.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-golden-pour brutal-border flex items-center justify-center font-extrabold text-dark-roast flex-shrink-0">2</span>
                    <p><strong>One glass at a time:</strong> Pour one beer at a time to ensure quality and freshness for every pour.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-golden-pour brutal-border flex items-center justify-center font-extrabold text-dark-roast flex-shrink-0">3</span>
                    <p><strong>Responsible drinking:</strong> We monitor pours to ensure everyone enjoys responsibly. Legal drinking age required.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-golden-pour brutal-border flex items-center justify-center font-extrabold text-dark-roast flex-shrink-0">4</span>
                    <p><strong>Staff assistance available:</strong> Our team is always ready to help with recommendations, pouring techniques, or any questions.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-golden-pour brutal-border flex items-center justify-center font-extrabold text-dark-roast flex-shrink-0">5</span>
                    <p><strong>Tap ID Security:</strong> Your Digital Tap ID is personal and secure. Report lost cards immediately to our staff.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-dark-roast">
          <div className="container mx-auto px-6 text-center">
            <Beer className="w-20 h-20 text-golden-pour mx-auto mb-8" />
            <h2 className="text-5xl font-extrabold text-golden-pour mb-6 tracking-brutal-wider">
              READY TO EXPERIENCE TAPPIN&apos;?
            </h2>
            <p className="text-2xl text-soft-wheat mb-12 max-w-3xl mx-auto">
              Visit TJ's Brew Works and discover the freedom of self-pour craft beer. 
              Your perfect pour awaits.
            </p>
            <Link
              href="/visit"
              className="inline-block px-8 sm:px-12 py-4 sm:py-6 bg-golden-pour brutal-border shadow-brutal-lg hover:shadow-brutal-xl font-bold text-lg sm:text-2xl tracking-brutal-wide uppercase transition-all duration-300 hover:translate-x-2 hover:translate-y-2"
            >
              VISIT US NOW
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
