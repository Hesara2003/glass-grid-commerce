import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Leaf, Heart, Target, Globe, Sparkles, Star, Quote, MapPin, Shield, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Refs for animations
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const sustainabilityRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced hero section animations with smooth easing
      const tl = gsap.timeline();
      
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      )
      .fromTo(
        ".hero-title",
        { opacity: 0, y: 100, rotationX: 15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .fromTo(
        ".hero-buttons > *",
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
          stagger: 0.1,
        },
        "-=0.4"
      )
      .fromTo(
        ".hero-quick-stats > *",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.2"
      );

      // Enhanced image animations with 3D effects
      gsap.fromTo(
        ".hero-image-1",
        { opacity: 0, scale: 0.8, y: 100, rotationY: -15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationY: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
        }
      );

      gsap.fromTo(
        ".hero-image-2",
        { opacity: 0, scale: 0.8, y: 80, rotationY: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationY: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.8,
        }
      );

      gsap.fromTo(
        ".hero-card",
        { opacity: 0, scale: 0.8, y: 50, rotationX: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "back.out(1.2)",
          stagger: 0.2,
          delay: 1.2,
        }
      );

      // Enhanced stats counter animation with spring effect
      gsap.fromTo(
        ".stat-number",
        { textContent: 0, scale: 0.8 },
        {
          textContent: (i, el) => el.getAttribute('data-number'),
          scale: 1,
          duration: 2.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Enhanced values cards with 3D hover effects
      gsap.fromTo(
        ".value-card",
        { opacity: 0, y: 100, scale: 0.8, rotationX: 15 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Enhanced team cards with magnetic hover effect
      gsap.fromTo(
        ".team-card",
        { opacity: 0, y: 80, scale: 0.9, rotationY: 20 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Enhanced sustainability section with parallax
      gsap.fromTo(
        ".sustainability-content > *",
        { opacity: 0, x: -100, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sustainabilityRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".sustainability-image",
        { opacity: 0, x: 100, scale: 0.9, rotationY: -10 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sustainabilityRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Enhanced CTA section with bounce effect
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Enhanced floating animations with more natural movement
      gsap.to(".float-1", {
        y: -30,
        rotation: 8,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".float-2", {
        y: -20,
        rotation: -5,
        duration: 5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });

      // Enhanced pulse animations with scale variation
      gsap.to(".pulse-badge", {
        scale: 1.05,
        duration: 2.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.4,
      });

      // New: Magnetic hover effects for cards
      document.querySelectorAll('.magnetic-card').forEach((card) => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(card, {
            x: x * 0.1,
            y: y * 0.1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
      });

      // New: Parallax background elements
      gsap.to(".bg-float-1", {
        y: -50,
        rotation: 10,
        duration: 8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".bg-float-2", {
        y: -30,
        rotation: -8,
        duration: 6,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);
  const values = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainability",
      description: "We're committed to eco-friendly practices and sustainable fashion that doesn't compromise on style.",
      color: "text-green-500",
      gradient: "from-green-500/10 to-emerald-500/10",
      bgGradient: "from-green-500/5 via-emerald-500/5 to-green-600/5"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality",
      description: "Every piece is carefully crafted using premium materials and undergoes rigorous quality control.",
      color: "text-yellow-500",
      gradient: "from-yellow-500/10 to-amber-500/10",
      bgGradient: "from-yellow-500/5 via-amber-500/5 to-yellow-600/5"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community",
      description: "We believe in building a community of fashion-forward individuals who value authenticity.",
      color: "text-pink-500",
      gradient: "from-pink-500/10 to-rose-500/10",
      bgGradient: "from-pink-500/5 via-rose-500/5 to-pink-600/5"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Accessibility",
      description: "Fashion should be accessible to everyone, regardless of size, style preference, or budget.",
      color: "text-blue-500",
      gradient: "from-blue-500/10 to-cyan-500/10",
      bgGradient: "from-blue-500/5 via-cyan-500/5 to-blue-600/5"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=300&h=300&fit=crop&crop=face",
      description: "Fashion industry veteran with 15+ years of experience in sustainable design.",
      quote: "Fashion should be a force for good in the world.",
      social: "@sarahjohnson"
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Award-winning designer passionate about creating timeless, versatile pieces.",
      quote: "Great design is invisible until you need it.",
      social: "@michaelchen"
    },
    {
      name: "Emily Rodriguez",
      role: "Sustainability Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Environmental scientist dedicated to reducing fashion's environmental impact.",
      quote: "Every small step towards sustainability matters.",
      social: "@emilyrodriguez"
    }
  ];

  const stats = [
    { number: "10000", display: "10K+", label: "Happy Customers" },
    { number: "500", display: "500+", label: "Products" },
    { number: "50", display: "50+", label: "Countries Served" },
    { number: "4.9", display: "4.9", label: "Average Rating" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen" style={{ scrollBehavior: 'smooth' }}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-16 sm:py-20 md:py-24 lg:py-40 overflow-hidden">
        {/* Enhanced Animated Background with mesh gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/8 via-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse bg-float-1" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/8 via-pink-500/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000 bg-float-2" />
          <div className="absolute top-1/3 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl animate-pulse delay-500" />
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-gradient-to-r from-blue-500/4 to-cyan-500/4 rounded-full blur-xl animate-pulse delay-2000" />
          
          {/* Floating geometric shapes */}
          <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-3 h-3 sm:w-4 sm:h-4 bg-primary/20 rounded-full animate-bounce delay-1000" />
          <div className="absolute top-20 right-6 sm:top-40 sm:right-32 w-2 h-2 sm:w-3 sm:h-3 bg-secondary/30 rounded-full animate-bounce delay-2000" />
          <div className="absolute bottom-16 left-1/3 sm:bottom-32 w-2 h-2 bg-accent/25 rounded-full animate-bounce delay-3000" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div className="space-y-10">
              <div className="hero-badge">
                <Badge variant="secondary" className="mb-8 glass-card border-0 backdrop-blur-md pulse-badge hover:scale-105 transition-transform duration-300 text-sm px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  Our Story
                </Badge>
              </div>
              
              <div className="hero-title">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight">
                  Fashion That Makes a 
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-primary/70 bg-clip-text text-transparent block mt-1 sm:mt-2">
                    Difference
                  </span>
                </h1>
              </div>
              
              <div className="hero-subtitle">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-xl">
                  Founded in 2020, ClothStore began with a simple mission: to make sustainable, 
                  high-quality fashion accessible to everyone. We believe that what you wear 
                  should reflect not just your style, but your values too.
                </p>
              </div>
              
              <div className="hero-buttons flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link to="/shop" className="w-full sm:w-auto">
                  <Button size="lg" className="group glass-hover h-12 sm:h-14 lg:h-16 px-6 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 border-0 w-full">
                    <span className="flex items-center justify-center">
                      Shop Our Collection
                      <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 sm:ml-3 transition-transform group-hover:translate-x-2" />
                    </span>
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="glass-light hover:glass h-12 sm:h-14 lg:h-16 px-6 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg rounded-2xl sm:rounded-3xl border-2 border-foreground/20 hover:border-primary/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-md w-full">
                    Get in Touch
                  </Button>
                </Link>
              </div>

              {/* Enhanced Quick Stats with better visual hierarchy */}
              <div className="hero-quick-stats grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 lg:pt-10 border-t border-foreground/10">
                <div className="text-center group cursor-default">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-xs sm:text-sm text-foreground/60 mt-1">Years Experience</div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-xs sm:text-sm text-foreground/60 mt-1">Satisfaction</div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-xs sm:text-sm text-foreground/60 mt-1">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-6 sm:space-y-8">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                    <img
                      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop"
                      alt="Fashion"
                      className="hero-image-1 float-1 rounded-2xl sm:rounded-3xl shadow-2xl w-full object-cover h-60 sm:h-80 hover:shadow-3xl transition-shadow duration-500 relative"
                    />
                  </div>
                  <Card className="hero-card glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 magnetic-card group">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                        <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20">
                          <Star className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 fill-yellow-400 text-yellow-400 animate-pulse" />
                        </div>
                        <span className="font-bold text-base sm:text-lg text-foreground">4.9/5 Rating</span>
                      </div>
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">Loved by customers worldwide with exceptional service and quality</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-0 sm:mt-16">
                  <div className="relative group mb-6 sm:mb-8">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl sm:rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                    <img
                      src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop"
                      alt="Sustainable Fashion"
                      className="hero-image-2 float-2 rounded-2xl sm:rounded-3xl shadow-2xl w-full object-cover h-48 sm:h-64 hover:shadow-3xl transition-shadow duration-500 relative"
                    />
                  </div>
                  <Card className="hero-card glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 magnetic-card group">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                        <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                          <Leaf className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-green-500 animate-pulse" />
                        </div>
                        <span className="font-bold text-base sm:text-lg text-foreground">Eco-Friendly</span>
                      </div>
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">100% sustainable materials and ethical manufacturing practices</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Floating elements around images */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-2 sm:-left-4 w-4 sm:w-6 h-4 sm:h-6 bg-secondary/25 rounded-full animate-bounce delay-2000"></div>
              <div className="absolute -bottom-2 left-1/3 sm:-bottom-4 w-3 sm:w-4 h-3 sm:h-4 bg-accent/30 rounded-full animate-pulse delay-3000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute top-1/4 left-1/3 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-pink-500/6 to-orange-500/6 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Badge variant="secondary" className="mb-6 sm:mb-8 glass-card border-0 backdrop-blur-md pulse-badge text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
              <Target className="w-3 sm:w-4 h-3 sm:h-4 mr-1.5 sm:mr-2" />
              Our Impact
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent">
              Numbers That Matter
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed px-4">
              These numbers represent more than just statistics—they represent the trust and community we've built together.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <Card className="glass-card border-0 backdrop-blur-xl shadow-2xl hover:glass transition-all duration-500 hover:-translate-y-4 p-4 sm:p-6 lg:p-10 rounded-2xl sm:rounded-3xl relative overflow-hidden">
                  {/* Gradient background for each card */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-blue-500/5 to-cyan-500/5' : index === 1 ? 'from-green-500/5 to-emerald-500/5' : index === 2 ? 'from-purple-500/5 to-pink-500/5' : 'from-orange-500/5 to-yellow-500/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <CardContent className="p-0 relative z-10">
                    <div 
                      className={`stat-number text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4 ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : index === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-500' : index === 2 ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-orange-500 to-yellow-500'} bg-clip-text text-transparent`}
                      data-number={stat.display}
                    >
                      0
                    </div>
                    <div className="text-foreground/70 font-semibold text-xs sm:text-sm lg:text-lg">{stat.label}</div>
                    <div className={`w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 rounded-full mx-auto mt-3 sm:mt-4 lg:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : index === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-500' : index === 2 ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-orange-500 to-yellow-500'}`} />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={valuesRef} className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/3 via-transparent to-blue-500/3" />
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-gradient-to-br from-accent/8 via-transparent to-primary/8 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl animate-pulse delay-2000" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 lg:mb-24">
            <Badge variant="secondary" className="mb-6 sm:mb-8 glass-card border-0 backdrop-blur-md pulse-badge text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 mr-1.5 sm:mr-2 animate-pulse" />
              Our Mission
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
              Revolutionizing Fashion
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-4xl mx-auto px-4">
              We're on a mission to revolutionize the fashion industry by proving that 
              style, sustainability, and affordability can coexist. Every piece in our 
              collection is thoughtfully designed with both you and the planet in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="value-card glass-card border-0 backdrop-blur-xl shadow-2xl hover:glass transition-all duration-500 hover:-translate-y-4 group magnetic-card relative overflow-hidden rounded-2xl sm:rounded-3xl">
                {/* Enhanced animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-6 sm:p-8 lg:p-10 text-center h-full flex flex-col relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 bg-gradient-to-r ${value.gradient} group-hover:scale-110 transition-all duration-500 group-hover:rotate-6 shadow-xl`}>
                    <div className={`${value.color} group-hover:scale-110 transition-transform duration-300`}>
                      {React.cloneElement(value.icon, { className: "w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8" })}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-foreground group-hover:text-foreground transition-colors duration-300">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed flex-1 group-hover:text-foreground/80 transition-colors duration-300 text-sm sm:text-base">
                    {value.description}
                  </p>
                  <Separator className="my-4 sm:my-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center justify-center gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full ${value.color.replace('text-', 'bg-')} animate-pulse`} />
                    <span className="text-xs sm:text-sm text-foreground/60 font-medium">Discover More</span>
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 text-foreground/60 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-transparent to-pink-500/3" />
          <div className="absolute top-1/3 left-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-gradient-to-r from-indigo-500/6 to-purple-500/6 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-pink-500/5 to-rose-500/5 rounded-full blur-3xl animate-pulse delay-1500" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <Badge variant="secondary" className="mb-6 sm:mb-8 glass-card border-0 backdrop-blur-md pulse-badge text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
              <Users className="w-3 sm:w-4 h-3 sm:h-4 mr-1.5 sm:mr-2" />
              Our Team
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-foreground via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Meet Our Passionate Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed px-4">
              Behind every great brand is a passionate team dedicated to making a difference. 
              Meet the people who make ClothStore possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {team.map((member, index) => (
              <Card key={index} className="team-card glass-card border-0 backdrop-blur-xl shadow-2xl hover:glass transition-all duration-500 hover:-translate-y-4 group overflow-hidden magnetic-card rounded-2xl sm:rounded-3xl">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Enhanced quote overlay */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <Quote className="w-6 sm:w-8 h-6 sm:h-8 mb-2 sm:mb-3 opacity-80" />
                      <p className="text-sm sm:text-base italic font-medium leading-relaxed">"{member.quote}"</p>
                    </div>
                    
                    {/* Enhanced floating badge */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                      <Badge className="glass-strong border-0 backdrop-blur-md text-white px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm">
                        <Star className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-1.5 fill-current" />
                        Team Lead
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                      <p className="text-primary font-semibold mb-1 sm:mb-2 text-base sm:text-lg group-hover:text-primary/80 transition-colors duration-300">{member.role}</p>
                      <p className="text-xs sm:text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">{member.social}</p>
                    </div>
                    
                    <Separator className="mb-6 sm:mb-8 group-hover:bg-primary/20 transition-colors duration-300" />
                    
                    <p className="text-foreground/70 leading-relaxed text-center group-hover:text-foreground/80 transition-colors duration-300 text-sm sm:text-base mb-4 sm:mb-6">
                      {member.description}
                    </p>
                    
                    <div className="flex justify-center mb-4 sm:mb-6 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform duration-200" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Enhanced skill indicators */}
                    <div className="flex justify-center gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <Badge variant="secondary" className="text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1">Leadership</Badge>
                      <Badge variant="secondary" className="text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1">Innovation</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section ref={sustainabilityRef} className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5" />
          <div className="absolute top-1/3 right-1/3 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-gradient-to-br from-green-500/12 via-emerald-500/8 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-blue-500/12 via-cyan-500/8 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/4 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-gradient-to-r from-teal-500/8 to-green-600/8 rounded-full blur-2xl animate-pulse delay-2000" />
          
          {/* Floating nature-themed elements */}
          <div className="absolute top-16 left-8 sm:top-24 sm:left-16 w-3 sm:w-4 h-3 sm:h-4 bg-green-500/25 rounded-full animate-bounce delay-1000" />
          <div className="absolute top-1/3 right-8 sm:right-20 w-2 sm:w-3 h-2 sm:h-3 bg-emerald-500/30 rounded-full animate-bounce delay-2500" />
          <div className="absolute bottom-12 left-1/4 sm:bottom-20 w-2 h-2 bg-teal-500/35 rounded-full animate-bounce delay-3500" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div className="sustainability-content space-y-8 sm:space-y-10">
              <div>
                <Badge variant="secondary" className="mb-6 sm:mb-8 glass-card border-0 backdrop-blur-md text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                  <Leaf className="w-3 sm:w-4 h-3 sm:h-4 mr-1.5 sm:mr-2 fill-current text-green-500" />
                  Sustainability
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Fashion Forward, Planet Friendly
                </h2>
                <div className="space-y-6 sm:space-y-8 text-foreground/70 text-base sm:text-lg lg:text-xl leading-relaxed">
                  <p>
                    We're committed to reducing our environmental impact through every aspect 
                    of our business. From sourcing sustainable materials to implementing 
                    carbon-neutral shipping, we're constantly working to do better.
                  </p>
                  <p>
                    Our packaging is 100% recyclable, and we partner with suppliers who 
                    share our commitment to ethical labor practices and environmental responsibility.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <Card className="text-center p-6 sm:p-8 glass-card border-0 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl hover:glass transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-0 relative z-10">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      100%
                    </div>
                    <div className="text-foreground/70 font-semibold text-base sm:text-lg">Recyclable Packaging</div>
                    <div className="w-8 sm:w-10 lg:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardContent>
                </Card>
                <Card className="text-center p-6 sm:p-8 glass-card border-0 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl hover:glass transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-0 relative z-10">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      50%
                    </div>
                    <div className="text-foreground/70 font-semibold text-base sm:text-lg">Sustainable Materials</div>
                    <div className="w-8 sm:w-10 lg:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced sustainability metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
                <div className="text-center group">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 inline-block mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Carbon</div>
                  </div>
                  <div className="text-foreground/60 font-medium">Neutral Shipping</div>
                </div>
                <div className="text-center group">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 inline-block mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Ethical</div>
                  </div>
                  <div className="text-foreground/60 font-medium">Labor Practices</div>
                </div>
                <div className="text-center group">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-teal-500/10 to-green-600/10 inline-block mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent">Zero</div>
                  </div>
                  <div className="text-foreground/60 font-medium">Waste Goal</div>
                </div>
              </div>
            </div>

            <div className="sustainability-image relative">
              {/* Enhanced image container with better effects */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <Card className="glass-card border-0 backdrop-blur-xl shadow-3xl overflow-hidden group rounded-3xl relative">
                  <CardContent className="p-0">
                    <img
                      src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop"
                      alt="Sustainable Fashion"
                      className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300" />
                    
                    {/* Enhanced floating eco badges */}
                    <div className="absolute top-8 left-8">
                      <Badge className="glass-strong border-0 backdrop-blur-md text-white px-4 py-2 text-sm">
                        <Leaf className="w-4 h-4 mr-2 fill-current" />
                        Eco-Certified
                      </Badge>
                    </div>
                    
                    <div className="absolute bottom-8 right-8">
                      <Badge className="glass-strong border-0 backdrop-blur-md text-white px-4 py-2 text-sm">
                        <Globe className="w-4 h-4 mr-2" />
                        Global Impact
                      </Badge>
                    </div>
                    
                    {/* New impact stats overlay */}
                    <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="space-y-2">
                        <div className="text-2xl font-bold">5M+ lbs</div>
                        <div className="text-sm opacity-90">CO₂ Saved Annually</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Additional floating elements around the image */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-green-500/20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-6 w-8 h-8 bg-emerald-500/25 rounded-full animate-bounce delay-2000"></div>
              <div className="absolute -bottom-6 left-1/3 w-6 h-6 bg-teal-500/30 rounded-full animate-pulse delay-3000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Enhanced background with more depth */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8" />
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-2xl animate-pulse delay-2000" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Card className="relative overflow-hidden glass-strong border-0 shadow-3xl hover:shadow-4xl transition-all duration-700 magnetic-card rounded-2xl sm:rounded-3xl">
            {/* Enhanced animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />
            
            <CardContent className="relative p-8 sm:p-12 lg:p-16 xl:p-20 text-center">
              {/* Enhanced floating elements */}
              <div className="absolute top-4 sm:top-6 lg:top-10 left-4 sm:left-6 lg:left-10">
                <Badge className="glass-card border-0 backdrop-blur-md pulse-badge text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5">
                  <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-1.5 animate-pulse" />
                  Join Us
                </Badge>
              </div>
              
              <div className="absolute top-4 sm:top-6 lg:top-10 right-4 sm:right-6 lg:right-10">
                <Badge className="glass-card border-0 backdrop-blur-md pulse-badge text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5">
                  <Shield className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-1.5" />
                  Trusted
                </Badge>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                  Ready to Join Our Fashion Revolution?
                </h2>
                <p className="text-foreground/70 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4">
                  Discover fashion that aligns with your values. Join thousands of customers 
                  who have made the switch to sustainable, stylish clothing that makes a difference.
                </p>
                
                {/* Enhanced stats row with better spacing */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
                  <div className="text-center group">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary/20 to-primary/10">
                        <Zap className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-primary" />
                      </div>
                      <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">Fast</span>
                    </div>
                    <p className="text-foreground/60 text-sm sm:text-base lg:text-lg">Free shipping worldwide</p>
                  </div>
                  <div className="text-center group">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/10">
                        <Shield className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-green-500" />
                      </div>
                      <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">Secure</span>
                    </div>
                    <p className="text-foreground/60 text-sm sm:text-base lg:text-lg">100% secure checkout</p>
                  </div>
                  <div className="text-center group">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-pink-500/20 to-rose-500/10">
                        <Heart className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-pink-500" />
                      </div>
                      <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">Loved</span>
                    </div>
                    <p className="text-foreground/60 text-sm sm:text-base lg:text-lg">By 10K+ customers</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10 lg:mb-12">
                  <Link to="/shop" className="w-full sm:w-auto">
                    <Button size="lg" className="group h-12 sm:h-14 lg:h-16 px-8 sm:px-10 lg:px-12 text-base sm:text-lg lg:text-xl rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 border-0 w-full">
                      <span className="flex items-center justify-center">
                        Start Shopping Now
                        <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 ml-2 sm:ml-3 transition-transform group-hover:translate-x-2" />
                      </span>
                    </Button>
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="glass-light hover:glass h-12 sm:h-14 lg:h-16 px-8 sm:px-10 lg:px-12 text-base sm:text-lg lg:text-xl rounded-2xl sm:rounded-3xl border-2 border-foreground/20 hover:border-primary/50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 backdrop-blur-md w-full">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
                
                {/* Enhanced trust indicators */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-foreground/60 text-sm sm:text-base lg:text-lg">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                    <span>SSL Secured</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full animate-pulse" />
                    <span>30-Day Returns</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full animate-pulse" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
