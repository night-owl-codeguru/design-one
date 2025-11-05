import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
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
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-golden-pour mb-6 tracking-brutal-wider">
                GET IN TOUCH
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-soft-wheat font-medium leading-relaxed mb-8">
                Questions? Feedback? Beer-related inquiries? We're all ears.
              </p>
              <div className="w-32 h-2 bg-brutal-gradient"></div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="brutal-card p-8">
                <h2 className="text-3xl font-extrabold text-dark-roast mb-6 tracking-brutal-wide">
                  SEND US A MESSAGE
                </h2>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-dark-roast mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 brutal-border bg-soft-wheat font-medium"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-dark-roast mb-2">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 brutal-border bg-soft-wheat font-medium"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-dark-roast mb-2">
                      PHONE
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 brutal-border bg-soft-wheat font-medium"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-dark-roast mb-2">
                      MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 brutal-border bg-soft-wheat font-medium resize-none"
                      placeholder="Tell us what's on your mind..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    SEND MESSAGE
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Visit Us */}
                <div className="brutal-card p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-golden-pour brutal-border shadow-brutal flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-dark-roast" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-dark-roast">VISIT US</h3>
                      <p className="text-sm text-brutal-brown font-bold">Come by for a pint</p>
                    </div>
                  </div>
                  <div className="text-lg text-brutal-brown space-y-2">
                    <p className="font-bold">TJ's Brew Works</p>
                    <p>Seawoods Grand Central Mall,</p>
                    <p>Sector 40, Nerul Node,</p>
                    <p>Navi Mumbai, Maharashtra 400706</p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="brutal-card p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-burnt-copper brutal-border shadow-brutal flex items-center justify-center">
                      <Phone className="w-8 h-8 text-soft-wheat" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-dark-roast">CALL US</h3>
                      <p className="text-sm text-brutal-brown font-bold">Mon-Sun, 12 PM - 11 PM</p>
                    </div>
                  </div>
                  <div className="text-lg text-brutal-brown space-y-2">
                    <p className="font-bold">+91 22 6789 5432</p>
                    <p className="font-bold">+91 98765 43210</p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="brutal-card p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-dark-roast brutal-border shadow-brutal flex items-center justify-center">
                      <Mail className="w-8 h-8 text-golden-pour" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-dark-roast">EMAIL US</h3>
                      <p className="text-sm text-brutal-brown font-bold">We'll reply within 24 hours</p>
                    </div>
                  </div>
                  <div className="text-lg text-brutal-brown space-y-2">
                    <p className="font-bold">hello@tjsbrewworks.com</p>
                    <p className="font-bold">orders@tjsbrewworks.com</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="brutal-card p-8 bg-gradient-to-br from-golden-pour/10 to-burnt-copper/10">
                  <h3 className="text-2xl font-extrabold text-dark-roast mb-4">OPENING HOURS</h3>
                  <div className="space-y-3 text-lg">
                    <div className="flex justify-between">
                      <span className="font-bold text-brutal-brown">Monday - Thursday:</span>
                      <span className="text-dark-roast font-extrabold">12 PM - 11 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold text-brutal-brown">Friday - Saturday:</span>
                      <span className="text-dark-roast font-extrabold">12 PM - 1 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold text-brutal-brown">Sunday:</span>
                      <span className="text-dark-roast font-extrabold">12 PM - 11 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-16 brutal-card h-96 bg-gradient-to-br from-brutal-brown/20 to-golden-pour/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-20 h-20 text-dark-roast/30 mx-auto mb-4" />
                <p className="text-xl font-bold text-brutal-brown">Interactive Map Would Go Here</p>
                <p className="text-sm text-brutal-brown mt-2">Seawoods Grand Central Mall, Navi Mumbai</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
