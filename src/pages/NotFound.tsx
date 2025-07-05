import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl lg:text-9xl font-bold text-primary/20 mb-4">404</div>
            <div className="relative inline-block">
              <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Search className="w-16 h-16 text-muted-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl">?</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for seems to have wandered off. Don't worry though, 
            our collection is still here and waiting for you!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/">
              <Button size="lg" className="group">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" size="lg" className="group">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Browse Products
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t pt-8">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <Link 
                to="/shop" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                All Products
              </Link>
              <Link 
                to="/shop?category=t-shirts" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                T-Shirts
              </Link>
              <Link 
                to="/shop?category=dresses" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Dresses
              </Link>
              <Link 
                to="/shop?category=jackets" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Jackets
              </Link>
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link 
                to="/cart" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Shopping Cart
              </Link>
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Featured Items
              </Link>
            </div>
          </div>

          {/* Fun Message */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Pro tip:</strong> Use our search feature to find exactly what you're looking for, 
              or check out our featured collections on the homepage!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
