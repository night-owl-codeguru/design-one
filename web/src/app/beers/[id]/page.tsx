'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { beersData } from '@/data/beers';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';

export async function generateStaticParams() {
  return beersData.map((beer) => ({
    id: beer.id,
  }));
}

export default function BeerDetailPage() {
  const params = useParams();
  const beerId = params.id as string;
  const beer = beersData.find(b => b.id === beerId);

  const [selectedVariant, setSelectedVariant] = useState(beer?.variants[0]);

  if (!beer) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-soft-wheat pt-32">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-dark-roast mb-4">Beer Not Found</h1>
              <Link href="/beers" className="text-golden-pour hover:underline">
                Back to Beer Store
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    alert('Beer added to cart! (This is a demo)');
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-soft-wheat">
        <section className="pt-32 pb-12">
          <div className="container mx-auto px-6">
            <Link
              href="/beers"
              className="inline-flex items-center gap-2 px-6 py-3 brutal-card hover:shadow-brutal-lg transition-all group mb-8"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              <span className="font-bold tracking-wide">Back to Store</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Beer Image/Visual */}
              <div className={`brutal-card p-12 bg-gradient-to-br ${beer.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-9xl opacity-30">🍺</div>
                <div className="absolute top-6 right-6 bg-dark-roast text-golden-pour px-4 py-2 brutal-border">
                  <span className="font-bold">{beer.alcohol} ABV</span>
                </div>
              </div>

              {/* Beer Details */}
              <div>
                <div className="mb-4">
                  <span className="px-4 py-2 bg-dark-roast text-golden-pour font-bold text-sm tracking-wider">
                    {beer.type.toUpperCase()}
                  </span>
                </div>

                <h1 className="text-5xl font-extrabold text-dark-roast mb-4 tracking-brutal-wide font-optima">
                  {beer.name.toUpperCase()}
                </h1>

                <p className="text-2xl text-burnt-copper font-bold italic mb-6">
                  {beer.tagline}
                </p>

                <div className="flex gap-4 mb-8">
                  <div className="brutal-card p-4">
                    <p className="text-xs font-bold text-brutal-brown mb-1">ALCOHOL</p>
                    <p className="text-2xl font-extrabold text-dark-roast">{beer.alcohol}</p>
                  </div>
                  <div className="brutal-card p-4">
                    <p className="text-xs font-bold text-brutal-brown mb-1">IBU</p>
                    <p className="text-2xl font-extrabold text-dark-roast">{beer.ibu}</p>
                  </div>
                </div>

                <div className="brutal-card p-6 mb-8">
                  <h2 className="text-xl font-extrabold text-dark-roast mb-3">ABOUT THIS BEER</h2>
                  <p className="text-lg text-brutal-brown leading-relaxed">{beer.description}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-dark-roast mb-3">FLAVOR PROFILE</h3>
                  <div className="flex flex-wrap gap-3">
                    {beer.flavor.map((flavor) => (
                      <span
                        key={flavor}
                        className="px-4 py-2 bg-golden-pour brutal-border font-bold text-dark-roast"
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="brutal-card p-6 bg-dark-roast text-soft-wheat mb-8">
                  <h3 className="text-lg font-bold text-golden-pour mb-4">SELECT PACK SIZE</h3>
                  <div className="flex gap-3 mb-6">
                    {beer.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        disabled={!variant.inStock}
                        className={`flex-1 px-6 py-4 brutal-border font-bold transition-all relative ${
                          selectedVariant?.id === variant.id
                            ? 'bg-golden-pour text-dark-roast shadow-brutal'
                            : variant.inStock
                            ? 'bg-soft-wheat text-dark-roast hover:bg-golden-pour'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <div className="text-2xl font-extrabold mb-1">{variant.packSize}</div>
                        <div className="text-sm">bottles</div>
                        <div className="text-lg font-bold mt-2">₹{variant.price}</div>
                        {!variant.inStock && (
                          <div className="absolute top-2 right-2 text-xs bg-red-500 text-white px-2 py-1">
                            OUT OF STOCK
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  {selectedVariant && (
                    <div className="flex items-center justify-between pt-4 border-t-2 border-golden-pour/20">
                      <div>
                        <p className="text-sm text-soft-wheat mb-1">Total Price</p>
                        <p className="text-4xl font-extrabold text-golden-pour">
                          ₹{selectedVariant.price}
                        </p>
                      </div>
                      <button
                        onClick={handleAddToCart}
                        disabled={!selectedVariant.inStock}
                        className={`px-8 py-4 brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-lg transition-all flex items-center gap-3 ${
                          selectedVariant.inStock
                            ? 'bg-golden-pour hover:scale-105 text-dark-roast'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart className="w-6 h-6" />
                        ADD TO CART
                      </button>
                    </div>
                  )}
                </div>

                <div className="brutal-card p-4 bg-green-50 border-green-500">
                  <div className="flex items-center gap-2 text-green-700">
                    <Check className="w-5 h-5" />
                    <span className="font-bold">Free delivery on orders above ₹1500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Beers */}
            <div className="mt-20">
              <h2 className="text-4xl font-extrabold text-dark-roast mb-8 tracking-brutal-wide">
                YOU MIGHT ALSO LIKE
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {beersData.filter(b => b.id !== beer.id).slice(0, 4).map((relatedBeer) => (
                  <Link key={relatedBeer.id} href={`/beers/${relatedBeer.id}`}>
                    <div className="brutal-card p-6 hover:scale-105 transition-all">
                      <div className={`h-40 bg-gradient-to-br ${relatedBeer.color} brutal-border mb-4`}></div>
                      <h3 className="font-extrabold text-dark-roast mb-2">{relatedBeer.name}</h3>
                      <p className="text-sm text-brutal-brown mb-3">{relatedBeer.tagline}</p>
                      <p className="text-xl font-bold text-dark-roast">₹{relatedBeer.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
