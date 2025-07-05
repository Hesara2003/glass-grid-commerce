
import React, { useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { animateHero, animateGrainTexture } from '@/lib/gsap';

const Hero = () => {
  useEffect(() => {
    animateHero();
    animateGrainTexture();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture">
      {/* Refined background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30" />
      
      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, rgba(0,0,0,0.3) 2px, transparent 0),
              radial-gradient(circle at 75px 75px, rgba(0,0,0,0.15) 1px, transparent 0)
            `,
            backgroundSize: '100px 100px, 50px 50px'
          }}
        />
      </div>

      {/* Floating glass orbs with refined positioning */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: '2s', animationDuration: '6s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-indigo-400/10 rounded-full blur-2xl animate-pulse"
           style={{ animationDelay: '1s', animationDuration: '5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-12">
          {/* Premium badge with enhanced glass effect */}
          <div className="hero-badge inline-flex items-center gap-2 px-6 py-3 glass-card shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Premium Collection 2024</span>
          </div>

          {/* Enhanced typography hierarchy */}
          <div className="space-y-6">
            <h1 className="text-display">
              <span className="hero-title block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-2">
                Crafted for
              </span>
              <span className="hero-title block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Modern Living
              </span>
            </h1>

            <p className="hero-subtitle text-body max-w-2xl mx-auto text-slate-600 text-lg md:text-xl leading-relaxed">
              Discover our meticulously curated collection of premium products, 
              designed with precision and crafted for the discerning individual.
            </p>
          </div>

          {/* Refined CTA section */}
          <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              to="/shop"
              className="magnetic-btn group btn-primary hover-glow"
            >
              <span className="flex items-center gap-3">
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            
            <button className="magnetic-btn btn-glass hover-glow">
              <span>Watch Lookbook</span>
            </button>
          </div>

          {/* Enhanced stats with refined spacing */}
          <div className="hero-stats pt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: '2,000+', label: 'Curated Products' },
              { number: '100k+', label: 'Satisfied Customers' },
              { number: '4.9', label: 'Customer Rating' }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-caption">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="glass-subtle w-8 h-12 rounded-full flex justify-center items-start pt-3">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
