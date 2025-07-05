import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, User, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { animateNavbar } from '@/lib/gsap';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state } = useCart();
  const location = useLocation();

  useEffect(() => {
    animateNavbar();
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">G</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              GlassGrid
            </span>
          </Link>

          {/* Enhanced desktop navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-blue-600'
                    : 'text-slate-700 hover:text-blue-600'
                } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  isActive(link.path) ? 'after:scale-x-100' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Enhanced action buttons */}
          <div className="flex items-center space-x-2">
            <button className="p-3 glass-subtle rounded-xl text-slate-700 hover:text-blue-600 hover:glass-card transition-all duration-300 hover:scale-110">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-3 glass-subtle rounded-xl text-slate-700 hover:text-blue-600 hover:glass-card transition-all duration-300 hover:scale-110">
              <User className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="relative p-3 glass-subtle rounded-xl text-slate-700 hover:text-blue-600 hover:glass-card transition-all duration-300 hover:scale-110"
            >
              <ShoppingBag className="w-5 h-5" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-lg">
                  {state.itemCount}
                </span>
              )}
            </Link>

            {/* Enhanced mobile menu button */}
            <button
              className="md:hidden p-3 glass-subtle rounded-xl text-slate-700 hover:text-blue-600 hover:glass-card transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Enhanced mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-strong border-t border-white/10 shadow-xl rounded-b-2xl mt-2">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-blue-600 glass-card'
                      : 'text-slate-700 hover:text-blue-600 hover:glass-subtle'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
