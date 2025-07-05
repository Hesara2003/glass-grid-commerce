import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Sparkles, Zap, Heart, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftContentRef.current) observer.observe(leftContentRef.current);
    if (rightContentRef.current) observer.observe(rightContentRef.current);

    // Smooth parallax on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30 min-h-screen"
    >
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(120,119,198,0.05)_25%,rgba(120,119,198,0.05)_50%,transparent_50%,transparent_75%,rgba(120,119,198,0.05)_75%)] bg-[size:20px_20px] opacity-30" />
        
        {/* Modern Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse parallax-element opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full animate-bounce parallax-element opacity-50" />
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full animate-ping parallax-element opacity-40" />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full animate-pulse parallax-element opacity-70" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full animate-bounce parallax-element opacity-60" style={{ animationDelay: '2s' }} />
        
        {/* Modern Gradient Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse opacity-70" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse opacity-60" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div 
            ref={leftContentRef}
            className="space-y-6 sm:space-y-8 lg:space-y-10 opacity-0 translate-y-8 transition-all duration-1000 ease-out order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="flex justify-center lg:justify-start">
                <Badge variant="secondary" className="w-fit bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 group">
                  <Star className="w-3 h-3 mr-2 fill-current animate-pulse text-yellow-500" />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium text-sm sm:text-base">
                    Enshift Digital Demo
                  </span>
                  <TrendingUp className="w-3 h-3 ml-2 text-emerald-500 group-hover:rotate-12 transition-transform duration-300" />
                </Badge>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                Modern E-Commerce 
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-300% animate-gradient-x mt-2">
                  Solutions
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Experience the power of modern web development with this fully-featured 
                e-commerce demo. Built with React, TypeScript, and cutting-edge design 
                principles to showcase what Enshift Digital can create for your business.
              </p>
            </div>

            {/* Enhanced Stats with Modern Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 lg:gap-6 max-w-lg mx-auto lg:max-w-none lg:mx-0">
              <div className="group cursor-pointer">
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-4 lg:p-6 shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/95 dark:hover:bg-slate-800/95">
                  <div className="text-center">
                    <div className="text-3xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">10K+</div>
                    <div className="text-sm sm:text-xs lg:text-sm text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-medium mt-1">Happy Customers</div>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-4 lg:p-6 shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/95 dark:hover:bg-slate-800/95">
                  <div className="text-center">
                    <div className="text-3xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">500+</div>
                    <div className="text-sm sm:text-xs lg:text-sm text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors font-medium mt-1">Products</div>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-4 lg:p-6 shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/95 dark:hover:bg-slate-800/95">
                  <div className="text-center">
                    <div className="text-3xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 flex items-center justify-center gap-2">
                      4.9 <Heart className="w-5 h-5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-red-500 fill-current animate-pulse" />
                    </div>
                    <div className="text-sm sm:text-xs lg:text-sm text-slate-600 dark:text-slate-300 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors font-medium mt-1">Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
              <Link to="/shop" className="w-full sm:flex-1">
                <Button size="lg" className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-white border-0 rounded-2xl px-8 py-6 text-base font-semibold">
                  <ShoppingBag className="w-5 h-5 mr-3" />
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
              
              <Link to="/about" className="w-full sm:flex-1">
                <Button variant="outline" size="lg" className="w-full border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-500 hover:scale-105 rounded-2xl px-8 py-6 backdrop-blur-sm text-base font-semibold">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Modern Trust Indicators */}
            <div className="flex flex-col items-center lg:items-start gap-4 pt-4 sm:pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group p-3 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-800/50 backdrop-blur-sm">
                  <div className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full group-hover:scale-150 transition-transform duration-300 shadow-lg" />
                  <span className="font-medium">Free Shipping</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group p-3 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-800/50 backdrop-blur-sm">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-300 shadow-lg" />
                  <span className="font-medium">Easy Returns</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group p-3 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-800/50 backdrop-blur-sm">
                  <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full group-hover:scale-150 transition-transform duration-300 shadow-lg" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Modern Hero Image */}
          <div 
            ref={rightContentRef}
            className="relative opacity-0 translate-y-8 transition-all duration-1000 ease-out order-1 lg:order-2 mb-8 lg:mb-0"
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="relative z-10 max-w-md mx-auto lg:max-w-none">
              {/* Main Hero Image with Modern Frame */}
              <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl group bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 p-2 sm:p-3">
                <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop"
                    alt="Fashion Collection"
                    className="w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Modern Overlay */}
                <div className="absolute inset-2 sm:inset-3 bg-gradient-to-t from-black/60 via-transparent to-blue-500/10 opacity-40 rounded-[1.5rem] sm:rounded-[2rem]"></div>
                
                {/* Modern Floating Cards */}
                <div className="absolute top-6 sm:top-8 left-6 sm:left-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 dark:border-slate-700/20 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-3 hover:bg-white dark:hover:bg-slate-800 group/card max-w-[200px] sm:max-w-none">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                      <ShoppingBag className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm sm:text-base truncate">Premium Quality</div>
                      <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 truncate">Sustainable Materials</div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-slate-700/20 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-3 hover:bg-white dark:hover:bg-slate-800 group/card">
                  <div className="text-center relative">
                    <div className="font-bold text-4xl sm:text-6xl bg-gradient-to-br from-orange-500 to-pink-500 bg-clip-text text-transparent">25%</div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium tracking-wider uppercase mt-2">OFF First Order</div>
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-3 sm:mt-4"></div>
                  </div>
                </div>
                
                {/* Modern promotion badge */}
                <div className="absolute top-6 sm:top-8 right-6 sm:right-8 rotate-12 group/tag">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold uppercase tracking-wider shadow-xl animate-pulse group-hover/tag:animate-bounce transition-all duration-300">
                    New Season
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Background Decorations */}
            <div className="absolute -top-8 sm:-top-12 -right-8 sm:-right-12 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse parallax-element"></div>
            <div className="absolute -bottom-12 sm:-bottom-16 -left-12 sm:-left-16 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-pink-400/30 to-orange-600/30 rounded-full blur-3xl animate-pulse parallax-element" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 -right-12 sm:-right-16 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-emerald-400/30 to-teal-600/30 rounded-full blur-3xl animate-pulse parallax-element" style={{ animationDelay: '4s' }}></div>
            
            {/* Modern Floating Product Images - Hidden on mobile for better performance */}
            <div className="absolute -left-16 sm:-left-20 top-1/2 transform -translate-y-1/2 hidden md:block parallax-element group/float" style={{ animationDelay: '0.5s' }}>
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/90 dark:border-slate-700/90 rotate-[-8deg] group-hover/float:rotate-0 transition-all duration-500 hover:scale-110 bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=200&h=200&fit=crop"
                    alt="Product"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute -right-8 sm:-right-12 top-1/4 hidden md:block parallax-element group/float" style={{ animationDelay: '1s' }}>
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden shadow-2xl border-4 border-white/90 dark:border-slate-700/90 rotate-[8deg] group-hover/float:rotate-0 transition-all duration-500 hover:scale-110 bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 p-1">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop"
                    alt="Product"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/4 hidden md:block parallax-element group/float" style={{ animationDelay: '1.5s' }}>
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-2xl border-4 border-white/90 dark:border-slate-700/90 hover:scale-125 transition-all duration-500 bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=200&fit=crop"
                    alt="Product"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 8s ease infinite;
        }
        
        .bg-300\% {
          background-size: 300% 300%;
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .glass-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        
        @media (prefers-reduced-motion: reduce) {
          .parallax-element {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
