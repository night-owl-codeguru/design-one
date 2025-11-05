'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CartItemComponent from '@/components/CartItemComponent';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { CartItem } from '@/types';

export default function CartPage() {
  // Mock cart data - in production, this would come from global state/context
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      productId: 'devils-dark',
      productType: 'beer',
      name: "Devil's Dark",
      price: 350,
      quantity: 2,
      variant: { packSize: 4 },
    },
    {
      id: '2',
      productId: 'tshirt-classic-black',
      productType: 'merchandise',
      name: "TJ's Classic T-Shirt - Black",
      price: 799,
      quantity: 1,
      variant: { size: 'L', color: 'Black' },
    },
  ]);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(items =>
      items.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.18; // 18% GST
  const shipping = subtotal > 1500 ? 0 : 99;
  const total = subtotal + tax + shipping;

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
              <span className="font-bold tracking-wide">Continue Shopping</span>
            </Link>

            <h1 className="text-5xl font-extrabold text-dark-roast mb-12 tracking-brutal-wider">
              YOUR CART
            </h1>

            {cartItems.length === 0 ? (
              <div className="brutal-card p-20 text-center">
                <ShoppingBag className="w-20 h-20 text-brutal-brown/30 mx-auto mb-6" />
                <h2 className="text-3xl font-extrabold text-dark-roast mb-4">Your cart is empty</h2>
                <p className="text-lg text-brutal-brown mb-8">
                  Add some beers or merchandise to get started!
                </p>
                <div className="flex gap-4 justify-center">
                  <Link
                    href="/beers"
                    className="px-8 py-4 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold transition-all"
                  >
                    SHOP BEERS
                  </Link>
                  <Link
                    href="/merchandise"
                    className="px-8 py-4 bg-dark-roast text-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold transition-all"
                  >
                    SHOP MERCH
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map(item => (
                    <CartItemComponent
                      key={item.id}
                      item={item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemoveItem}
                    />
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="brutal-card p-6 sticky top-32">
                    <h2 className="text-2xl font-extrabold text-dark-roast mb-6 tracking-brutal-wide">
                      ORDER SUMMARY
                    </h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-lg">
                        <span className="text-brutal-brown">Subtotal:</span>
                        <span className="font-bold text-dark-roast">₹{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-lg">
                        <span className="text-brutal-brown">Tax (18% GST):</span>
                        <span className="font-bold text-dark-roast">₹{tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-lg">
                        <span className="text-brutal-brown">Shipping:</span>
                        <span className="font-bold text-dark-roast">
                          {shipping === 0 ? 'FREE' : `₹${shipping}`}
                        </span>
                      </div>
                      {subtotal < 1500 && (
                        <p className="text-sm text-green-600 font-bold">
                          Add ₹{(1500 - subtotal).toFixed(2)} more for free shipping!
                        </p>
                      )}
                      <div className="h-px bg-dark-roast/20"></div>
                      <div className="flex justify-between text-2xl">
                        <span className="font-extrabold text-dark-roast">Total:</span>
                        <span className="font-extrabold text-dark-roast">₹{total.toFixed(2)}</span>
                      </div>
                    </div>

                    <Link
                      href="/checkout"
                      className="block w-full px-6 py-4 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-lg text-center tracking-wide transition-all hover:scale-105"
                    >
                      PROCEED TO CHECKOUT
                    </Link>

                    <div className="mt-6 p-4 bg-green-50 brutal-border border-green-500">
                      <p className="text-sm text-green-700 font-bold text-center">
                        ✓ Secure Checkout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
