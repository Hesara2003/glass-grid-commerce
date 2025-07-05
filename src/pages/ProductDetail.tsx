import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Star, ShoppingCart, Truck, RefreshCw, Shield, Plus, Minus, ChevronLeft, ChevronRight, Zap, Award, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  // Refs for animations
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const relatedRef = useRef<HTMLElement>(null);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (!product) return;

    const ctx = gsap.context(() => {
      // Staggered entrance animations
      gsap.fromTo(
        [imageRef.current, infoRef.current],
        {
          opacity: 0,
          y: 100,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
        }
      );

      // Tabs section animation
      gsap.fromTo(
        tabsRef.current,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Related products animation
      if (relatedRef.current) {
        gsap.fromTo(
          relatedRef.current,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: relatedRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Related product cards stagger
        gsap.fromTo(
          ".related-product-card",
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".related-products-grid",
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Floating animation for feature cards
      gsap.to(".feature-card", {
        y: -5,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });

      // Pulse animation for badges
      gsap.to(".pulse-badge", {
        scale: 1.05,
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });

    }, containerRef);

    return () => ctx.revert();
  }, [product]);

  // Image transition animation
  useEffect(() => {
    if (imageLoaded) {
      gsap.fromTo(
        ".main-image",
        {
          opacity: 0,
          scale: 1.1,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, [selectedImage, imageLoaded]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 md:px-6 lg:px-4 py-12 md:py-16 text-center">
        <div className="glass-card rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-xl border-0">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Product not found
          </h1>
          <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/shop">
            <Button size="lg" className="glass-hover rounded-xl md:rounded-2xl text-sm md:text-base h-12 md:h-14 px-6 md:px-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    // Add button animation
    gsap.to(".add-to-cart-btn", {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    // ...existing validation logic...
    if (product.sizes.length > 0 && !selectedSize) {
      toast({
        title: "Please select a size",
        description: "Size selection is required for this product.",
        variant: "destructive",
      });
      return;
    }

    if (product.colors.length > 0 && !selectedColor) {
      toast({
        title: "Please select a color",
        description: "Color selection is required for this product.",
        variant: "destructive",
      });
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor);
    }

    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name}${quantity > 1 ? 's' : ''} added to your cart.`,
    });
  };

  const handleWishlist = () => {
    // Heart animation
    gsap.to(".wishlist-btn", {
      scale: 1.2,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  // ...existing color display function...
  const getColorDisplay = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#6b7280',
      'grey': '#6b7280',
      'blue': '#3b82f6',
      'navy': '#1e3a8a',
      'red': '#ef4444',
      'green': '#10b981',
      'yellow': '#f59e0b',
      'pink': '#ec4899',
      'brown': '#a3825a',
      'purple': '#8b5cf6',
      'orange': '#f97316',
      'beige': '#f5f5dc',
      'cream': '#f5f5dc',
      'khaki': '#c3b091',
      'olive': '#808000',
      'burgundy': '#800020',
      'tan': '#d2b48c'
    };

    const colorKey = color.toLowerCase().split(' ')[0];
    return colorMap[colorKey] || '#9ca3af';
  };

  return (
    <div ref={containerRef} className="container mx-auto px-4 md:px-6 lg:px-4 py-6 md:py-8 min-h-screen" style={{ scrollBehavior: 'smooth' }}>
      {/* Enhanced Breadcrumb */}
      <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-muted-foreground mb-6 md:mb-8 glass-light rounded-full px-4 md:px-6 py-2 md:py-3 backdrop-blur-md border-0 w-fit overflow-x-auto">
        <Link to="/" className="text-foreground/70 hover:text-primary transition-colors duration-300 whitespace-nowrap">Home</Link>
        <ChevronRight className="w-3 h-3 text-foreground/50 flex-shrink-0" />
        <Link to="/shop" className="text-foreground/70 hover:text-primary transition-colors duration-300 whitespace-nowrap">Shop</Link>
        <ChevronRight className="w-3 h-3 text-foreground/50 flex-shrink-0" />
        <Link to={`/shop?category=${product.category}`} className="text-foreground/70 hover:text-primary transition-colors duration-300 capitalize whitespace-nowrap">
          {product.category}
        </Link>
        <ChevronRight className="w-3 h-3 text-foreground/50 flex-shrink-0" />
        <span className="text-foreground font-medium truncate">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20 lg:mb-24">
        {/* Enhanced Product Images */}
        <div ref={imageRef} className="space-y-4 md:space-y-6">
          {/* Main Image */}
          <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden glass-card border-0 backdrop-blur-xl shadow-2xl relative group">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="main-image w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Discount Badge */}
            {discountPercentage > 0 && (
              <Badge className="absolute top-3 md:top-6 left-3 md:left-6 glass-strong border-0 backdrop-blur-md pulse-badge text-xs md:text-sm">
                <Zap className="w-3 h-3 mr-1" />
                -{discountPercentage}% OFF
              </Badge>
            )}
          </div>

          {/* Enhanced Image Thumbnails */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-background scale-105 shadow-lg' 
                      : 'glass-light hover:glass hover:scale-105'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Product Info */}
        <div ref={infoRef} className="space-y-6 md:space-y-8">
          {/* Header Section */}
          <div className="space-y-3 md:space-y-4">
            <Badge variant="secondary" className="glass-card border-0 backdrop-blur-md text-xs md:text-sm">
              <Award className="w-3 h-3 mr-1" />
              {product.brand}
            </Badge>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
              {product.name}
            </h1>
            
            {/* Enhanced Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 glass-light rounded-xl md:rounded-2xl p-3 md:p-4 backdrop-blur-md border-0">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 md:h-5 md:w-5 transition-all duration-300 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400 animate-pulse'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-base md:text-lg font-semibold">{product.rating}</span>
              <Separator orientation="vertical" className="h-6 hidden sm:block" />
              <div className="flex items-center gap-1 text-muted-foreground">
                <Users className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-sm md:text-base">{product.reviews} reviews</span>
              </div>
            </div>

            {/* Enhanced Price */}
            <div className="glass-light rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-md border-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 mb-2">
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg md:text-xl text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              
              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${product.inStock ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                <span className={`text-xs md:text-sm font-medium ${product.inStock ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {product.inStock ? 'In Stock - Ready to Ship' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Product Options */}
          <div className="space-y-6 md:space-y-8">
            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div className="glass-light rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-md border-0">
                <label className="text-base md:text-lg font-semibold mb-3 md:mb-4 block">
                  Size {selectedSize && <span className="text-muted-foreground font-normal text-sm md:text-base">- {selectedSize}</span>}
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-3">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      size="lg"
                      onClick={() => setSelectedSize(size)}
                      className={`h-10 md:h-12 text-sm md:text-base transition-all duration-300 ${
                        selectedSize === size 
                          ? 'glass-strong border-0 shadow-lg scale-105' 
                          : 'glass-light hover:glass hover:scale-105'
                      }`}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="glass-light rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-md border-0">
                <label className="text-base md:text-lg font-semibold mb-3 md:mb-4 block">
                  Color {selectedColor && <span className="text-muted-foreground font-normal text-sm md:text-base">- {selectedColor}</span>}
                </label>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base ${
                        selectedColor === color
                          ? 'glass-strong border-white/30 shadow-lg scale-105'
                          : 'glass-light hover:glass hover:scale-105 border-white/20'
                      }`}
                    >
                      <div
                        className="w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-white/50 shadow-md flex-shrink-0"
                        style={{ backgroundColor: getColorDisplay(color) }}
                      />
                      <span className="font-medium">{color}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="glass-light rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-md border-0">
              <label className="text-base md:text-lg font-semibold mb-3 md:mb-4 block">Quantity</label>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                <div className="flex items-center glass-card rounded-xl shadow-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="glass-hover rounded-l-xl h-10 w-10 md:h-12 md:w-12"
                  >
                    <Minus className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                  <span className="px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl font-bold min-w-[3rem] md:min-w-[4rem] text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="glass-hover rounded-r-xl h-10 w-10 md:h-12 md:w-12"
                  >
                    <Plus className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-primary">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground">total</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                size="lg" 
                className="add-to-cart-btn flex-1 glass-hover h-12 md:h-14 text-sm md:text-lg font-semibold rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleWishlist} 
                className="wishlist-btn glass-light hover:glass h-12 md:h-14 w-12 md:w-14 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Heart className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-light hover:glass h-12 md:h-14 w-12 md:w-14 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Share2 className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>

            <Button 
              variant="outline" 
              size="lg" 
              className="w-full glass-light hover:glass h-12 md:h-14 text-sm md:text-lg font-semibold rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Buy Now - Fast Checkout
            </Button>
          </div>

          {/* Enhanced Features */}
          <div className="space-y-2 md:space-y-3">
            {[
              { icon: Truck, text: "Free shipping on orders over $50", color: "text-green-500" },
              { icon: RefreshCw, text: "30-day return policy", color: "text-blue-500" },
              { icon: Shield, text: "Secure payment guarantee", color: "text-purple-500" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="feature-card flex items-center gap-3 md:gap-4 glass-light rounded-xl md:rounded-2xl p-3 md:p-4 backdrop-blur-md border-0 hover:glass transition-all duration-300 cursor-pointer text-foreground"
                onMouseEnter={() => setHoveredFeature(feature.text)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <feature.icon className={`w-5 h-5 md:w-6 md:h-6 ${feature.color} transition-all duration-300 flex-shrink-0 ${
                  hoveredFeature === feature.text ? 'scale-110' : ''
                }`} />
                <span className="font-medium text-foreground text-sm md:text-base">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Product Details Tabs */}
      <div ref={tabsRef}>
        <Card className="mb-16 md:mb-20 lg:mb-24 glass-card border-0 backdrop-blur-xl shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden">
          <CardContent className="p-4 md:p-6 lg:p-8">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 glass-light rounded-xl md:rounded-2xl p-1 md:p-2 backdrop-blur-md h-12 md:h-14">
                <TabsTrigger value="description" className="glass-hover rounded-lg md:rounded-xl h-8 md:h-10 font-semibold text-xs md:text-sm">
                  Description
                </TabsTrigger>
                <TabsTrigger value="specifications" className="glass-hover rounded-lg md:rounded-xl h-8 md:h-10 font-semibold text-xs md:text-sm">
                  Specifications
                </TabsTrigger>
                <TabsTrigger value="reviews" className="glass-hover rounded-lg md:rounded-xl h-8 md:h-10 font-semibold text-xs md:text-sm">
                  Reviews ({product.reviews})
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="space-y-4 md:space-y-6 mt-6 md:mt-8">
                <div className="glass-light rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-md border-0">
                  <p className="text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed mb-4 md:mb-6">
                    {product.description}
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-lg md:text-xl font-semibold text-foreground">Key Features:</h4>
                    <ul className="grid grid-cols-1 gap-2 md:gap-3 text-muted-foreground">
                      {[
                        "Premium quality materials",
                        "Comfortable fit for all-day wear",
                        "Easy care and maintenance",
                        "Sustainable and eco-friendly"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 md:gap-3 glass-light rounded-lg md:rounded-xl p-2 md:p-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-foreground/80 text-sm md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="space-y-3 md:space-y-4 mt-4 md:mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="glass-light rounded-xl p-4 md:p-6">
                    <h4 className="font-semibold mb-3 md:mb-4 text-foreground text-base md:text-lg">Product Details</h4>
                    <dl className="space-y-2 md:space-y-3 text-sm md:text-base">
                      <div className="flex justify-between">
                        <dt className="text-foreground/70">Brand:</dt>
                        <dd className="text-foreground font-medium">{product.brand}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-foreground/70">Category:</dt>
                        <dd className="text-foreground font-medium capitalize">{product.category}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-foreground/70">Available Sizes:</dt>
                        <dd className="text-foreground font-medium">{product.sizes.join(', ')}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-foreground/70">Available Colors:</dt>
                        <dd className="text-foreground font-medium">{product.colors.join(', ')}</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="glass-light rounded-xl p-4 md:p-6">
                    <h4 className="font-semibold mb-3 md:mb-4 text-foreground text-base md:text-lg">Care Instructions</h4>
                    <ul className="text-sm md:text-base text-foreground/70 space-y-1 md:space-y-2">
                      <li>Machine wash cold</li>
                      <li>Tumble dry low</li>
                      <li>Do not bleach</li>
                      <li>Iron on low heat if needed</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-3 md:space-y-4 mt-4 md:mt-6">
                <div className="glass-light rounded-xl p-4 md:p-6">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4">
                      <div className="text-2xl md:text-3xl font-bold text-foreground">{product.rating}</div>
                      <div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 md:h-5 md:w-5 ${
                                i < Math.floor(product.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs md:text-sm text-foreground/70">Based on {product.reviews} reviews</p>
                      </div>
                    </div>
                    <Separator />
                    <p className="text-foreground/70 text-sm md:text-base">
                      Customer reviews will be displayed here. Reviews help other customers make informed decisions about their purchases.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Related Products */}
      {relatedProducts.length > 0 && (
        <section ref={relatedRef}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 md:gap-8 mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Related Products
              </h2>
              <p className="text-foreground/70 text-sm md:text-base">
                You might also like these similar items
              </p>
            </div>
            <Link to={`/shop?category=${product.category}`}>
              <Button variant="outline" size="lg" className="glass-light hover:glass rounded-xl md:rounded-2xl text-sm md:text-base w-full sm:w-auto">
                View All {product.category}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="related-products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="related-product-card">
                <ProductCard product={relatedProduct} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
