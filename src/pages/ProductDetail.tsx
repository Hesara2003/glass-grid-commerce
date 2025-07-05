
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  
  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/shop"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Shop</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg">
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-600">{product.rating}</span>
                  <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
                </div>
              </div>

              {/* Title & Price */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${Math.round(product.price * 1.2)}
                </span>
                <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
                  Save 20%
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <h3 className="font-semibold text-gray-900">Features:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Premium quality materials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Free worldwide shipping</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>30-day money back guarantee</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-600">
                <div className="flex justify-between items-center">
                  <span>SKU: {product.id.toString().padStart(6, '0')}</span>
                  <span>In stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
