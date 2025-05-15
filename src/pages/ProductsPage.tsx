
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

// Mock products
const products = [
  {
    id: 1,
    name: "Dell OptiPlex 7050 Desktop",
    condition: "Excellent",
    price: 329.99,
    originalPrice: 599.99,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    badge: "Top Rated",
    co2Saved: "22kg",
  },
  {
    id: 2,
    name: "HP EliteDesk 800 G3",
    condition: "Very Good",
    price: 299.99,
    originalPrice: 549.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    badge: "Eco Choice",
    co2Saved: "25kg",
  },
  {
    id: 3,
    name: "Lenovo ThinkCentre M900",
    condition: "Good",
    price: 249.99,
    originalPrice: 499.99,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
    co2Saved: "19kg",
  },
  {
    id: 4,
    name: "Apple iMac 27-inch 5K",
    condition: "Excellent",
    price: 899.99,
    originalPrice: 1799.99,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
    badge: "Best Value",
    co2Saved: "32kg",
  },
  {
    id: 5,
    name: "Microsoft Surface Studio",
    condition: "Very Good",
    price: 1299.99,
    originalPrice: 2499.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    badge: "Trending",
    co2Saved: "37kg",
  },
  {
    id: 6,
    name: "HP ProDesk 600 G3",
    condition: "Good",
    price: 219.99,
    originalPrice: 449.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    co2Saved: "18kg",
  },
  {
    id: 7,
    name: "Dell XPS Desktop Special Edition",
    condition: "Excellent",
    price: 789.99,
    originalPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    co2Saved: "28kg",
  },
  {
    id: 8,
    name: "Lenovo IdeaCentre AIO 3",
    condition: "Very Good",
    price: 549.99,
    originalPrice: 799.99,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
    badge: "Limited Stock",
    co2Saved: "22kg",
  },
];

const conditionColors: Record<string, string> = {
  "Excellent": "bg-green-100 text-green-800",
  "Very Good": "bg-blue-100 text-blue-800",
  "Good": "bg-yellow-100 text-yellow-800",
  "Fair": "bg-orange-100 text-orange-800",
};

const ProductsPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">All Products</h1>
            <p className="text-gray-600">Browse our selection of quality refurbished electronics</p>
          </div>
          
          <div className="flex gap-4">
            <div className="relative flex-1 md:max-w-xs">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-9" />
            </div>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </div>
        </div>
        
        {showFilters && (
          <div className="bg-gray-50 rounded-lg p-6 mb-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="text-sm font-medium block mb-2">Category</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="desktops">Desktops</SelectItem>
                  <SelectItem value="laptops">Laptops</SelectItem>
                  <SelectItem value="monitors">Monitors</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-2">Condition</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Any Condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Condition</SelectItem>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="very-good">Very Good</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-2">Price Range</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Any Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Price</SelectItem>
                  <SelectItem value="under-200">Under $200</SelectItem>
                  <SelectItem value="200-500">$200 - $500</SelectItem>
                  <SelectItem value="500-1000">$500 - $1000</SelectItem>
                  <SelectItem value="over-1000">Over $1000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-2">Sort By</label>
              <Select defaultValue="featured">
                <SelectTrigger>
                  <SelectValue placeholder="Featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest Arrivals</SelectItem>
                  <SelectItem value="eco-impact">Highest Eco Impact</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group">
              <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  
                  <div className="absolute top-2 left-2">
                    <span className={`inline-block px-2 py-1 rounded text-xs ${conditionColors[product.condition]}`}>
                      {product.condition}
                    </span>
                  </div>
                  
                  {product.badge && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-brand-orange text-white">
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold truncate">{product.name}</h3>
                  <div className="flex items-baseline mt-2 gap-2">
                    <span className="text-lg font-bold">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="text-sm text-green-600 ml-auto">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                    </span>
                  </div>
                </CardContent>
                
                <div className="p-4 pt-0 border-t flex justify-between items-center">
                  <span className="text-xs flex items-center gap-1 text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                    {product.co2Saved} CO₂ saved
                  </span>
                  <span className="text-xs text-gray-600">Verified Seller</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="mr-2">
            Previous
          </Button>
          <Button variant="outline" className="bg-brand-teal text-white hover:bg-brand-teal/90">
            1
          </Button>
          <Button variant="outline" className="mx-2">
            2
          </Button>
          <Button variant="outline" className="mr-2">
            3
          </Button>
          <Button variant="outline">
            Next
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductsPage;
