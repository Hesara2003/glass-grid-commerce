import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, ShoppingCart, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { featuredProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../hooks/use-toast';

const BentoGrid = () => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleAddToCart = (product: any) => {
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/5 via-transparent to-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className={`text-center mb-8 md:mb-12 px-2 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Badge variant="secondary" className="mb-3 md:mb-4 glass-card border-0 backdrop-blur-md animate-in fade-in-0 slide-in-from-bottom-4 duration-500 text-xs md:text-sm">
            <Sparkles className="w-3 h-3 mr-1 fill-current animate-pulse" />
            Featured Collection
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent px-2">
            Trending This Season
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm md:text-base px-4">
            Discover our hand-picked selection of the most popular items this season. 
            From timeless classics to contemporary designs.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-8 px-2 md:px-0">
          {/* Large Featured Product */}
          <Card className={`col-span-1 md:col-span-2 lg:row-span-2 group cursor-pointer overflow-hidden glass-card border-0 backdrop-blur-md transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <Link to={`/product/${featuredProducts[0]?.id}`}>
              <CardContent className="p-0 h-full">
                <div className="relative h-full min-h-[280px] md:min-h-[350px] lg:min-h-[500px] overflow-hidden">
                  <img
                    src={featuredProducts[0]?.images[0]}
                    alt={featuredProducts[0]?.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 md:top-6 left-4 md:left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-ping" />
                  </div>
                  <div className="absolute top-8 md:top-12 right-8 md:right-12 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                    <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white transform transition-all duration-500 group-hover:translate-y-[-8px]">
                    <Badge className="mb-2 md:mb-3 glass-light border-0 backdrop-blur-sm animate-in fade-in-0 slide-in-from-left-4 duration-500 delay-100 text-xs">
                      <Star className="w-3 h-3 mr-1 fill-current animate-pulse" />
                      Best Seller
                    </Badge>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 transition-all duration-300 group-hover:text-white/90 leading-tight">
                      {featuredProducts[0]?.name}
                    </h3>
                    <p className="text-white/80 mb-3 md:mb-4 line-clamp-2 transition-all duration-300 group-hover:text-white/90 text-sm md:text-base">
                      {featuredProducts[0]?.description}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                          ${featuredProducts[0]?.price}
                        </span>
                        {featuredProducts[0]?.originalPrice && (
                          <span className="text-white/60 line-through transform transition-all duration-300 group-hover:scale-95 text-sm md:text-base">
                            ${featuredProducts[0]?.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="glass-strong border-0 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 text-xs md:text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(featuredProducts[0]);
                        }}
                      >
                        <ShoppingCart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 transition-transform duration-300 hover:rotate-12" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>

                  {/* Wishlist Button */}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 glass-card border-0 backdrop-blur-md hover:scale-110 active:scale-95 w-8 h-8 md:w-10 md:h-10"
                    onClick={(e) => {
                      e.preventDefault();
                      toast({
                        title: "Added to wishlist",
                        description: `${featuredProducts[0]?.name} has been added to your wishlist.`,
                      });
                    }}
                  >
                    <Heart className="h-3 w-3 md:h-4 md:w-4 transition-all duration-300 hover:scale-110 hover:fill-red-400 hover:text-red-400" />
                  </Button>
                </div>
              </CardContent>
            </Link>
          </Card>

          {/* Medium Products */}
          {featuredProducts.slice(1, 3).map((product, index) => (
            <Card 
              key={product.id} 
              className={`lg:col-span-2 group cursor-pointer overflow-hidden glass-card border-0 backdrop-blur-md transition-all duration-700 hover:shadow-xl hover:shadow-primary/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link to={`/product/${product.id}`}>
                <CardContent className="p-0">
                  <div className="flex h-40 md:h-48 lg:h-60">
                    <div className="w-1/2 relative overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="w-1/2 p-3 md:p-4 lg:p-6 flex flex-col justify-between backdrop-blur-sm">
                      <div className="transform transition-all duration-500 group-hover:translate-y-[-4px]">
                        <p className="text-xs text-muted-foreground uppercase mb-1 md:mb-2 tracking-wider opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                          {product.brand}
                        </p>
                        <h3 className="font-bold text-sm md:text-base lg:text-lg mb-1 md:mb-2 line-clamp-2 transition-all duration-300 group-hover:text-primary leading-tight">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-2 md:mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-2 w-2 md:h-3 md:w-3 transition-all duration-300 ${
                                  i < Math.floor(product.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                } ${hoveredCard === product.id ? 'animate-pulse' : ''}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground transition-opacity duration-300 group-hover:opacity-70">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>
                      <div className="transform transition-all duration-500 group-hover:translate-y-[-4px]">
                        <div className="flex items-center gap-2 mb-2 md:mb-3">
                          <span className="font-bold text-sm md:text-base lg:text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-muted-foreground line-through text-xs md:text-sm transition-all duration-300 group-hover:scale-95">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                        <Button 
                          size="sm" 
                          className="w-full glass-hover transition-all duration-300 hover:scale-105 active:scale-95 text-xs md:text-sm h-7 md:h-8 lg:h-9"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart(product);
                          }}
                        >
                          <ShoppingCart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 transition-transform duration-300 hover:rotate-12" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}

          {/* Small Products */}
          {featuredProducts.slice(3, 7).map((product, index) => (
            <Card 
              key={product.id} 
              className={`group cursor-pointer overflow-hidden glass-card border-0 backdrop-blur-md transition-all duration-700 hover:shadow-xl hover:shadow-primary/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link to={`/product/${product.id}`}>
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Quick Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                      <Button 
                        size="sm"
                        className="glass-strong border-0 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg text-xs md:text-sm h-7 md:h-8"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product);
                        }}
                      >
                        <ShoppingCart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 transition-transform duration-300 hover:rotate-12" />
                        Add to Cart
                      </Button>
                    </div>

                    {/* Product Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out backdrop-blur-sm">
                      <h3 className="font-semibold text-xs md:text-sm mb-1 line-clamp-1 transition-all duration-300 leading-tight">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm md:text-base bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                          ${product.price}
                        </span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-2 w-2 md:h-3 md:w-3 transition-all duration-300 ${
                                i < Math.floor(product.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              } ${hoveredCard === product.id ? 'animate-pulse' : ''}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <Link to="/shop">
            <Button 
              size="lg" 
              variant="outline" 
              className="group glass-card border-0 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 w-full md:w-auto"
            >
              View All Products
              <ArrowRight className="w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
