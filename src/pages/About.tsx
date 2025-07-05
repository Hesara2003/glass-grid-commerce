
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            About GlassGrid
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're passionate about bringing you premium products with modern glass design aesthetics
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Story */}
          <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2024, GlassGrid emerged from a simple vision: to create an online shopping experience 
              that mirrors the elegance and sophistication of modern design. We believe that beautiful products 
              deserve equally beautiful presentation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of designers and curators work tirelessly to bring you products that not only function 
              exceptionally but also elevate your everyday experience. Every item in our collection is chosen 
              for its quality, design, and ability to inspire.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To make premium design accessible to everyone. We curate products that combine functionality 
              with aesthetic excellence, ensuring that every purchase enhances your lifestyle while reflecting 
              your personal taste for quality and design.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">Q</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                Every product meets our high standards for materials, craftsmanship, and durability.
              </p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">D</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600 text-sm">
                We believe beautiful design enhances daily life and reflects personal style.
              </p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">S</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Service</h3>
              <p className="text-gray-600 text-sm">
                Exceptional customer service and support throughout your shopping journey.
              </p>
            </div>
          </div>

          {/* Team */}
          <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-gray-600 leading-relaxed">
              Our diverse team brings together expertise in design, technology, and customer experience. 
              We're united by our passion for beautiful products and our commitment to creating an 
              exceptional shopping experience for every customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
