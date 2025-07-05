
import React from 'react';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Hero />
      <BentoGrid />
      
      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked products that define modern elegance
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-12 shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Stay in the Loop
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Be the first to know about new products, exclusive offers, and design inspiration.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/60 border border-white/20 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
