
import React, { useEffect, useRef } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product, useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { magneticButton } from '@/lib/gsap';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const addToCartRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!cardRef.current || !imageRef.current || !addToCartRef.current) return;

    const card = cardRef.current;
    const image = imageRef.current;
    const button = addToCartRef.current;

    // Card hover animation
    const handleCardEnter = () => {
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(image, {
        scale: 1.1,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    const handleCardLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(image, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    card.addEventListener('mouseenter', handleCardEnter);
    card.addEventListener('mouseleave', handleCardLeave);

    // Magnetic button effect
    const cleanupMagnetic = magneticButton(button);

    return () => {
      card.removeEventListener('mouseenter', handleCardEnter);
      card.removeEventListener('mouseleave', handleCardLeave);
      cleanupMagnetic();
    };
  }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Add cart animation
    if (addToCartRef.current) {
      gsap.to(addToCartRef.current, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
    }
    
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card block"
    >
      <div
        ref={cardRef}
        className="group relative bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg transition-all duration-300"
      >
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
          <div
            ref={imageRef}
            className="w-full h-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Glass Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm" />
          
          {/* Add to Cart Button (slides in on hover) */}
          <button
            ref={addToCartRef}
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/30 hover:scale-110"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full transition-colors group-hover:bg-blue-100">
              {product.category}
            </span>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-600">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviews})</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-gray-900 group-hover:scale-105 transition-transform">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500">Free shipping</span>
          </div>
        </div>

        {/* Animated Grain Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-5 mix-blend-overlay rounded-3xl transition-opacity duration-300 group-hover:opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
