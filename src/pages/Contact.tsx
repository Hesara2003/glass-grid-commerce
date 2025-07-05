import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Headphones, Sparkles, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { useToast } from '../hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { toast } = useToast();
  
  // Refs for animations
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const contactCardsRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced hero section animations
      const heroTl = gsap.timeline();
      
      heroTl.fromTo(
        ".hero-title",
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
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
      );

      // Contact cards stagger animation
      gsap.fromTo(
        ".contact-card",
        { opacity: 0, y: 80, scale: 0.9, rotationY: 15 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: contactCardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Form animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -100, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // FAQ cards animation
      gsap.fromTo(
        ".faq-card",
        { opacity: 0, x: 100, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Map section animation
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // CTA section animation
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating animations
      gsap.to(".float-badge", {
        y: -10,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });

      // Pulse animations
      gsap.to(".pulse-icon", {
        scale: 1.1,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });

      // Magnetic card effects
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

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      details: "support@clothstore.com",
      subtitle: "We'll respond within 24 hours",
      color: "text-blue-500",
      gradient: "from-blue-500/10 to-cyan-500/10",
      bgGradient: "from-blue-500/5 via-cyan-500/5 to-blue-600/5"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 9AM-6PM EST",
      color: "text-green-500",
      gradient: "from-green-500/10 to-emerald-500/10",
      bgGradient: "from-green-500/5 via-emerald-500/5 to-green-600/5"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Visit Us",
      details: "123 Fashion Street",
      subtitle: "New York, NY 10001",
      color: "text-purple-500",
      gradient: "from-purple-500/10 to-violet-500/10",
      bgGradient: "from-purple-500/5 via-violet-500/5 to-purple-600/5"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Store Hours",
      details: "Mon-Sat: 10AM-8PM",
      subtitle: "Sunday: 12PM-6PM",
      color: "text-orange-500",
      gradient: "from-orange-500/10 to-amber-500/10",
      bgGradient: "from-orange-500/5 via-amber-500/5 to-orange-600/5"
    }
  ];

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unworn items with original tags. Returns are free and easy - just use our prepaid return label."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days. Free shipping is available on orders over $50."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship to over 50 countries worldwide. International shipping costs and delivery times vary by location."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account on our website."
    },
    {
      question: "What sizes do you offer?",
      answer: "We offer sizes XS through XXL for most items. Detailed size charts are available on each product page to help you find the perfect fit."
    },
    {
      question: "Are your products sustainable?",
      answer: "Yes! We're committed to sustainability. Many of our products are made from organic, recycled, or sustainably sourced materials."
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen" style={{ scrollBehavior: 'smooth' }}>
      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/5 via-transparent to-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-2xl" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge variant="secondary" className="glass-card border-0 backdrop-blur-md float-badge">
                <MessageCircle className="w-3 h-3 mr-2" />
                Contact Us
              </Badge>
            </div>
            
            <h1 className="hero-title text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Get in 
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/70 bg-clip-text text-transparent block">
                Touch
              </span>
            </h1>
            
            <p className="hero-subtitle text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Have a question, feedback, or just want to say hello? We'd love to hear from you. 
              Our friendly team is here to help with anything you need.
            </p>

            {/* Quick response promise */}
            <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
              <div className="flex items-center gap-2 glass-light rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-foreground/70">24h Response Time</span>
              </div>
              <div className="flex items-center gap-2 glass-light rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm text-foreground/70">5-Star Support</span>
              </div>
              <div className="flex items-center gap-2 glass-light rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-sm text-foreground/70">Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info Cards */}
      <section ref={contactCardsRef} className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 glass-light" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 glass-card border-0 backdrop-blur-md float-badge">
              <Headphones className="w-3 h-3 mr-2" />
              Support Channels
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              How Can We Help?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Choose your preferred way to connect with our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="contact-card glass-card border-0 backdrop-blur-xl shadow-xl hover:glass transition-all duration-500 hover:-translate-y-3 group magnetic-card relative overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-r ${info.gradient} group-hover:scale-110 transition-all duration-500 group-hover:rotate-6 shadow-lg pulse-icon`}>
                    <div className={`${info.color} group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-foreground transition-colors duration-300">{info.title}</h3>
                  <p className="font-medium mb-2 text-foreground/90 group-hover:text-foreground transition-colors duration-300">{info.details}</p>
                  <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">{info.subtitle}</p>
                  
                  <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className={`w-8 h-1 bg-gradient-to-r ${info.gradient} rounded-full`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <div ref={formRef}>
              <Card className="glass-card border-0 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                {/* Form header with gradient */}
                <div className="relative bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 p-8 border-b border-foreground/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
                      <Send className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
                      <p className="text-sm text-foreground/60">We'll get back to you within 24 hours</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="glass-light border-0 h-12 focus:glass transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="glass-light border-0 h-12 focus:glass transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="glass-light border-0 h-12 focus:glass transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="glass-light border-0 focus:glass transition-all duration-300 resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-14 text-lg rounded-2xl group glass-hover shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </Button>

                    {/* Trust indicators */}
                    <div className="flex items-center justify-center gap-4 text-xs text-foreground/60 pt-4">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>Secure & Private</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span>Quick Response</span>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced FAQ Section */}
            <div ref={faqRef}>
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4 glass-card border-0 backdrop-blur-md float-badge">
                  <MessageCircle className="w-3 h-3 mr-2" />
                  FAQ
                </Badge>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
                <p className="text-foreground/70">
                  Quick answers to common questions about our products and services.
                </p>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="faq-card glass-card border-0 backdrop-blur-xl shadow-lg hover:glass transition-all duration-500 hover:-translate-y-1 group magnetic-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <MessageCircle className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{faq.question}</h3>
                          <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{faq.answer}</p>
                          
                          <Separator className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                            <span className="text-xs text-foreground/60">Was this helpful?</span>
                            <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                              Yes
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                              No
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional help section */}
              <Card className="mt-8 glass-light border-0 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2 text-foreground">Still need help?</h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <Button variant="outline" size="sm" className="glass-card border-0 hover:glass">
                    Contact Support
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section ref={mapRef} className="py-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 glass-card border-0 backdrop-blur-md float-badge">
              <MapPin className="w-3 h-3 mr-2" />
              Visit Us
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Visit Our Flagship Store
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Come see our collection in person at our flagship store in the heart of New York City.
              Experience the quality and craftsmanship up close.
            </p>
          </div>
          
          <Card className="glass-card border-0 backdrop-blur-xl shadow-2xl overflow-hidden magnetic-card">
            <div className="relative h-[500px]">
              {/* Enhanced map placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                <div className="absolute inset-0 flex items-center justify-center text-foreground/60">
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl"></div>
                      <div className="relative p-6 glass-card rounded-3xl backdrop-blur-xl">
                        <MapPin className="w-16 h-16 mx-auto mb-4 text-primary pulse-icon" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Map</h3>
                      <p className="text-lg font-medium text-foreground/80 mb-1">123 Fashion Street</p>
                      <p className="text-foreground/70">New York, NY 10001</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="glass-hover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        Get Directions
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline" className="glass-light border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        Call Store
                        <Phone className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-8 left-8">
                  <Badge className="glass-strong border-0 backdrop-blur-md">
                    <Clock className="w-3 h-3 mr-1" />
                    Open Now
                  </Badge>
                </div>
                
                <div className="absolute top-8 right-8">
                  <Badge className="glass-strong border-0 backdrop-blur-md">
                    <Star className="w-3 h-3 mr-1 fill-current text-yellow-500" />
                    4.9 Rating
                  </Badge>
                </div>
                
                <div className="absolute bottom-8 left-8">
                  <Badge className="glass-strong border-0 backdrop-blur-md">
                    <MapPin className="w-3 h-3 mr-1" />
                    Manhattan
                  </Badge>
                </div>
              </div>
            </div>
            
            {/* Store info overlay */}
            <div className="p-8 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <h4 className="font-bold text-foreground mb-1">Store Hours</h4>
                  <p className="text-sm text-foreground/70">Mon-Sat: 10AM-8PM<br />Sun: 12PM-6PM</p>
                </div>
                <div className="text-center">
                  <Phone className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <h4 className="font-bold text-foreground mb-1">Phone</h4>
                  <p className="text-sm text-foreground/70">+1 (555) 123-4567</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <h4 className="font-bold text-foreground mb-1">Parking</h4>
                  <p className="text-sm text-foreground/70">Valet & Street Available</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Enhanced Additional Contact Options */}
      <section ref={ctaRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 glass-light" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 glass-card border-0 backdrop-blur-md float-badge">
              <Sparkles className="w-3 h-3 mr-2 animate-pulse" />
              More Ways to Connect
            </Badge>
            
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Choose Your Preferred Channel
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <Card className="glass-card border-0 backdrop-blur-xl shadow-xl hover:glass transition-all duration-500 hover:-translate-y-2 group magnetic-card">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-8 h-8 text-blue-500 pulse-icon" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Live Chat</h3>
                  <p className="text-sm text-foreground/70 mb-4">Instant support available 24/7</p>
                  <Button size="sm" className="group w-full glass-hover rounded-xl">
                    Start Chat
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 backdrop-blur-xl shadow-xl hover:glass transition-all duration-500 hover:-translate-y-2 group magnetic-card">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-8 h-8 text-green-500 pulse-icon" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Schedule Call</h3>
                  <p className="text-sm text-foreground/70 mb-4">Book a time that works for you</p>
                  <Button size="sm" variant="outline" className="group w-full glass-light border-0 rounded-xl">
                    Book Now
                    <Calendar className="w-3 h-3 ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 backdrop-blur-xl shadow-xl hover:glass transition-all duration-500 hover:-translate-y-2 group magnetic-card">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-purple-500 pulse-icon" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">WhatsApp</h3>
                  <p className="text-sm text-foreground/70 mb-4">Quick and convenient messaging</p>
                  <Button size="sm" variant="outline" className="group w-full glass-light border-0 rounded-xl">
                    Message Us
                    <MessageCircle className="w-3 h-3 ml-1 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Enhanced promise section */}
            <Card className="glass-strong border-0 backdrop-blur-xl max-w-4xl mx-auto">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Customer Service Promise</h3>
                <p className="text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Our customer service team is available 24/7 to help with any questions or concerns. 
                  We typically respond to all inquiries within 2-4 hours during business days.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center group">
                    <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl inline-block mb-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <h4 className="font-bold text-foreground mb-1">Fast Response</h4>
                    <p className="text-sm text-foreground/60">Within 2-4 hours</p>
                  </div>
                  <div className="text-center group">
                    <div className="p-3 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-2xl inline-block mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-6 h-6 text-yellow-500 fill-current" />
                    </div>
                    <h4 className="font-bold text-foreground mb-1">Expert Support</h4>
                    <p className="text-sm text-foreground/60">Trained professionals</p>
                  </div>
                  <div className="text-center group">
                    <div className="p-3 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-2xl inline-block mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-purple-500" />
                    </div>
                    <h4 className="font-bold text-foreground mb-1">Satisfaction</h4>
                    <p className="text-sm text-foreground/60">100% guaranteed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
