import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../hooks/use-toast';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-lg glass-hover ${className}`}>
      <Link to={`/product/${product.id}`}>
        <CardContent className="p-0">
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-t-lg aspect-square">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-2">
              {discountPercentage > 0 && (
                <Badge variant="destructive" className="text-xs">
                  -{discountPercentage}%
                </Badge>
              )}
              {!product.inStock && (
                <Badge variant="secondary" className="text-xs">
                  Out of Stock
                </Badge>
              )}
              {product.featured && (
                <Badge className="text-xs bg-primary">
                  Featured
                </Badge>
              )}
            </div>

            {/* Action Buttons */}
            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 rounded-full glass-card border-0"
                onClick={handleWishlist}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Quick Add to Cart - appears on hover */}
            <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                className="w-full glass-strong border-0"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4 space-y-2">
            {/* Brand */}
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {product.brand}
            </p>

            {/* Name */}
            <h3 className="font-medium text-sm line-clamp-2 leading-tight">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({product.reviews})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Available Colors */}
            {product.colors.length > 0 && (
              <div className="flex items-center gap-1 pt-2">
                <span className="text-xs text-muted-foreground">Colors:</span>
                <div className="flex gap-1">
                  {product.colors.slice(0, 3).map((color, index) => (
                    <div
                      key={index}
                      className="w-3 h-3 rounded-full border border-gray-300"
                      style={{ 
                        backgroundColor: color.toLowerCase().includes('white') ? '#ffffff' :
                                       color.toLowerCase().includes('black') ? '#000000' :
                                       color.toLowerCase().includes('gray') ? '#6b7280' :
                                       color.toLowerCase().includes('blue') ? '#3b82f6' :
                                       color.toLowerCase().includes('red') ? '#ef4444' :
                                       color.toLowerCase().includes('green') ? '#10b981' :
                                       color.toLowerCase().includes('yellow') ? '#f59e0b' :
                                       color.toLowerCase().includes('pink') ? '#ec4899' :
                                       color.toLowerCase().includes('brown') ? '#a3825a' :
                                       color.toLowerCase().includes('navy') ? '#1e3a8a' :
                                       '#9ca3af'
                      }}
                      title={color}
                    />
                  ))}
                  {product.colors.length > 3 && (
                    <span className="text-xs text-muted-foreground">
                      +{product.colors.length - 3}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
