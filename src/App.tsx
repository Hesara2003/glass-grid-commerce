
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { initScrollSmoother, magneticButton } from "@/lib/gsap";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize GSAP ScrollSmoother
    initScrollSmoother();

    // Add magnetic effect to all buttons with magnetic-btn class
    const magneticButtons = document.querySelectorAll('.magnetic-btn');
    const cleanupFunctions: (() => void)[] = [];

    magneticButtons.forEach((button) => {
      if (button instanceof HTMLElement) {
        cleanupFunctions.push(magneticButton(button));
      }
    });

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <BrowserRouter>
            <div id="smooth-wrapper">
              <div id="smooth-content">
                <div className="min-h-screen">
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Footer />
                </div>
              </div>
            </div>
            <Toaster />
            <Sonner />
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
