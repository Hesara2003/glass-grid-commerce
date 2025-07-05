import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, RefreshCw, Headphones, Star, Quote, Sparkles, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import { categories } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const featuresRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // GSAP ScrollTrigger animations
    const ctx = gsap.context(() => {
      // Features section animation
      gsap.fromTo(
        featuresRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Features cards stagger animation
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 80, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Categories section animation
      gsap.fromTo(
        categoriesRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Category cards stagger animation
      gsap.fromTo(
        ".category-card",
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".categories-grid",
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Testimonials section animation
      gsap.fromTo(
        testimonialsRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Testimonial cards animation
      gsap.fromTo(
        ".testimonial-carousel",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-carousel",
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Newsletter section animation
      gsap.fromTo(
        newsletterRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: newsletterRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Parallax background elements
      gsap.utils.toArray('.parallax-bg').forEach((element: any, index) => {
        gsap.to(element, {
          y: -100 * (index + 1),
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Floating animation for feature icons
      gsap.to(".feature-icon", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });

      // Pulse animation for badges
      gsap.to(".pulse-badge", {
        scale: 1.05,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Free Shipping",
      description: "Free shipping on orders over $50",
      color: "text-green-500"
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Easy Returns",
      description: "30-day hassle-free returns",
      color: "text-blue-500"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Payment",
      description: "Your payment information is safe",
      color: "text-purple-500"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service",
      color: "text-orange-500"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      content: "Amazing quality and style! The clothes fit perfectly and the materials are top-notch. I've been shopping here for over a year and every purchase exceeds my expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Customer",
      content: "Fast shipping and excellent customer service. The return process was seamless when I needed a different size. Highly recommend ClothStore for anyone looking for quality fashion.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Regular Customer",
      content: "Love the sustainable approach and the trendy designs. ClothStore has become my go-to for all fashion needs! The quality is outstanding and the prices are very reasonable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Style Enthusiast",
      content: "The variety of styles and the attention to detail in every piece is remarkable. From casual wear to formal attire, they have everything I need to stay fashionable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    {
      id: 5,
      name: "Jessica Williams",
      role: "Fashion Designer",
      content: "As a fashion designer, I appreciate the craftsmanship and innovative designs. ClothStore consistently delivers pieces that inspire my own work and personal style.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Satisfied Customer",
      content: "Incredible shopping experience from start to finish. The website is user-friendly, the products are exactly as described, and the customer service team is always helpful.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="py-24 relative overflow-hidden opacity-0"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/5 via-transparent to-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 glass-card border-0 backdrop-blur-md pulse-badge">
              <Sparkles className="w-3 h-3 mr-2 animate-pulse text-primary" />
              Why Choose Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Premium Experience
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Discover the benefits that make us the preferred choice for fashion-forward individuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group cursor-pointer feature-card"
              >
                <div className="glass-card backdrop-blur-xl rounded-2xl p-8 shadow-xl border-0 hover:glass transition-all duration-500 hover:-translate-y-3 text-center space-y-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 glass-light rounded-2xl ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300 feature-icon border-0`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section 
        ref={categoriesRef}
        className="py-32 relative overflow-hidden opacity-0"
      >
        {/* Enhanced Glass Background with Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/8 via-secondary/4 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent/6 via-primary/4 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-500" />
          
          {/* Floating Particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-bounce delay-300" />
          <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce delay-700" />
          <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-accent/50 rounded-full animate-bounce delay-1000" />
          <div className="absolute bottom-20 right-1/4 w-2.5 h-2.5 bg-primary/20 rounded-full animate-bounce delay-200" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 glass-card border-0 backdrop-blur-md pulse-badge shadow-lg hover:shadow-xl transition-all duration-500 group">
              <Zap className="w-3 h-3 mr-2 animate-pulse text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                Premium Collections
              </span>
            </Badge>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent leading-tight">
              Shop by Category
            </h2>
            <p className="text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Discover our meticulously curated collections, where style meets sophistication
              <span className="block mt-2 text-lg text-foreground/50">
                Each piece tells a story of craftsmanship and elegance
              </span>
            </p>
          </div>

          {/* Ultra-Modern Bento Grid Layout for Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 mb-16 categories-grid">
            {/* Hero Featured Category - T-Shirts */}
            <Link 
              to="/shop?category=t-shirts"
              className="group sm:col-span-2 lg:col-span-4 lg:row-span-2 category-card"
            >
              <div className="glass-card backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border-0 hover:glass transition-all duration-700 hover:-translate-y-6 hover:rotate-1 hover:scale-[1.02] h-full min-h-[360px] sm:min-h-[400px] lg:min-h-[480px] relative group-hover:shadow-primary/30">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop"
                    alt="T-Shirts"
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/15 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-secondary/15" />
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 glass-light backdrop-blur-lg rounded-2xl flex items-center justify-center border-0 shadow-xl animate-pulse">
                    <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-primary animate-pulse" />
                  </div>
                </div>
                
                <div className="absolute top-16 sm:top-20 left-4 sm:left-6 opacity-30 group-hover:opacity-70 transition-all duration-700 group-hover:translate-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 glass-light backdrop-blur-sm rounded-full flex items-center justify-center border-0">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-secondary to-accent rounded-full animate-bounce" />
                  </div>
                </div>
                
                <div className="absolute bottom-16 sm:bottom-20 right-6 sm:right-8 opacity-40 group-hover:opacity-80 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 glass-light backdrop-blur-sm rounded-xl flex items-center justify-center border-0 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-primary to-secondary rounded-sm animate-pulse" />
                  </div>
                </div>
                
                <div className="relative h-full p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
                  <div className="space-y-6 sm:space-y-8">
                    <div className="inline-block group-hover:scale-105 transition-transform duration-500">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 glass-light backdrop-blur-xl rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-0 shadow-2xl">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                          <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold relative z-10">T</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-primary transition-all duration-300 leading-tight drop-shadow-lg">
                        T-Shirts Collection
                        <span className="block text-base sm:text-lg lg:text-xl font-normal text-white/90 mt-1 sm:mt-2 drop-shadow-md">
                          Premium Comfort Wear
                        </span>
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-lg drop-shadow-md">
                        Discover our premium collection of comfortable & stylish tees crafted with 
                        sustainable materials for every lifestyle and occasion
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="glass-light rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 backdrop-blur-lg border-0 shadow-xl group-hover:scale-105 transition-transform duration-300 bg-black/30">
                      <span className="text-white font-semibold text-sm sm:text-base lg:text-lg drop-shadow-md">
                        {categories.find(cat => cat.id === 't-shirts')?.count || 0} Premium Items
                      </span>
                      <div className="text-xs sm:text-sm text-white/80 mt-1 drop-shadow-sm">Starting from $29</div>
                    </div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 glass-light backdrop-blur-lg rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 border-0 shadow-xl bg-black/30">
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white group-hover:translate-x-1 group-hover:text-primary transition-all duration-300 drop-shadow-md" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Enhanced Vertical Featured Categories */}
            <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6">
              <Link 
                to="/shop?category=dresses"
                className="group block category-card"
              >
                <div className="glass-card backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border-0 hover:glass transition-all duration-500 hover:-translate-y-3 hover:rotate-1 hover:scale-[1.02] h-48 sm:h-56 relative group-hover:shadow-secondary/25">
                  <div className="absolute inset-0">
                    <img
                      src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop"
                      alt="Dresses"
                      className="w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-secondary/30 to-primary/35" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                  </div>
                  
                  {/* Enhanced Floating Elements */}
                  <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <div className="w-8 h-8 glass-light backdrop-blur-sm rounded-lg flex items-center justify-center border-0">
                      <div className="w-3 h-3 bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 opacity-30 group-hover:opacity-60 transition-all duration-700">
                    <div className="w-6 h-6 glass-light backdrop-blur-sm rounded-full flex items-center justify-center border-0">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" />
                    </div>
                  </div>
                  
                  <div className="relative h-full p-5 sm:p-7 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 glass-light backdrop-blur-xl rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 border-0 shadow-xl">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 rounded-xl flex items-center justify-center shadow-inner relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />
                          <span className="text-white text-base sm:text-xl font-bold relative z-10">D</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="glass-light border-0 backdrop-blur-lg text-xs px-2 sm:px-3 py-1 shadow-lg">
                        {categories.find(cat => cat.id === 'dresses')?.count || 0} items
                      </Badge>
                    </div>
                    
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="font-bold text-xl sm:text-2xl text-white mb-1 group-hover:text-secondary transition-colors duration-300 leading-tight drop-shadow-lg">
                        Dresses
                      </h3>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed drop-shadow-md">
                        Elegant & trendy designs for every occasion
                      </p>
                      <div className="text-xs text-white/80 mt-1 sm:mt-2 drop-shadow-sm">From $49</div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link 
                to="/shop?category=jackets"
                className="group block category-card"
              >
                <div className="glass-card backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border-0 hover:glass transition-all duration-500 hover:-translate-y-3 hover:-rotate-1 hover:scale-[1.02] h-48 sm:h-56 relative group-hover:shadow-accent/25">
                  <div className="absolute inset-0">
                    <img
                      src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop"
                      alt="Jackets"
                      className="w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-accent/30 to-primary/35" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                  </div>
                  
                  {/* Enhanced Floating Elements */}
                  <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                    <div className="w-8 h-8 glass-light backdrop-blur-sm rounded-lg flex items-center justify-center border-0">
                      <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 opacity-30 group-hover:opacity-60 transition-all duration-700">
                    <div className="w-6 h-6 glass-light backdrop-blur-sm rounded-full flex items-center justify-center border-0">
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce delay-300" />
                    </div>
                  </div>
                  
                  <div className="relative h-full p-5 sm:p-7 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 glass-light backdrop-blur-xl rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-0 shadow-xl">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-accent via-accent/90 to-accent/80 rounded-xl flex items-center justify-center shadow-inner relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />
                          <span className="text-white text-base sm:text-xl font-bold relative z-10">J</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="glass-light border-0 backdrop-blur-lg text-xs px-2 sm:px-3 py-1 shadow-lg">
                        {categories.find(cat => cat.id === 'jackets')?.count || 0} items
                      </Badge>
                    </div>
                    
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="font-bold text-xl sm:text-2xl text-white mb-1 group-hover:text-accent transition-colors duration-300 leading-tight drop-shadow-lg">
                        Jackets
                      </h3>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed drop-shadow-md">
                        Stylish outerwear for all seasons
                      </p>
                      <div className="text-xs text-white/80 mt-1 sm:mt-2 drop-shadow-sm">From $89</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Ultra-Modern Compact Grid Categories */}
            {categories.filter(cat => !['t-shirts', 'dresses', 'jackets'].includes(cat.id)).map((category, index) => (
              <Link 
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group sm:col-span-1 lg:col-span-1 category-card"
              >
                <div className="glass-card backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border-0 hover:glass transition-all duration-500 hover:-translate-y-4 hover:rotate-2 hover:scale-105 h-full min-h-[180px] sm:min-h-[200px] relative group-hover:shadow-primary/15">
                  {/* Enhanced Dynamic Gradient Background */}
                  <div className="absolute inset-0">
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-35 transition-all duration-500 ${
                      index % 4 === 0 ? 'from-primary/50 via-primary/30 to-secondary/40' :
                      index % 4 === 1 ? 'from-secondary/50 via-secondary/30 to-accent/40' :
                      index % 4 === 2 ? 'from-accent/50 via-accent/30 to-primary/40' :
                      'from-primary/40 via-secondary/35 to-accent/50'
                    }`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                  </div>
                  
                  {/* Multiple Floating Elements */}
                  <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-70 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <div className="w-8 h-8 glass-light backdrop-blur-sm rounded-xl flex items-center justify-center border-0 shadow-lg">
                      <div className={`w-3 h-3 rounded-full animate-pulse ${
                        index % 4 === 0 ? 'bg-gradient-to-r from-primary to-secondary' :
                        index % 4 === 1 ? 'bg-gradient-to-r from-secondary to-accent' :
                        index % 4 === 2 ? 'bg-gradient-to-r from-accent to-primary' :
                        'bg-gradient-to-r from-primary to-accent'
                      }`} />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-50 transition-all duration-700 group-hover:translate-x-1">
                    <div className="w-6 h-6 glass-light backdrop-blur-sm rounded-lg flex items-center justify-center border-0">
                      <div className="w-2 h-2 bg-foreground/30 rounded-full animate-bounce" style={{ animationDelay: `${index * 200}ms` }} />
                    </div>
                  </div>
                  
                  <div className="absolute top-6 left-4 opacity-25 group-hover:opacity-60 transition-all duration-500 group-hover:-translate-y-1">
                    <div className="w-4 h-4 glass-light backdrop-blur-sm rounded-full flex items-center justify-center border-0">
                      <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-pulse" style={{ animationDelay: `${index * 300}ms` }} />
                    </div>
                  </div>
                  
                  <div className="relative h-full p-5 sm:p-7 flex flex-col justify-between text-center">
                    <div className="space-y-4 sm:space-y-5">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 glass-light backdrop-blur-xl rounded-3xl mx-auto flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 border-0 shadow-xl">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br shadow-inner relative overflow-hidden ${
                          index % 4 === 0 ? 'from-primary via-primary/90 to-primary/80' :
                          index % 4 === 1 ? 'from-secondary via-secondary/90 to-secondary/80' :
                          index % 4 === 2 ? 'from-accent via-accent/90 to-accent/80' :
                          'from-primary via-secondary/90 to-accent'
                        }`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-2xl" />
                          <span className="text-white text-lg sm:text-xl font-bold relative z-10">
                            {category.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-1 sm:space-y-2">
                        <h3 className="font-bold text-lg sm:text-xl text-white mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 leading-tight drop-shadow-lg">
                          {category.name}
                        </h3>
                        <p className="text-xs text-white/90 leading-relaxed drop-shadow-md">
                          Premium Quality
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-auto space-y-2 sm:space-y-3">
                      <Badge variant="outline" className="glass-light border-0 backdrop-blur-lg text-xs px-3 sm:px-4 py-1 sm:py-2 shadow-lg group-hover:scale-105 transition-transform duration-300 bg-black/40 text-white/90">
                        {category.count} items
                      </Badge>
                      <div className="text-xs text-white/80 drop-shadow-sm">From $25</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Enhanced Call-to-Action Section */}
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground/90">
                Discover More Collections
              </h3>
              <p className="text-sm sm:text-base text-foreground/60 leading-relaxed px-4 sm:px-0">
                Explore our complete range of premium fashion categories
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
              <Link to="/shop">
                <Button size="lg" className="w-full sm:w-auto group glass-hover shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 border-0 rounded-2xl px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-secondary opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10 flex items-center justify-center">
                    View All Categories
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                  </span>
                </Button>
              </Link>
              
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/50">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
                <span>Free shipping on orders over $100</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <BentoGrid />

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="py-24 relative overflow-hidden opacity-0"
      >
        {/* Glass Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 glass-card border-0 backdrop-blur-md pulse-badge">
              <Star className="w-3 h-3 mr-2 fill-current text-yellow-500" />
              Customer Reviews
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Don't just take our word for it. Here's what our satisfied customers 
              have to say about their shopping experience.
            </p>
          </div>

          <div className="testimonial-carousel max-w-7xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="glass-card border-0 backdrop-blur-xl shadow-xl hover:glass transition-all duration-500 hover:-translate-y-2 group cursor-pointer h-full">
                      <CardContent className="p-8 h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-6">
                          <Quote className="w-8 h-8 text-primary/40 flex-shrink-0" />
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-foreground/80 mb-8 leading-relaxed text-lg flex-1">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="relative">
                            <Avatar className="w-16 h-16 ring-2 ring-primary/20 ring-offset-2 ring-offset-background shadow-lg">
                              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                              <AvatarFallback className="glass-light border-0 text-foreground text-lg font-semibold">
                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            {testimonial.verified && (
                              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full border-2 border-background flex items-center justify-center shadow-lg">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg text-foreground mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-foreground/70 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="relative translate-x-0 translate-y-0 glass-card border-0 backdrop-blur-xl hover:glass shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <span className="sr-only">Previous testimonial</span>
                </CarouselPrevious>
                <CarouselNext className="relative translate-x-0 translate-y-0 glass-card border-0 backdrop-blur-xl hover:glass shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <span className="sr-only">Next testimonial</span>
                </CarouselNext>
              </div>
            </Carousel>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-light border-0 rounded-full backdrop-blur-sm mb-6">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-foreground/80 font-medium">
                Join 10,000+ happy customers
              </span>
            </div>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Ready to experience the quality and style that our customers rave about? 
              Start your fashion journey with us today.
            </p>
            <Link to="/shop">
              <Button size="lg" className="group glass-hover shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 rounded-2xl px-8 py-6">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section 
        ref={newsletterRef}
        className="py-24 relative overflow-hidden opacity-0"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="glass-card backdrop-blur-xl rounded-3xl p-16 shadow-2xl border-0 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 rounded-3xl" />
            
            <div className="relative">
              <Badge variant="secondary" className="mb-6 glass-light border-0 backdrop-blur-sm pulse-badge">
                <Sparkles className="w-3 h-3 mr-2 animate-pulse text-primary" />
                Newsletter
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Stay in the Loop
              </h2>
              <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about new arrivals, 
                exclusive offers, and fashion tips from our style experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-2xl border-0 glass-light backdrop-blur-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                />
                <Button className="glass-hover shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 rounded-2xl px-8 py-4">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-sm text-foreground/60 mt-6">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
