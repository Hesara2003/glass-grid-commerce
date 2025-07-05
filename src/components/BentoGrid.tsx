
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { animateBentoGrid } from '@/lib/gsap';

const BentoGrid = () => {
  useEffect(() => {
    animateBentoGrid();
  }, []);

  const gridItems = [
    {
      id: 1,
      title: "Premium Electronics",
      subtitle: "Latest Innovation",
      description: "Cutting-edge technology meets sophisticated design",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=600&fit=crop&auto=format",
      className: "md:col-span-2 md:row-span-2",
      link: "/shop?category=Electronics"
    },
    {
      id: 2,
      title: "Smart Timepieces",
      subtitle: "Precision Craft",
      description: "Where tradition meets innovation",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format",
      className: "md:col-span-1 md:row-span-1",
      link: "/shop?category=Electronics"
    },
    {
      id: 3,
      title: "Minimal Furniture",
      subtitle: "Pure Form",
      description: "Thoughtfully designed for modern spaces",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&auto=format",
      className: "md:col-span-1 md:row-span-1",
      link: "/shop?category=Furniture"
    },
    {
      id: 4,
      title: "Curated Fashion",
      subtitle: "Timeless Style",
      description: "Contemporary pieces for the modern wardrobe",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop&auto=format",
      className: "md:col-span-1 md:row-span-2",
      link: "/shop?category=Fashion"
    },
    {
      id: 5,
      title: "Kitchen Essentials",
      subtitle: "Culinary Art",
      description: "Professional-grade tools for home chefs",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop&auto=format",
      className: "md:col-span-2 md:row-span-1",
      link: "/shop?category=Kitchen"
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white via-slate-50/30 to-white grain-texture">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced section header */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-headline bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
            Curated Collections
          </h2>
          <p className="text-body text-slate-600 max-w-2xl mx-auto">
            Discover thoughtfully selected categories, each designed to elevate your lifestyle with premium quality and timeless appeal.
          </p>
        </div>

        {/* Enhanced bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          {gridItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`bento-item group relative overflow-hidden rounded-3xl ${item.className} transform transition-all duration-700 hover:scale-[1.02] hover:z-10`}
            >
              {/* Enhanced background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Refined overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/50 group-hover:from-black/20 group-hover:to-black/60 transition-all duration-700" />
              
              {/* Enhanced glass content card */}
              <div className="absolute inset-6 glass-card p-8 flex flex-col justify-end transform transition-all duration-500 group-hover:glass-strong">
                <div className="text-white space-y-3">
                  <div className="transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    <p className="text-sm font-medium opacity-90 text-blue-200">{item.subtitle}</p>
                    <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
                    <p className="text-sm opacity-80 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-sm font-medium">Explore Collection</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Subtle grain texture overlay */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-30 grain-texture" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
