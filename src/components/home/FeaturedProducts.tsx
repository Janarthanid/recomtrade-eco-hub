
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data
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
];

const conditionColors: Record<string, string> = {
  "Excellent": "bg-green-100 text-green-800",
  "Very Good": "bg-blue-100 text-blue-800",
  "Good": "bg-yellow-100 text-yellow-800",
  "Fair": "bg-orange-100 text-orange-800",
};

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link to="/products" className="text-brand-teal hover:underline font-medium">
            View All Products
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                
                <CardFooter className="p-4 pt-0 border-t flex justify-between items-center">
                  <span className="text-xs flex items-center gap-1 text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                    {product.co2Saved} CO₂ saved
                  </span>
                  <span className="text-xs text-gray-600">Verified Seller</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
