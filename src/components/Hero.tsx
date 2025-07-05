
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { animateHero, animateGrainTexture } from '@/lib/gsap';

const Hero = () => {
  useEffect(() => {
    animateHero();
    animateGrainTexture();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.5) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Animated Glass Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/20 shadow-lg">
            <span className="text-sm font-medium text-gray-700">✨ New Collection Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="hero-title block bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Premium Products
            </span>
            <span className="hero-title block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Glass Design
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
            Discover our curated collection of premium products with modern glass design aesthetics. Experience the future of shopping.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              to="/shop"
              className="magnetic-btn group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <button className="magnetic-btn px-8 py-4 bg-white/40 backdrop-blur-md border border-white/20 text-gray-700 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:bg-white/60 transition-all duration-300 transform hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats pt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">1000+</div>
              <div className="text-sm text-gray-600 mt-1">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">50k+</div>
              <div className="text-sm text-gray-600 mt-1">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4.9</div>
              <div className="text-sm text-gray-600 mt-1">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Grain Texture */}
      <div 
        className="grain-texture absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
