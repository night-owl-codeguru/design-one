import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-soft-wheat">
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-5xl font-extrabold text-dark-roast mb-6 tracking-brutal-wider">
              PRIVACY POLICY
            </h1>
            <p className="text-lg text-brutal-brown mb-12">
              Last updated: November 5, 2025
            </p>

            <div className="brutal-card p-8 md:p-12 space-y-8 text-lg text-brutal-brown leading-relaxed">
              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">1. Introduction</h2>
                <p>
                  Welcome to TJ's Brew Works. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our website 
                  and tell you about your privacy rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">2. Data We Collect</h2>
                <p>
                  We may collect, use, store and transfer different kinds of personal data about you including:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Identity Data (name, username)</li>
                  <li>Contact Data (email address, telephone numbers, billing and delivery addresses)</li>
                  <li>Transaction Data (details about payments and products you have purchased)</li>
                  <li>Technical Data (IP address, browser type, time zone setting)</li>
                  <li>Usage Data (information about how you use our website)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">3. How We Use Your Data</h2>
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Process and deliver your orders</li>
                  <li>Manage your account and provide customer service</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">4. Data Security</h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                  used or accessed in an unauthorized way. We limit access to your personal data to those who have a genuine business need to know it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">5. Your Rights</h2>
                <p>
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Right to access your personal data</li>
                  <li>Right to correct your personal data</li>
                  <li>Right to erase your personal data</li>
                  <li>Right to object to processing of your personal data</li>
                  <li>Right to data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-dark-roast mb-4">6. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <p className="mt-4 font-bold">
                  Email: privacy@tjsbrewworks.com<br />
                  Phone: +91 22 6789 5432
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
