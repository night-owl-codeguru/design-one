import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Calendar, Navigation as NavIcon } from 'lucide-react';

export default function VisitPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-soft-wheat">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-dark-roast via-brutal-brown to-dark-roast relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-golden-pour rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-burnt-copper rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-golden-pour mb-6 tracking-brutal-wider">
                VISIT US
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-soft-wheat font-medium leading-relaxed mb-8">
                Come for the beer. Stay for the vibe. Leave with memories.
              </p>
              <div className="w-32 h-2 bg-brutal-gradient mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Map Placeholder */}
                <div className="brutal-card p-4 shadow-brutal-xl">
                  <div className="aspect-square bg-gradient-to-br from-brutal-tan to-soft-wheat brutal-border shadow-brutal flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-32 h-32 text-burnt-copper/30 mx-auto mb-4" />
                      <p className="text-lg font-bold text-brutal-brown">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-extrabold text-dark-roast mb-8 tracking-brutal-wide">
                      FIND US HERE
                    </h2>
                  </div>

                  {/* Address */}
                  <div className="brutal-card p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-golden-pour brutal-border shadow-brutal flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-8 h-8 text-dark-roast" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-dark-roast mb-3 tracking-brutal-wide">
                          ADDRESS
                        </h3>
                        <p className="text-lg text-brutal-brown leading-relaxed">
                          Primary Cuisine Pvt. Ltd.<br />
                          A-500, MIDC, TTC Industrial Area<br />
                          Mahape, Navi Mumbai<br />
                          Maharashtra - 400710
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="brutal-card p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-burnt-copper brutal-border shadow-brutal flex items-center justify-center flex-shrink-0">
                        <Phone className="w-8 h-8 text-soft-wheat" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-dark-roast mb-3 tracking-brutal-wide">
                          PHONE
                        </h3>
                        <a href="tel:+919820106363" className="text-2xl font-bold text-burnt-copper hover:text-golden-pour transition-colors">
                          +91 98201 06363
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="brutal-card p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-brutal-orange brutal-border shadow-brutal flex items-center justify-center flex-shrink-0">
                        <Mail className="w-8 h-8 text-dark-roast" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-dark-roast mb-3 tracking-brutal-wide">
                          EMAIL
                        </h3>
                        <a href="mailto:tj@tjsbrewworks.com" className="text-xl font-bold text-burnt-copper hover:text-golden-pour transition-colors break-all">
                          tj@tjsbrewworks.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Directions Button */}
                  <a href="https://maps.google.com/?q=Primary+Cuisine+Pvt+Ltd+Mahape+Navi+Mumbai" target="_blank" rel="noopener noreferrer" className="w-full px-6 sm:px-8 py-4 sm:py-6 bg-golden-pour brutal-border shadow-brutal-lg hover:shadow-brutal-xl font-bold text-base sm:text-xl tracking-brutal-wide uppercase transition-all hover:scale-105 flex items-center justify-center gap-3">
                    <NavIcon className="w-6 h-6" />
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hours & Info */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-brutal-brown via-dark-roast to-brutal-brown">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                {/* Operating Hours */}
                <div className="brutal-card p-10 bg-soft-wheat">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-golden-pour brutal-border shadow-brutal flex items-center justify-center">
                      <Clock className="w-8 h-8 text-dark-roast" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-dark-roast tracking-brutal-wide">
                      HOURS
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      { days: 'Monday - Thursday', hours: '12:00 PM - 11:00 PM' },
                      { days: 'Friday - Saturday', hours: '12:00 PM - 01:00 AM' },
                      { days: 'Sunday', hours: '12:00 PM - 11:00 PM' },
                    ].map((schedule) => (
                      <div key={schedule.days} className="flex justify-between items-center pb-4 border-b-2 border-golden-pour/20">
                        <span className="text-lg font-bold text-dark-roast">{schedule.days}</span>
                        <span className="text-lg font-bold text-burnt-copper">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-golden-pour/20 brutal-border">
                    <p className="text-sm font-bold text-dark-roast">
                      ⚠️ Kitchen closes 30 minutes before closing time
                    </p>
                  </div>
                </div>

                {/* Events & Reservations */}
                <div className="brutal-card p-10 bg-soft-wheat">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-burnt-copper brutal-border shadow-brutal flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-soft-wheat" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-dark-roast tracking-brutal-wide">
                      EVENTS
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="pb-6 border-b-2 border-golden-pour/20">
                      <h4 className="text-xl font-extrabold text-dark-roast mb-3 tracking-wide">
                        HAPPY HOURS
                      </h4>
                      <p className="text-base text-brutal-brown font-medium mb-2">
                        Mon-Fri: 4:00 PM - 7:00 PM
                      </p>
                      <p className="text-sm text-burnt-copper font-bold">
                        20% off all draft beers
                      </p>
                    </div>

                    <div className="pb-6 border-b-2 border-golden-pour/20">
                      <h4 className="text-xl font-extrabold text-dark-roast mb-3 tracking-wide">
                        LIVE MUSIC
                      </h4>
                      <p className="text-base text-brutal-brown font-medium">
                        Every Friday & Saturday
                      </p>
                      <p className="text-sm text-burnt-copper font-bold">
                        8:00 PM onwards
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-extrabold text-dark-roast mb-3 tracking-wide">
                        RESERVATIONS
                      </h4>
                      <p className="text-base text-brutal-brown font-medium mb-4">
                        Groups of 8+? Book ahead to secure your spot.
                      </p>
                      <button className="w-full px-6 py-4 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-sm tracking-wider uppercase transition-all">
                        BOOK NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-brutal-heading font-extrabold text-dark-roast mb-12 text-center tracking-brutal-wider">
                WHAT TO EXPECT
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: "The Space",
                    points: ["Industrial-chic design", "Indoor & outdoor seating", "Brewery tour views", "Tappin' wall experience"]
                  },
                  {
                    title: "The Food",
                    points: ["Beer-friendly menu", "Artisanal pizzas", "Craft burgers", "Shareable plates"]
                  },
                  {
                    title: "The Vibe",
                    points: ["Laid-back atmosphere", "Craft beer enthusiasts", "Live music weekends", "Community events"]
                  },
                ].map((section) => (
                  <div key={section.title} className="brutal-card p-8">
                    <h3 className="text-2xl font-extrabold text-dark-roast mb-6 tracking-brutal-wide">
                      {section.title.toUpperCase()}
                    </h3>
                    <ul className="space-y-3">
                      {section.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-golden-pour brutal-border mt-2 flex-shrink-0"></div>
                          <span className="text-base text-brutal-brown font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-dark-roast via-brutal-brown to-dark-roast">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-brutal-heading font-extrabold text-golden-pour mb-8 tracking-brutal-wider">
                SEE YOU SOON
              </h2>
              <p className="text-xl text-soft-wheat mb-12 leading-relaxed">
                Your table is waiting. Your beer is fresh. Your vibe is guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center">
                <a href="tel:+919820106363" className="px-8 sm:px-12 py-4 sm:py-6 bg-golden-pour brutal-border shadow-brutal-xl hover:shadow-brutal-xl font-bold text-lg sm:text-2xl tracking-brutal-wide uppercase transition-all duration-300 hover:translate-x-2 hover:translate-y-2 hover:scale-105 inline-block text-center">
                  CALL US
                </a>
                <Link href="/beers" className="px-8 sm:px-12 py-4 sm:py-6 bg-transparent brutal-border border-golden-pour text-golden-pour hover:bg-golden-pour hover:text-dark-roast shadow-brutal-xl hover:shadow-brutal-xl font-bold text-lg sm:text-2xl tracking-brutal-wide uppercase transition-all duration-300 hover:translate-x-2 hover:translate-y-2 text-center inline-block">
                  VIEW MENU
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
