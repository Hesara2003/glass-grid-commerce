export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White Tee",
    description: "A timeless white t-shirt made from 100% organic cotton. Perfect for everyday wear with a comfortable fit and premium quality fabric.",
    price: 29.99,
    originalPrice: 39.99,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4036?w=800&h=800&fit=crop"
    ],
    category: "t-shirts",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    brand: "Essential Wear",
    rating: 4.5,
    reviews: 124,
    inStock: true,
    featured: true,
    tags: ["organic", "casual", "basic"]
  },
  {
    id: "2",
    name: "Denim Jacket",
    description: "Vintage-inspired denim jacket with a modern twist. Features classic styling with contemporary fits and premium denim construction.",
    price: 89.99,
    originalPrice: 119.99,
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=800&fit=crop"
    ],
    category: "jackets",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "Light Blue"],
    brand: "Urban Style",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    featured: true,
    tags: ["denim", "vintage", "casual"]
  },
  {
    id: "3",
    name: "Summer Floral Dress",
    description: "Elegant floral print dress perfect for summer occasions. Lightweight fabric with a flattering silhouette and vibrant patterns.",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop"
    ],
    category: "dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral Pink", "Floral Blue", "Floral Yellow"],
    brand: "Bloom Fashion",
    rating: 4.3,
    reviews: 67,
    inStock: true,
    featured: false,
    tags: ["floral", "summer", "elegant"]
  },
  {
    id: "4",
    name: "Athletic Performance Shorts",
    description: "High-performance athletic shorts with moisture-wicking technology. Perfect for workouts, running, and active lifestyle.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1506629905607-45eb4ae8b253?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop"
    ],
    category: "shorts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Gray", "Red"],
    brand: "Active Pro",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    featured: true,
    tags: ["athletic", "performance", "moisture-wicking"]
  },
  {
    id: "5",
    name: "Wool Blend Sweater",
    description: "Cozy wool blend sweater perfect for cold weather. Features a classic crew neck design with premium materials for warmth and comfort.",
    price: 79.99,
    originalPrice: 99.99,
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&h=800&fit=crop"
    ],
    category: "sweaters",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream", "Navy", "Forest Green", "Burgundy"],
    brand: "Cozy Knits",
    rating: 4.4,
    reviews: 93,
    inStock: true,
    featured: false,
    tags: ["wool", "warm", "winter"]
  },
  {
    id: "6",
    name: "Slim Fit Chinos",
    description: "Modern slim-fit chinos crafted from premium cotton twill. Versatile pants that work for both casual and semi-formal occasions.",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=800&fit=crop"
    ],
    category: "pants",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Black", "Olive"],
    brand: "Modern Fit",
    rating: 4.5,
    reviews: 78,
    inStock: true,
    featured: true,
    tags: ["chinos", "slim-fit", "versatile"]
  },
  {
    id: "7",
    name: "Leather Crossbody Bag",
    description: "Genuine leather crossbody bag with adjustable strap. Perfect size for essentials with multiple compartments for organization.",
    price: 129.99,
    originalPrice: 159.99,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop"
    ],
    category: "accessories",
    sizes: ["One Size"],
    colors: ["Brown", "Black", "Tan"],
    brand: "Leather Craft",
    rating: 4.8,
    reviews: 145,
    inStock: true,
    featured: true,
    tags: ["leather", "crossbody", "accessories"]
  },
  {
    id: "8",
    name: "Sneakers Classic White",
    description: "Clean and minimalist white sneakers with premium leather construction. Comfortable cushioning and timeless design.",
    price: 99.99,
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=800&fit=crop"
    ],
    category: "shoes",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Gray"],
    brand: "Step Forward",
    rating: 4.6,
    reviews: 234,
    inStock: true,
    featured: false,
    tags: ["sneakers", "leather", "minimalist"]
  }
];

export const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "t-shirts", name: "T-Shirts", count: products.filter(p => p.category === "t-shirts").length },
  { id: "jackets", name: "Jackets", count: products.filter(p => p.category === "jackets").length },
  { id: "dresses", name: "Dresses", count: products.filter(p => p.category === "dresses").length },
  { id: "shorts", name: "Shorts", count: products.filter(p => p.category === "shorts").length },
];

export const featuredProducts = products.filter(product => product.featured);
