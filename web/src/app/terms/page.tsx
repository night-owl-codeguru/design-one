import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-soft-wheat">
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-5xl font-extrabold text-dark-roast mb-6 tracking-brutal-wider">
              TERMS & CONDITIONS
            </h1>
            <p className="text-lg text-brutal-brown mb-12">
              Last updated: November 5, 2025
            </p>

            <div className="brutal-card p-8 md:p-12 space-y-8 text-lg text-brutal-brown leading-relaxed">
              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the TJ's Brew Works website and services, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to these terms, please do not use our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">2. Age Restriction</h2>
                <p>
                  You must be at least 21 years old to purchase alcohol from TJ's Brew Works. By placing an order, you confirm 
                  that you are of legal drinking age in your jurisdiction. We reserve the right to refuse service and verify age 
                  through valid identification.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">3. Orders and Payment</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All orders are subject to acceptance and availability</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Payment must be made in full at the time of order</li>
                  <li>We accept various payment methods as indicated on our checkout page</li>
                  <li>All prices are in Indian Rupees (INR) and include applicable taxes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">4. Delivery</h2>
                <p>
                  Delivery times are estimates and not guaranteed. We will make reasonable efforts to deliver products within 
                  the estimated timeframe. Delivery is only available to addresses where alcohol delivery is legal. A valid ID 
                  proving legal drinking age must be presented at delivery.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">5. Returns and Refunds</h2>
                <p>
                  Due to the nature of our products, we cannot accept returns of alcohol products unless they are damaged or defective. 
                  If you receive a damaged product, please contact us within 48 hours of delivery with photographic evidence.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">6. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the property of TJ's Brew Works 
                  and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our 
                  express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">7. Limitation of Liability</h2>
                <p>
                  TJ's Brew Works shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting 
                  from your use or inability to use the website or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">8. Responsible Drinking</h2>
                <p>
                  We encourage responsible consumption of alcohol. Please drink responsibly and never drink and drive. If you or someone 
                  you know has a problem with alcohol, please seek help.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. 
                  Your continued use of the website following any changes constitutes acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">10. Contact Information</h2>
                <p>
                  For questions about these Terms & Conditions, please contact us at:
                </p>
                <p className="mt-4 font-bold">
                  Email: legal@tjsbrewworks.com<br />
                  Phone: +91 22 6789 5432<br />
                  Address: Seawoods Grand Central Mall, Navi Mumbai, Maharashtra 400706
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
