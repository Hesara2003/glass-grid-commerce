
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product, useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:bg-white/60"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Glass Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Add to Cart Button (appears on hover) */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/30"
        >
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
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
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500">Free shipping</span>
        </div>
      </div>

      {/* Grain Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-overlay rounded-3xl"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </Link>
  );
};

export default ProductCard;
