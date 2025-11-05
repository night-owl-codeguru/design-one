'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Truck, Check } from 'lucide-react';
import { useState } from 'react';
import { ShippingDetails } from '@/types';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('card');

  // Mock cart data
  const cartTotal = 1499;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, process payment here
    window.location.href = '/order-confirmation';
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-soft-wheat">
        <section className="pt-32 pb-12">
          <div className="container mx-auto px-6 max-w-5xl">
            <Link
              href="/cart"
              className="inline-flex items-center gap-2 px-6 py-3 brutal-card hover:shadow-brutal-lg transition-all group mb-8"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              <span className="font-bold tracking-wide">Back to Cart</span>
            </Link>

            <h1 className="text-5xl font-extrabold text-dark-roast mb-12 tracking-brutal-wider">
              CHECKOUT
            </h1>

            {/* Progress Steps */}
            <div className="flex justify-center gap-4 mb-12">
              <div className={`flex items-center gap-2 px-6 py-3 brutal-border ${step >= 1 ? 'bg-golden-pour' : 'bg-soft-wheat'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-dark-roast text-golden-pour' : 'bg-brutal-brown text-white'}`}>
                  {step > 1 ? <Check className="w-5 h-5" /> : '1'}
                </div>
                <span className="font-bold">Shipping</span>
              </div>
              <div className={`flex items-center gap-2 px-6 py-3 brutal-border ${step >= 2 ? 'bg-golden-pour' : 'bg-soft-wheat'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-dark-roast text-golden-pour' : 'bg-brutal-brown text-white'}`}>
                  2
                </div>
                <span className="font-bold">Payment</span>
              </div>
            </div>

            {/* Step 1: Shipping Information */}
            {step === 1 && (
              <div className="brutal-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Truck className="w-8 h-8 text-dark-roast" />
                  <h2 className="text-3xl font-extrabold text-dark-roast">SHIPPING DETAILS</h2>
                </div>

                <form onSubmit={handleSubmitShipping}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-dark-roast mb-2">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={shippingDetails.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 brutal-border bg-soft-wheat font-medium"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-dark-roast mb-2">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={shippingDetails.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 brutal-border bg-soft-wheat font-medium"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-dark-roast mb-2">
                        PHONE *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={shippingDetails.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 brutal-border bg-soft-wheat font-medium"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-dark-roast mb-2">
                        ADDRESS *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={shippingDetails.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 brutal-border bg-soft-wheat font-medium"
                        placeholder="Street address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-dark-roast mb-2">
                        CITY *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={shippingDetails.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 brutal-border bg-soft-wheat font-medium"
                        placeholder="Mumbai"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-dark-roast mb-2">
                        STATE *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={shippingDetails.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 brutal-border bg-soft-wheat font-medium"
                        placeholder="Maharashtra"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-dark-roast mb-2">
                        PINCODE *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={shippingDetails.pincode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 brutal-border bg-soft-wheat font-medium"
                        placeholder="400001"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-8 w-full px-8 py-4 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-lg transition-all hover:scale-105"
                  >
                    CONTINUE TO PAYMENT
                  </button>
                </form>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="brutal-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-8 h-8 text-dark-roast" />
                  <h2 className="text-3xl font-extrabold text-dark-roast">PAYMENT METHOD</h2>
                </div>

                <form onSubmit={handleSubmitPayment}>
                  {/* Payment Method Selection */}
                  <div className="space-y-4 mb-8">
                    <label className="flex items-center gap-4 p-4 brutal-border cursor-pointer hover:bg-golden-pour/20 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5"
                      />
                      <div>
                        <p className="font-bold text-dark-roast">Credit / Debit Card</p>
                        <p className="text-sm text-brutal-brown">Visa, Mastercard, RuPay</p>
                      </div>
                    </label>

                    <label className="flex items-center gap-4 p-4 brutal-border cursor-pointer hover:bg-golden-pour/20 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="upi"
                        checked={paymentMethod === 'upi'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5"
                      />
                      <div>
                        <p className="font-bold text-dark-roast">UPI</p>
                        <p className="text-sm text-brutal-brown">Google Pay, PhonePe, Paytm</p>
                      </div>
                    </label>

                    <label className="flex items-center gap-4 p-4 brutal-border cursor-pointer hover:bg-golden-pour/20 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5"
                      />
                      <div>
                        <p className="font-bold text-dark-roast">Cash on Delivery</p>
                        <p className="text-sm text-brutal-brown">Pay when you receive</p>
                      </div>
                    </label>
                  </div>

                  {/* Order Summary */}
                  <div className="p-6 bg-dark-roast/5 brutal-border mb-8">
                    <h3 className="text-xl font-extrabold text-dark-roast mb-4">ORDER SUMMARY</h3>
                    <div className="space-y-2 text-lg">
                      <div className="flex justify-between">
                        <span className="text-brutal-brown">Total Amount:</span>
                        <span className="font-bold text-dark-roast">₹{cartTotal}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 px-8 py-4 bg-soft-wheat brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-lg transition-all"
                    >
                      BACK
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-8 py-4 bg-golden-pour brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-lg transition-all hover:scale-105"
                    >
                      PLACE ORDER
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
