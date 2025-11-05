import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Award, Users, Heart, Target, Sparkles, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const milestones = [
    { year: '2012', title: 'The Beginning', description: 'TJ\'s Brew Works founded as Maharashtra\'s first craft brewery' },
    { year: '2014', title: 'Expansion', description: 'Opened our flagship brewpub in Navi Mumbai' },
    { year: '2016', title: 'Innovation', description: 'Launched TJ\'s Tappin\' - India\'s first self-pour beer system' },
    { year: '2018', title: 'Recognition', description: 'Won multiple awards for craft beer excellence' },
    { year: '2020', title: 'Community', description: 'Built a thriving community of 50,000+ beer enthusiasts' },
    { year: '2025', title: 'Today', description: 'Nine signature brews and countless memorable moments' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Crafted with Purpose',
      description: 'Every TJ\'s brew starts with real ingredients and bold flavours. It\'s all intentional, handcrafted and never half-hearted.',
    },
    {
      icon: Heart,
      title: 'Celebration of Authenticity',
      description: 'No gimmicks. No fluff. Just honest beer for people who know the good stuff when they sip it.',
    },
    {
      icon: Sparkles,
      title: 'Made for the Moments',
      description: 'TJ\'s turns everyday moments into something worth clinking glasses for.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We\'re building more than a brewery - we\'re cultivating a community of passionate beer lovers.',
    },
    {
      icon: Award,
      title: 'Excellence in Every Pour',
      description: 'From grain to glass, we maintain the highest standards in brewing craftsmanship.',
    },
    {
      icon: TrendingUp,
      title: 'Always Innovating',
      description: 'We\'re constantly pushing boundaries, experimenting with new flavors, and perfecting our craft.',
    },
  ];

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
                OUR STORY
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-soft-wheat font-medium leading-relaxed mb-8">
                More than a beer. It's a vibe. It's a journey. It's TJ's.
              </p>
              <div className="w-32 h-2 bg-brutal-gradient mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="brutal-card p-12 mb-12">
                <h2 className="text-4xl font-extrabold text-dark-roast mb-8 tracking-brutal-wide">
                  THE TJ'S JOURNEY
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-brutal-brown leading-relaxed mb-6">
                    In 2012, we set out to do something no one else in Maharashtra had done before: create a craft brewery 
                    that wasn't just about beer—it was about bringing people together over something real, something honest, 
                    something worth raising a glass to.
                  </p>
                  <p className="text-xl text-brutal-brown leading-relaxed mb-6">
                    We started with a simple belief: beer is the start of something bigger. It's the catalyst for conversation, 
                    the centerpiece of celebration, the common ground where strangers become friends. Every brew we craft, 
                    every space we create, every experience we design—it all comes back to that core idea.
                  </p>
                  <p className="text-xl text-brutal-brown leading-relaxed">
                    Today, TJ's Brew Works isn't just Maharashtra's pioneering craft brewery. We're a lifestyle brand, 
                    a community hub, and a testament to what happens when you combine quality craftsmanship with genuine passion 
                    for bringing people together.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-4 gap-6 mb-16">
                {[
                  { number: '13+', label: 'Years Brewing' },
                  { number: '9', label: 'Beer Variants' },
                  { number: '50K+', label: 'Happy Customers' },
                  { number: '∞', label: 'Good Vibes' },
                ].map((stat) => (
                  <div key={stat.label} className="morph-card brutal-border p-8 text-center shadow-brutal">
                    <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-brutal-gradient mb-3">
                      {stat.number}
                    </div>
                    <div className="text-sm font-bold text-dark-roast tracking-wider">
                      {stat.label.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gradient-to-br from-brutal-brown via-dark-roast to-brutal-brown">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-brutal-heading font-extrabold text-golden-pour mb-16 text-center tracking-brutal-wider">
                OUR MILESTONES
              </h2>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-8 items-center">
                    <div className="w-24 h-24 flex-shrink-0 bg-golden-pour brutal-border shadow-brutal-lg flex items-center justify-center">
                      <span className="text-2xl font-extrabold text-dark-roast">{milestone.year}</span>
                    </div>
                    <div className="flex-1 brutal-card p-6 bg-soft-wheat">
                      <h3 className="text-2xl font-extrabold text-dark-roast mb-3 tracking-brutal-wide">
                        {milestone.title}
                      </h3>
                      <p className="text-lg text-brutal-brown font-medium">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-brutal-heading font-extrabold text-dark-roast mb-6 tracking-brutal-wider">
                  WHAT WE STAND FOR
                </h2>
                <p className="text-xl text-brutal-brown max-w-3xl mx-auto">
                  These aren't just words on a wall. They're the principles that guide every brew we craft 
                  and every experience we create.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value) => (
                  <div key={value.title} className="brutal-card p-8 hover:scale-105 transition-all group">
                    <div className="w-16 h-16 bg-golden-pour brutal-border shadow-brutal mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <value.icon className="w-8 h-8 text-dark-roast" />
                    </div>
                    <h3 className="text-xl font-extrabold text-dark-roast mb-4 tracking-brutal-wide">
                      {value.title.toUpperCase()}
                    </h3>
                    <p className="text-base text-brutal-brown font-medium leading-relaxed">
                      {value.description}
                    </p>
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
              <h2 className="text-brutal-heading font-extrabold text-golden-pour mb-6 tracking-brutal-wider">
                BECOME PART OF OUR STORY
              </h2>
              <p className="text-xl text-soft-wheat mb-10 leading-relaxed">
                Every great story is better with great company. Join us for a pint and see what makes TJ's special.
              </p>
              <button className="px-12 py-6 bg-golden-pour brutal-border shadow-brutal-xl hover:shadow-brutal-xl font-bold text-2xl tracking-brutal-wide uppercase transition-all duration-300 hover:translate-x-2 hover:translate-y-2 hover:scale-105">
                VISIT US TODAY
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
