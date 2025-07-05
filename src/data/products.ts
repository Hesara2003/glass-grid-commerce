
import { Product } from '@/context/CartContext';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    rating: 4.8,
    reviews: 324
  },
  {
    id: 2,
    name: "Smart Watch Series 8",
    price: 399,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Advanced smartwatch with health monitoring, GPS, and seamless connectivity.",
    rating: 4.9,
    reviews: 567
  },
  {
    id: 3,
    name: "Minimalist Desk Setup",
    price: 199,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "Furniture",
    description: "Clean, modern desk perfect for home office or creative workspace.",
    rating: 4.7,
    reviews: 198
  },
  {
    id: 4,
    name: "Luxury Leather Bag",
    price: 249,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "Fashion",
    description: "Handcrafted leather bag with premium materials and timeless design.",
    rating: 4.6,
    reviews: 143
  },
  {
    id: 5,
    name: "Professional Camera",
    price: 1299,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64b?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Professional DSLR camera with advanced features for photography enthusiasts.",
    rating: 4.9,
    reviews: 789
  },
  {
    id: 6,
    name: "Modern Table Lamp",
    price: 89,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    category: "Furniture",
    description: "Sleek table lamp with adjustable brightness and contemporary design.",
    rating: 4.5,
    reviews: 234
  },
  {
    id: 7,
    name: "Premium Coffee Maker",
    price: 179,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
    category: "Kitchen",
    description: "Professional-grade coffee maker for the perfect brew every time.",
    rating: 4.7,
    reviews: 432
  },
  {
    id: 8,
    name: "Wireless Charging Station",
    price: 59,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d82?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Fast wireless charging station for multiple devices simultaneously.",
    rating: 4.4,
    reviews: 156
  }
];

export const categories = ["All", "Electronics", "Fashion", "Furniture", "Kitchen"];
