import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BeerShowcase from '@/components/BeerShowcase';
import TappinSection from '@/components/TappinSection';
import ValuesSection from '@/components/ValuesSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ShoppingBag, Beer, Zap } from 'lucide-react';
import { beersData } from '@/data/beers';
import { merchandiseData } from '@/data/merchandise';

export default function Home() {
  // Get featured products
  const featuredBeers = beersData.slice(0, 3);
  const featuredMerch = merchandiseData.slice(0, 3);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        
        {/* Featured Beers Section */}
        <section className="py-20 bg-soft-wheat">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-dark-roast mb-3 tracking-brutal-wider">
                  FEATURED BEERS
                </h2>
                <p className="text-lg text-brutal-brown">Shop our most popular brews</p>
              </div>
              <Link
                href="/beers"
                className="px-8 py-4 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold transition-all flex items-center gap-2"
              >
                <Beer className="w-5 h-5" />
                SHOP ALL BEERS
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBeers.map((beer) => (
                <Link key={beer.id} href={`/beers/${beer.id}`}>
                  <div className="brutal-card p-6 hover:scale-105 transition-all group h-full">
                    <div className={`h-48 bg-gradient-to-br ${beer.color} brutal-border mb-6 flex items-center justify-center text-6xl`}>
                      🍺
                    </div>
                    <h3 className="text-2xl font-extrabold text-dark-roast mb-2">{beer.name}</h3>
                    <p className="text-sm text-brutal-brown mb-4 italic">{beer.tagline}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-dark-roast">₹{beer.price}</span>
                      <span className="text-sm font-bold text-golden-pour group-hover:translate-x-2 transition-transform">
                        VIEW DETAILS →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <BeerShowcase />
        <TappinSection />

        {/* Featured Merchandise Section */}
        <section className="py-20 bg-gradient-to-br from-brutal-brown to-dark-roast">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-golden-pour mb-3 tracking-brutal-wider">
                  FEATURED MERCH
                </h2>
                <p className="text-lg text-soft-wheat">Wear the craft beer lifestyle</p>
              </div>
              <Link
                href="/merchandise"
                className="px-8 py-4 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold transition-all flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                SHOP ALL MERCH
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredMerch.map((product) => (
                <Link key={product.id} href={`/merchandise/${product.id}`}>
                  <div className="brutal-card bg-soft-wheat p-6 hover:scale-105 transition-all group h-full">
                    <div className="h-48 bg-gradient-to-br from-brutal-tan to-golden-pour brutal-border mb-6 flex items-center justify-center text-6xl">
                      🎽
                    </div>
                    <h3 className="text-xl font-extrabold text-dark-roast mb-2">{product.name}</h3>
                    <p className="text-sm text-brutal-brown mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-dark-roast">₹{product.price}</span>
                      <span className="text-sm font-bold text-golden-pour group-hover:translate-x-2 transition-transform">
                        VIEW DETAILS →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ValuesSection />
        <CommunitySection />
        <Footer />
      </main>
    </>
  );
}
