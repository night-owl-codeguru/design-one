'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { merchandiseData } from '@/data/merchandise';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Check, Info } from 'lucide-react';
import { useState } from 'react';

export async function generateStaticParams() {
  return merchandiseData.map((product) => ({
    id: product.id,
  }));
}

export default function MerchandiseDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = merchandiseData.find(p => p.id === productId);

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[2] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-soft-wheat pt-32">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-dark-roast mb-4">Product Not Found</h1>
              <Link href="/merchandise" className="text-golden-pour hover:underline">
                Back to Merchandise Store
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    alert('Item added to cart! (This is a demo)');
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-soft-wheat">
        <section className="pt-32 pb-12">
          <div className="container mx-auto px-6">
            <Link
              href="/merchandise"
              className="inline-flex items-center gap-2 px-6 py-3 brutal-card hover:shadow-brutal-lg transition-all group mb-8"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              <span className="font-bold tracking-wide">Back to Store</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div>
                <div className="brutal-card p-12 bg-gradient-to-br from-brutal-brown to-golden-pour flex items-center justify-center mb-4 h-96">
                  <div className="text-9xl opacity-30">🍺</div>
                </div>
                {/* Thumbnail Gallery - Placeholder */}
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="brutal-card aspect-square bg-gradient-to-br from-brutal-brown/30 to-golden-pour/30 cursor-pointer hover:scale-105 transition-all"></div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div>
                <div className="mb-4">
                  <span className="px-4 py-2 bg-burnt-copper text-soft-wheat font-bold text-sm tracking-wider">
                    {product.category.toUpperCase()}
                  </span>
                </div>

                <h1 className="text-4xl font-extrabold text-dark-roast mb-4 tracking-brutal-wide">
                  {product.name}
                </h1>

                <div className="mb-6">
                  <p className="text-3xl font-extrabold text-dark-roast">₹{product.price}</p>
                  {!product.inStock && (
                    <p className="text-red-500 font-bold mt-2">OUT OF STOCK</p>
                  )}
                </div>

                <div className="brutal-card p-6 mb-6">
                  <h2 className="text-lg font-extrabold text-dark-roast mb-3">ABOUT THIS PRODUCT</h2>
                  <p className="text-base text-brutal-brown leading-relaxed">{product.description}</p>
                </div>

                {/* Size Selection */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-dark-roast mb-3">SELECT SIZE</h3>
                    <div className="flex gap-3">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-6 py-3 brutal-border font-bold transition-all ${
                            selectedSize === size
                              ? 'bg-golden-pour text-dark-roast shadow-brutal'
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
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-dark-roast mb-3">SELECT COLOR</h3>
                    <div className="flex gap-3">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-6 py-3 brutal-border font-bold transition-all ${
                            selectedColor === color
                              ? 'bg-dark-roast text-golden-pour shadow-brutal'
                              : 'bg-soft-wheat hover:bg-dark-roast hover:text-golden-pour'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity Selector */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-dark-roast mb-3">QUANTITY</h3>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 brutal-border bg-soft-wheat hover:bg-golden-pour font-bold text-xl"
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold text-dark-roast w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 brutal-border bg-soft-wheat hover:bg-golden-pour font-bold text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`w-full px-8 py-4 brutal-border shadow-brutal hover:shadow-brutal-lg font-bold text-lg transition-all flex items-center justify-center gap-3 mb-6 ${
                    product.inStock
                      ? 'bg-golden-pour hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-6 h-6" />
                  {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
                </button>

                {/* Info Cards */}
                <div className="space-y-3">
                  <div className="brutal-card p-4 bg-green-50 border-green-500">
                    <div className="flex items-center gap-2 text-green-700">
                      <Check className="w-5 h-5" />
                      <span className="font-bold">Free delivery on orders above ₹1500</span>
                    </div>
                  </div>
                  <div className="brutal-card p-4 bg-blue-50 border-blue-500">
                    <div className="flex items-center gap-2 text-blue-700">
                      <Info className="w-5 h-5" />
                      <span className="font-bold">100% authentic TJ's merchandise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="mt-20">
              <h2 className="text-4xl font-extrabold text-dark-roast mb-8 tracking-brutal-wide">
                YOU MIGHT ALSO LIKE
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {merchandiseData.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4).map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/merchandise/${relatedProduct.id}`}>
                    <div className="brutal-card overflow-hidden hover:scale-105 transition-all">
                      <div className="h-48 bg-gradient-to-br from-brutal-brown to-golden-pour flex items-center justify-center">
                        <span className="text-6xl opacity-20">🍺</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-extrabold text-dark-roast mb-2 line-clamp-1">{relatedProduct.name}</h3>
                        <p className="text-xl font-bold text-dark-roast">₹{relatedProduct.price}</p>
                      </div>
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
