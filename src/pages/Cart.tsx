import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Badge } from '../components/ui/badge';
import { useCart } from '../context/CartContext';
import { useToast } from '../hooks/use-toast';

const Cart = () => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (productId: string, newQuantity: number, size?: string, color?: string) => {
    updateQuantity(productId, newQuantity, size, color);
  };

  const handleRemoveItem = (productId: string, size?: string, color?: string) => {
    removeItem(productId, size, color);
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const shippingCost = state.total >= 50 ? 0 : 9.99;
  const tax = state.total * 0.08; // 8% tax
  const finalTotal = state.total + shippingCost + tax;

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 md:px-6 lg:px-4 py-12 md:py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-4 md:mb-6">
            <ShoppingBag className="w-16 h-16 md:w-24 md:h-24 mx-auto text-muted-foreground" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
            Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
          </p>
          <Link to="/shop">
            <Button size="lg" className="group h-12 md:h-14 px-6 md:px-8 text-sm md:text-base">
              Start Shopping
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-4 py-6 md:py-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Shopping Cart</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Review your items and proceed to checkout
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4">
            <h2 className="text-lg md:text-xl font-semibold">
              Cart Items ({state.itemCount})
            </h2>
            <Button variant="outline" size="sm" onClick={handleClearCart} className="w-full sm:w-auto">
              Clear Cart
            </Button>
          </div>

          <div className="space-y-4">
            {state.items.map((item, index) => (
              <Card key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${index}`} className="overflow-hidden">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="w-full sm:w-20 md:w-24 h-20 md:h-24 rounded-lg overflow-hidden bg-muted shrink-0 mx-auto sm:mx-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-3 md:space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm md:text-base leading-tight">
                            <Link 
                              to={`/product/${item.product.id}`}
                              className="hover:text-primary transition-colors"
                            >
                              {item.product.name}
                            </Link>
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground">
                            {item.product.brand}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-destructive h-8 w-8 md:h-10 md:w-10 self-start"
                          onClick={() => handleRemoveItem(
                            item.product.id, 
                            item.selectedSize, 
                            item.selectedColor
                          )}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Selected Options */}
                      <div className="flex flex-wrap gap-2">
                        {item.selectedSize && (
                          <Badge variant="secondary" className="text-xs">
                            Size: {item.selectedSize}
                          </Badge>
                        )}
                        {item.selectedColor && (
                          <Badge variant="secondary" className="text-xs">
                            Color: {item.selectedColor}
                          </Badge>
                        )}
                      </div>

                      {/* Quantity and Price */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs md:text-sm text-muted-foreground">Qty:</span>
                          <div className="flex items-center border rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(
                                item.product.id,
                                Math.max(1, item.quantity - 1),
                                item.selectedSize,
                                item.selectedColor
                              )}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="px-3 py-1 text-sm min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(
                                item.product.id,
                                item.quantity + 1,
                                item.selectedSize,
                                item.selectedColor
                              )}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="text-left sm:text-right">
                          <div className="font-semibold text-sm md:text-base">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </div>
                          {item.quantity > 1 && (
                            <div className="text-xs text-muted-foreground">
                              ${item.product.price.toFixed(2)} each
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg md:text-xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm md:text-base">
                  <span>Subtotal ({state.itemCount} items)</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-sm md:text-base">
                  <span>Shipping</span>
                  <span>
                    {shippingCost === 0 ? (
                      <Badge variant="secondary" className="text-xs">FREE</Badge>
                    ) : (
                      `$${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm md:text-base">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                {state.total < 50 && (
                  <div className="text-xs md:text-sm text-muted-foreground p-3 bg-muted rounded-lg">
                    Add ${(50 - state.total).toFixed(2)} more for free shipping!
                  </div>
                )}
              </div>

              <Separator />

              <div className="flex justify-between font-semibold text-base md:text-lg">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>

              <div className="space-y-3">
                <Link to="/checkout" className="block">
                  <Button size="lg" className="w-full h-12 md:h-14 text-sm md:text-base">
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                
                <Link to="/shop" className="block">
                  <Button variant="outline" size="lg" className="w-full h-12 md:h-14 text-sm md:text-base">
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              {/* Security Features */}
              <div className="pt-4 border-t">
                <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                    <span>Free returns within 30 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
