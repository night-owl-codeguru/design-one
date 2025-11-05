'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MerchCard from '@/components/MerchCard';
import Link from 'next/link';
import { ArrowLeft, Filter, ShoppingCart } from 'lucide-react';
import { merchandiseData } from '@/data/merchandise';
import { useState } from 'react';

export default function MerchandiseStorePage() {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const handleAddToCart = (productId: string, size?: string, color?: string) => {
    console.log('Adding to cart:', productId, size, color);
    alert('Item added to cart! (This is a demo)');
  };

  const categories = ['all', ...Array.from(new Set(merchandiseData.map(item => item.category)))];

  const filteredProducts = merchandiseData
    .filter(item => filterCategory === 'all' || item.category === filterCategory)
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

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
                MERCHANDISE
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-soft-wheat font-medium leading-relaxed mb-8">
                Wear your love for craft beer. Shop TJ's branded merchandise and take the brewery home with you.
              </p>
              <div className="w-32 h-2 bg-brutal-gradient"></div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6">
          {/* Navigation & Cart */}
          <div className="py-8 flex justify-between items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 brutal-card hover:shadow-brutal-lg transition-all group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              <span className="font-bold tracking-wide">Back to Home</span>
            </Link>

            <Link
              href="/cart"
              className="inline-flex items-center gap-2 px-6 py-3 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg transition-all group"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="font-bold tracking-wide">Cart</span>
              <span className="w-6 h-6 bg-dark-roast text-golden-pour rounded-full flex items-center justify-center text-xs font-bold">
                0
              </span>
            </Link>
          </div>

          {/* Filters & Sorting */}
          <div className="brutal-card p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-dark-roast" />
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setFilterCategory(category)}
                      className={`px-4 py-2 brutal-border font-bold text-sm transition-all ${
                        filterCategory === category
                          ? 'bg-golden-pour text-dark-roast shadow-brutal'
                          : 'bg-soft-wheat hover:bg-golden-pour hover:text-dark-roast'
                      }`}
                    >
                      {category === 'all' ? 'ALL ITEMS' : category.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-dark-roast">SORT BY:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 brutal-border bg-soft-wheat font-bold text-sm"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="mt-4 text-sm text-brutal-brown">
              Showing <span className="font-bold">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
            {filteredProducts.map((product) => (
              <MerchCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
