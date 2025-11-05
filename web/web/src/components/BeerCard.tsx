'use client';

import { BeerProduct } from '@/types';
import Link from 'next/link';
import { ShoppingCart, Info } from 'lucide-react';
import { useState } from 'react';

interface BeerCardProps {
  beer: BeerProduct;
  onAddToCart?: (beerId: string, variantId: string) => void;
}

export default function BeerCard({ beer, onAddToCart }: BeerCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(beer.variants[0]);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(beer.id, selectedVariant.id);
    }
  };

  return (
    <div className="brutal-card p-6 hover:scale-105 transition-all duration-300 group h-full flex flex-col">
      {/* Beer Name & Type */}
      <div className="mb-4">
        <h3 className="text-2xl font-extrabold text-dark-roast mb-2 tracking-brutal-wide font-optima">
          {beer.name.toUpperCase()}
        </h3>
        <p className="text-sm text-burnt-copper font-bold italic">
          {beer.tagline}
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-dark-roast text-golden-pour text-xs font-bold tracking-wider">
          {beer.type.toUpperCase()}
        </span>
        <span className="px-3 py-1 bg-burnt-copper text-soft-wheat text-xs font-bold tracking-wider">
          {beer.alcohol} ABV
        </span>
        <span className="px-3 py-1 bg-golden-pour text-dark-roast text-xs font-bold tracking-wider">
          {beer.ibu} IBU
        </span>
      </div>

      {/* Flavor Profile */}
      <div className="mb-4">
        <p className="text-xs font-bold text-dark-roast mb-2 tracking-wide">FLAVOR:</p>
        <div className="flex flex-wrap gap-2">
          {beer.flavor.slice(0, 3).map((flavor) => (
            <span
              key={flavor}
              className="px-2 py-1 bg-soft-wheat brutal-border text-xs font-bold text-brutal-brown"
            >
              {flavor}
            </span>
          ))}
        </div>
      </div>

      {/* Pack Size Selection */}
      <div className="mb-4 mt-auto">
        <p className="text-xs font-bold text-dark-roast mb-2 tracking-wide">PACK SIZE:</p>
        <div className="flex gap-2">
          {beer.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant)}
              disabled={!variant.inStock}
              className={`px-4 py-2 brutal-border font-bold text-sm transition-all ${
                selectedVariant.id === variant.id
                  ? 'bg-golden-pour text-dark-roast shadow-brutal'
                  : variant.inStock
                  ? 'bg-soft-wheat hover:bg-golden-pour hover:text-dark-roast'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {variant.packSize}
            </button>
          ))}
        </div>
      </div>

      {/* Price & Actions */}
      <div className="flex items-center justify-between gap-3 pt-4 border-t-2 border-dark-roast/10">
        <div>
          <p className="text-2xl font-extrabold text-dark-roast">
            ₹{selectedVariant.price}
          </p>
          <p className="text-xs text-brutal-brown">
            {selectedVariant.packSize} bottles
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href={`/beers/${beer.id}`}
            className="w-10 h-10 brutal-border bg-soft-wheat hover:bg-dark-roast hover:text-golden-pour flex items-center justify-center transition-all group"
          >
            <Info className="w-5 h-5" />
          </Link>
          <button
            onClick={handleAddToCart}
            disabled={!selectedVariant.inStock}
            className={`px-4 py-2 brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-sm transition-all flex items-center gap-2 ${
              selectedVariant.inStock
                ? 'bg-golden-pour hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
