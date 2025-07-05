import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl">Enshift Digital</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting modern, responsive web applications that drive business growth. 
              This e-commerce demo showcases our expertise in React, TypeScript, and modern UI design.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/shop" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Shop All
              </Link>
              <Link 
                to="/shop?category=new-arrivals" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                New Arrivals
              </Link>
              <Link 
                to="/shop?category=sale" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Sale
              </Link>
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Customer Service</h3>
            <nav className="flex flex-col space-y-2">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Size Guide
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Shipping Info
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Returns & Exchanges
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                FAQ
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Track Your Order
              </a>
            </nav>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Connected</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get special offers and updates.
            </p>
            <div className="space-y-2">
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
            
            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@clothstore.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Fashion St, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 ClothStore. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
