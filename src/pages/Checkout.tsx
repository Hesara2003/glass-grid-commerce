
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Checkout = () => {
  const { state } = useCart();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  if (state.items.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Checkout submitted:', formData);
    alert('Order placed successfully! Thank you for your purchase.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/cart"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Cart</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-white/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Address</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white/60 border border-white/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white/60 border border-white/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-white/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white/60 border border-white/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white/60 border border-white/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP code"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white/60 border border-white/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Information</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-white/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="text"
                  name="nameOnCard"
                  placeholder="Name on card"
                  value={formData.nameOnCard}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-white/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white/60 border border-white/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white/60 border border-white/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              {/* Items */}
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${(state.total * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
                  <span>Total</span>
                  <span>${(state.total * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                Complete Order
              </button>

              <div className="mt-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <span>🔒</span>
                  <span>Your payment information is secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
