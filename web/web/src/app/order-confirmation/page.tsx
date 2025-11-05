import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle, Package, Truck, Mail } from 'lucide-react';

export default function OrderConfirmationPage() {
  // Mock order data
  const orderNumber = 'TJ-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  const orderDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-soft-wheat">
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Success Message */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 brutal-border shadow-brutal-lg mb-6">
                <CheckCircle className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-5xl font-extrabold text-dark-roast mb-4 tracking-brutal-wider">
                ORDER CONFIRMED!
              </h1>
              <p className="text-xl text-brutal-brown">
                Thank you for your order. We're brewing up something special for you!
              </p>
            </div>

            {/* Order Details */}
            <div className="brutal-card p-8 mb-8">
              <h2 className="text-2xl font-extrabold text-dark-roast mb-6">ORDER DETAILS</h2>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm font-bold text-brutal-brown mb-1">ORDER NUMBER</p>
                  <p className="text-xl font-extrabold text-dark-roast">{orderNumber}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-brutal-brown mb-1">ORDER DATE</p>
                  <p className="text-xl font-extrabold text-dark-roast">{orderDate}</p>
                </div>
              </div>

              <div className="p-6 bg-green-50 brutal-border border-green-500">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-green-600" />
                  <p className="text-green-700 font-bold">
                    A confirmation email has been sent to your email address.
                  </p>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div className="brutal-card p-8 mb-8">
              <h2 className="text-2xl font-extrabold text-dark-roast mb-6">WHAT'S NEXT?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-golden-pour brutal-border flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-extrabold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-dark-roast mb-2">Order Processing</h3>
                    <p className="text-brutal-brown">
                      We're preparing your order and will have it ready for dispatch within 1-2 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-burnt-copper brutal-border flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-dark-roast mb-2">Shipping</h3>
                    <p className="text-brutal-brown">
                      Your order will be shipped within 2-3 business days. You'll receive tracking information via email.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-roast brutal-border flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-golden-pour" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-dark-roast mb-2">Delivery</h3>
                    <p className="text-brutal-brown">
                      Expected delivery in 5-7 business days. Please have a valid ID ready as age verification is required.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/beers"
                className="flex-1 px-8 py-4 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-lg text-center transition-all hover:scale-105"
              >
                CONTINUE SHOPPING
              </Link>
              <Link
                href="/"
                className="flex-1 px-8 py-4 bg-dark-roast text-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-lg text-center transition-all hover:scale-105"
              >
                BACK TO HOME
              </Link>
            </div>

            {/* Contact Support */}
            <div className="mt-12 p-6 brutal-card bg-gradient-to-br from-golden-pour/10 to-burnt-copper/10 text-center">
              <h3 className="text-xl font-extrabold text-dark-roast mb-3">NEED HELP?</h3>
              <p className="text-brutal-brown mb-4">
                If you have any questions about your order, feel free to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
                <a href="mailto:orders@tjsbrewworks.com" className="font-bold text-dark-roast hover:text-golden-pour">
                  orders@tjsbrewworks.com
                </a>
                <span className="hidden sm:inline text-brutal-brown">•</span>
                <a href="tel:+912267895432" className="font-bold text-dark-roast hover:text-golden-pour">
                  +91 22 6789 5432
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
