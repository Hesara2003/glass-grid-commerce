
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BentoGrid = () => {
  const gridItems = [
    {
      id: 1,
      title: "Premium Electronics",
      subtitle: "Latest Tech",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop",
      className: "col-span-2 row-span-2",
      link: "/shop?category=Electronics"
    },
    {
      id: 2,
      title: "Smart Watches",
      subtitle: "Stay Connected",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      className: "col-span-1 row-span-1",
      link: "/shop?category=Electronics"
    },
    {
      id: 3,
      title: "Modern Furniture",
      subtitle: "Minimal Design",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      className: "col-span-1 row-span-1",
      link: "/shop?category=Furniture"
    },
    {
      id: 4,
      title: "Fashion Forward",
      subtitle: "Premium Style",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
      className: "col-span-1 row-span-2",
      link: "/shop?category=Fashion"
    },
    {
      id: 5,
      title: "Kitchen Essentials",
      subtitle: "Chef Quality",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=300&fit=crop",
      className: "col-span-2 row-span-1",
      link: "/shop?category=Kitchen"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Discover Our Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore curated categories designed for modern living
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {gridItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`group relative overflow-hidden rounded-3xl ${item.className} transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 group-hover:from-black/30 group-hover:to-black/50 transition-all duration-500" />
              
              {/* Glass Card */}
              <div className="absolute inset-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col justify-end transform transition-all duration-500 group-hover:bg-white/20 group-hover:border-white/30">
                <div className="text-white">
                  <p className="text-sm font-medium opacity-80 mb-2">{item.subtitle}</p>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Grain Texture Overlay */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
