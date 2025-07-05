import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, SortAsc, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Checkbox } from '../components/ui/checkbox';
import { Slider } from '../components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../components/ui/sheet';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique brands and sizes from products
  const brands = [...new Set(products.map(p => p.brand))];
  const sizes = [...new Set(products.flatMap(p => p.sizes))];

  // Apply filters and search
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Search term filter
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !product.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !product.brand.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }

      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // Size filter
      if (selectedSizes.length > 0 && !product.sizes.some(size => selectedSizes.includes(size))) {
        return false;
      }

      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      return true;
    });

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Assuming newer products have higher IDs
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      default: // featured
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [searchTerm, selectedCategories, selectedBrands, selectedSizes, priceRange, sortBy]);

  // Handle category selection from URL params
  React.useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categoryParam !== 'all') {
      setSelectedCategories([categoryParam]);
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories(prev => [...prev, categoryId]);
    } else {
      setSelectedCategories(prev => prev.filter(id => id !== categoryId));
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedSizes([]);
    setPriceRange([0, 200]);
    setSearchTerm('');
    setSearchParams({});
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Enhanced Search */}
      <div>
        <label className="text-lg font-semibold mb-4 block text-foreground">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 glass-light border-0 rounded-xl text-lg focus:glass transition-all duration-300"
          />
        </div>
      </div>

      <Separator className="my-6" />

      {/* Enhanced Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Categories</h3>
        <div className="space-y-3">
          {categories.filter(cat => cat.id !== 'all').map((category) => (
            <div key={category.id} className="flex items-center space-x-3 group">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => handleCategoryChange(category.id, !!checked)}
                className="h-5 w-5 rounded-lg"
              />
              <label
                htmlFor={category.id}
                className="text-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer group-hover:text-primary transition-colors duration-300"
              >
                {category.name}
                <span className="text-sm text-foreground/60 ml-2">({category.count})</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      {/* Enhanced Price Range */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Price Range</h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={200}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex items-center justify-between">
            <div className="glass-light rounded-xl px-4 py-2">
              <span className="text-lg font-semibold text-foreground">${priceRange[0]}</span>
            </div>
            <div className="glass-light rounded-xl px-4 py-2">
              <span className="text-lg font-semibold text-foreground">${priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Enhanced Brands */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Brands</h3>
        <div className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-3 group">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedBrands(prev => [...prev, brand]);
                  } else {
                    setSelectedBrands(prev => prev.filter(b => b !== brand));
                  }
                }}
                className="h-5 w-5 rounded-lg"
              />
              <label
                htmlFor={brand}
                className="text-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer group-hover:text-primary transition-colors duration-300"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      {/* Enhanced Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Sizes</h3>
        <div className="grid grid-cols-3 gap-3">
          {sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSizes.includes(size) ? "default" : "outline"}
              size="sm"
              className={`h-10 rounded-xl transition-all duration-300 ${
                selectedSizes.includes(size) 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'glass-light border-0 hover:glass'
              }`}
              onClick={() => {
                if (selectedSizes.includes(size)) {
                  setSelectedSizes(prev => prev.filter(s => s !== size));
                } else {
                  setSelectedSizes(prev => [...prev, size]);
                }
              }}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <Button 
        variant="outline" 
        onClick={clearFilters} 
        className="w-full glass-light border-0 hover:glass h-12 rounded-xl text-lg font-semibold"
      >
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0),
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)
            `,
            backgroundSize: '20px 20px, 60px 60px, 80px 80px',
            backgroundPosition: '0 0, 0 0, 0 0'
          }}
        />
      </div>
      
      {/* Subtle dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/8 via-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/8 via-pink-500/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl animate-pulse delay-500" />
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-primary/20 rounded-full animate-bounce delay-1000" />
          <div className="absolute top-40 right-32 w-3 h-3 bg-secondary/30 rounded-full animate-bounce delay-2000" />
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-accent/25 rounded-full animate-bounce delay-3000" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 glass-card border-0 backdrop-blur-md text-sm px-4 py-2">
              <Grid className="w-4 h-4 mr-2" />
              Shop Collection
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-primary/70 bg-clip-text text-transparent">
                Discover
              </span>{' '}
              Premium Fashion
            </h1>
            
            <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-8">
              Explore our complete collection of premium clothing designed for style, comfort, and sustainability.
            </p>
            
            {/* Quick stats */}
            <div className="flex items-center justify-center gap-8 mt-8 flex-wrap">
              <div className="flex items-center gap-2 glass-light rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-foreground/70">New Arrivals Weekly</span>
              </div>
              <div className="flex items-center gap-2 glass-light rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm text-foreground/70">Free Shipping $50+</span>
              </div>
              <div className="flex items-center gap-2 glass-light rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span className="text-sm text-foreground/70">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-8">
        <div className="flex gap-8">
        {/* Enhanced Desktop Filters Sidebar */}
        <aside className="hidden lg:block w-80 shrink-0">
          <Card className="glass-card border-0 backdrop-blur-xl shadow-2xl rounded-3xl sticky top-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">Filters</h2>
                <Badge variant="secondary" className="glass-light border-0 text-lg px-3 py-1">
                  {filteredProducts.length} items
                </Badge>
              </div>
              <FilterContent />
            </CardContent>
          </Card>
        </aside>

        {/* Enhanced Main Content */}
        <main className="flex-1">
          {/* Enhanced Toolbar */}
          <div className="glass-card border-0 backdrop-blur-xl shadow-xl rounded-3xl p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
              <div className="flex items-center gap-4">
                {/* Enhanced Mobile Filter Button */}
                <Sheet open={showFilters} onOpenChange={setShowFilters}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden glass-light border-0 hover:glass h-12 px-6 rounded-xl">
                      <Filter className="w-5 h-5 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px] glass-card border-0">
                    <SheetHeader>
                      <SheetTitle className="text-2xl font-bold">Filters</SheetTitle>
                      <SheetDescription className="text-lg">
                        Narrow down your search with these filters
                      </SheetDescription>
                    </SheetHeader>
                    <div className="mt-8">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Enhanced View Mode Toggle */}
                <div className="flex glass-light rounded-2xl p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={`rounded-xl h-10 px-4 ${
                      viewMode === 'grid' 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'hover:glass'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={`rounded-xl h-10 px-4 ${
                      viewMode === 'list' 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'hover:glass'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Enhanced Sort & Results Count */}
              <div className="flex items-center gap-6">
                <div className="glass-light rounded-xl px-4 py-2">
                  <span className="text-lg font-semibold text-foreground">
                    {filteredProducts.length} products
                  </span>
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-56 h-12 glass-light border-0 rounded-xl text-lg">
                    <SortAsc className="w-5 h-5 mr-2" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-0 backdrop-blur-xl">
                    <SelectItem value="featured" className="text-lg">Featured</SelectItem>
                    <SelectItem value="newest" className="text-lg">Newest</SelectItem>
                    <SelectItem value="price-low" className="text-lg">Price: Low to High</SelectItem>
                    <SelectItem value="price-high" className="text-lg">Price: High to Low</SelectItem>
                    <SelectItem value="name" className="text-lg">Name A-Z</SelectItem>
                    <SelectItem value="rating" className="text-lg">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Enhanced Active Filters */}
          {(selectedCategories.length > 0 || selectedBrands.length > 0 || selectedSizes.length > 0 || searchTerm) && (
            <div className="glass-card border-0 backdrop-blur-xl shadow-lg rounded-3xl p-6 mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-lg font-semibold text-foreground">Active filters:</span>
                {selectedCategories.map(categoryId => {
                  const category = categories.find(c => c.id === categoryId);
                  return category ? (
                    <Badge 
                      key={categoryId} 
                      variant="secondary" 
                      className="cursor-pointer glass-light border-0 hover:glass text-lg px-4 py-2 rounded-xl" 
                      onClick={() => handleCategoryChange(categoryId, false)}
                    >
                      {category.name} ×
                    </Badge>
                  ) : null;
                })}
                {selectedBrands.map(brand => (
                  <Badge 
                    key={brand} 
                    variant="secondary" 
                    className="cursor-pointer glass-light border-0 hover:glass text-lg px-4 py-2 rounded-xl" 
                    onClick={() => setSelectedBrands(prev => prev.filter(b => b !== brand))}
                  >
                    {brand} ×
                  </Badge>
                ))}
                {selectedSizes.map(size => (
                  <Badge 
                    key={size} 
                    variant="secondary" 
                    className="cursor-pointer glass-light border-0 hover:glass text-lg px-4 py-2 rounded-xl" 
                    onClick={() => setSelectedSizes(prev => prev.filter(s => s !== size))}
                  >
                    {size} ×
                  </Badge>
                ))}
                {searchTerm && (
                  <Badge 
                    variant="secondary" 
                    className="cursor-pointer glass-light border-0 hover:glass text-lg px-4 py-2 rounded-xl" 
                    onClick={() => setSearchTerm('')}
                  >
                    "{searchTerm}" ×
                  </Badge>
                )}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="glass-light border-0 hover:glass h-10 px-4 rounded-xl"
                >
                  Clear all
                </Button>
              </div>
            </div>
          )}

          {/* Enhanced Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                : "space-y-6"
            }>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className={`transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    viewMode === 'list' ? 'flex-row' : ''
                  }`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="glass-card border-0 backdrop-blur-xl shadow-2xl rounded-3xl p-12 max-w-md mx-auto">
                <div className="text-8xl mb-6">🔍</div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">No products found</h3>
                <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
                  Try adjusting your filters or search terms to find what you're looking for
                </p>
                <Button 
                  onClick={clearFilters}
                  className="glass-hover h-14 px-8 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Clear all filters
                </Button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
    </div>
  );
};

export default Shop;
