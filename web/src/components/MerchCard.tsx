'use client';

import { MerchandiseProduct } from '@/types';
import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';
import { useState } from 'react';

interface MerchCardProps {
  product: MerchandiseProduct;
  onAddToCart?: (productId: string, size?: string, color?: string) => void;
}

export default function MerchCard({ product, onAddToCart }: MerchCardProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[2] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product.id, selectedSize, selectedColor);
    }
  };

  return (
    <div className="brutal-card overflow-hidden hover:scale-105 transition-all duration-300 group h-full flex flex-col">
      {/* Product Image Placeholder */}
      <div className="h-64 bg-gradient-to-br from-brutal-brown to-golden-pour flex items-center justify-center relative overflow-hidden">
        <div className="text-8xl opacity-20 group-hover:scale-110 transition-transform">
          🍺
        </div>
        <div className="absolute top-4 right-4">
          {!product.inStock && (
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold">
              OUT OF STOCK
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <p className="text-xs text-burnt-copper font-bold tracking-wider uppercase mb-1">
            {product.category}
          </p>
          <h3 className="text-xl font-extrabold text-dark-roast tracking-wide">
            {product.name}
          </h3>
        </div>

        <p className="text-sm text-brutal-brown mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Size Selection */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-bold text-dark-roast mb-2 tracking-wide">SIZE:</p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 brutal-border font-bold text-xs transition-all ${
                    selectedSize === size
                      ? 'bg-golden-pour text-dark-roast'
                      : 'bg-soft-wheat hover:bg-golden-pour hover:text-dark-roast'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Color Selection */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-bold text-dark-roast mb-2 tracking-wide">COLOR:</p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 brutal-border font-bold text-xs transition-all ${
                    selectedColor === color
                      ? 'bg-dark-roast text-golden-pour'
                      : 'bg-soft-wheat hover:bg-dark-roast hover:text-golden-pour'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price & Actions */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t-2 border-dark-roast/10 mt-auto">
          <p className="text-2xl font-extrabold text-dark-roast">
            ₹{product.price}
          </p>
          <div className="flex gap-2">
            <Link
              href={`/merchandise/${product.id}`}
              className="w-10 h-10 brutal-border bg-soft-wheat hover:bg-dark-roast hover:text-golden-pour flex items-center justify-center transition-all"
            >
              <Eye className="w-5 h-5" />
            </Link>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`px-4 py-2 brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-sm transition-all flex items-center gap-2 ${
                product.inStock
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
    </div>
  );
}
