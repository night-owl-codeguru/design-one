'use client';

import { CartItem } from '@/types';
import { X, Plus, Minus } from 'lucide-react';

interface CartItemComponentProps {
  item: CartItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItemComponent({ item, onUpdateQuantity, onRemove }: CartItemComponentProps) {
  return (
    <div className="brutal-card p-4 flex gap-4 items-center">
      {/* Product Image Placeholder */}
      <div className="w-20 h-20 bg-gradient-to-br from-brutal-brown to-golden-pour brutal-border flex items-center justify-center flex-shrink-0">
        <span className="text-3xl">🍺</span>
      </div>

      {/* Product Info */}
      <div className="flex-grow">
        <h3 className="font-bold text-dark-roast mb-1">{item.name}</h3>
        {item.variant && (
          <p className="text-sm text-brutal-brown">
            {item.variant.packSize && `Pack of ${item.variant.packSize}`}
            {item.variant.size && `Size: ${item.variant.size}`}
            {item.variant.color && ` • Color: ${item.variant.color}`}
          </p>
        )}
        <p className="text-lg font-bold text-dark-roast mt-2">₹{item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
          className="w-8 h-8 brutal-border bg-soft-wheat hover:bg-golden-pour transition-all flex items-center justify-center"
          aria-label="Decrease quantity"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-12 text-center font-bold text-dark-roast">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 brutal-border bg-soft-wheat hover:bg-golden-pour transition-all flex items-center justify-center"
          aria-label="Increase quantity"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Subtotal */}
      <div className="text-right w-24">
        <p className="text-lg font-extrabold text-dark-roast">
          ₹{item.price * item.quantity}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="w-8 h-8 brutal-border bg-red-500 hover:bg-red-600 text-white transition-all flex items-center justify-center"
        aria-label="Remove item"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
