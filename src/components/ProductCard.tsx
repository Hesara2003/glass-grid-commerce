import React, { useEffect, useRef } from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
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
  const favoriteRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!cardRef.current || !imageRef.current || !addToCartRef.current || !favoriteRef.current) return;

    const card = cardRef.current;
    const image = imageRef.current;
    const addButton = addToCartRef.current;
    const favoriteButton = favoriteRef.current;

    // Enhanced card hover animation
    const handleCardEnter = () => {
      gsap.to(card, {
        y: -12,
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)',
        duration: 0.4,
        ease: 'power3.out'
      });
      
      gsap.to(image, {
        scale: 1.08,
        duration: 0.6,
        ease: 'power2.out'
      });
    };

    const handleCardLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        duration: 0.4,
        ease: 'power3.out'
      });
      
      gsap.to(image, {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out'
      });
    };

    card.addEventListener('mouseenter', handleCardEnter);
    card.addEventListener('mouseleave', handleCardLeave);

    // Magnetic button effects
    const cleanupMagneticAdd = magneticButton(addButton);
    const cleanupMagneticFav = magneticButton(favoriteButton);

    return () => {
      card.removeEventListener('mouseenter', handleCardEnter);
      card.removeEventListener('mouseleave', handleCardLeave);
      cleanupMagneticAdd();
      cleanupMagneticFav();
    };
  }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (addToCartRef.current) {
      gsap.to(addToCartRef.current, {
        scale: 0.85,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
    }
    
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block">
      <div
        ref={cardRef}
        className="group relative glass-card p-8 transition-all duration-500 hover-glow grain-texture"
      >
        {/* Enhanced product image container */}
        <div className="relative overflow-hidden rounded-2xl mb-8 aspect-square">
          <div ref={imageRef} className="w-full h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Enhanced overlay with glass effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[1px]" />
          
          {/* Action buttons with refined positioning */}
          <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-400">
            <button
              ref={favoriteRef}
              className="p-3 glass-strong rounded-full text-white hover:text-red-400 transition-colors duration-300 hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Heart className="w-5 h-5" />
            </button>
            <button
              ref={addToCartRef}
              onClick={handleAddToCart}
              className="p-3 glass-strong rounded-full text-white hover:text-blue-400 transition-colors duration-300 hover:scale-110"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Enhanced product information */}
        <div className="space-y-4">
          {/* Category and rating with refined styling */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full transition-colors group-hover:bg-blue-100">
              {product.category}
            </span>
            <div className="flex items-center space-x-1.5">
              <span className="text-yellow-400 text-sm">★</span>
              <span className="text-sm font-medium text-slate-700">{product.rating}</span>
              <span className="text-sm text-slate-500">({product.reviews})</span>
            </div>
          </div>

          {/* Product title with enhanced typography */}
          <h3 className="text-title text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>

          {/* Description with refined spacing */}
          <p className="text-caption leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Price and shipping with enhanced layout */}
          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              <span className="text-3xl font-bold text-slate-900 group-hover:scale-105 transition-transform duration-300">
                ${product.price}
              </span>
            </div>
            <span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-lg">
              Free shipping
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
