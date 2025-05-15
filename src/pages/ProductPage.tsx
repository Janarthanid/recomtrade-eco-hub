
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock product details - in a real app, this would come from an API
const product = {
  id: 1,
  name: "Dell OptiPlex 7050 Desktop",
  condition: "Excellent",
  price: 329.99,
  originalPrice: 599.99,
  images: [
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  ],
  badge: "Top Rated",
  co2Saved: "22kg",
  description: "Powerful refurbished Dell OptiPlex 7050 Desktop with excellent performance for everyday office tasks and light gaming. This computer has been thoroughly tested and certified.",
  warranty: "1 Year",
  seller: {
    name: "TechRenewal Solutions",
    rating: 4.8,
    totalSales: 589,
    joined: "Jan 2022",
    isVerified: true,
  },
  specifications: {
    processor: "Intel Core i5-7500 (3.4GHz)",
    ram: "16GB DDR4",
    storage: "512GB SSD",
    graphics: "Intel HD Graphics 630",
    operatingSystem: "Windows 10 Pro",
    ports: "6× USB 3.0, 4× USB 2.0, 1× HDMI, 1× DisplayPort, 1× Ethernet",
  },
  includesAccessories: true,
  accessoriesIncluded: ["Power Cable", "HDMI Cable", "Wireless Keyboard and Mouse"],
};

const conditionColors: Record<string, string> = {
  "Excellent": "bg-green-100 text-green-800",
  "Very Good": "bg-blue-100 text-blue-800",
  "Good": "bg-yellow-100 text-yellow-800",
  "Fair": "bg-orange-100 text-orange-800",
};

const ProductPage = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart`,
    });
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border">
              <img 
                src={mainImage} 
                alt={product.name} 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, i) => (
                <div 
                  key={i} 
                  className={`aspect-square cursor-pointer rounded-md border overflow-hidden ${image === mainImage ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => setMainImage(image)}
                >
                  <img src={image} alt={`Product view ${i+1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-3 mt-2">
                <span className={`inline-block px-2 py-1 rounded text-xs ${conditionColors[product.condition]}`}>
                  {product.condition}
                </span>
                {product.badge && (
                  <Badge variant="secondary" className="bg-brand-orange text-white">
                    {product.badge}
                  </Badge>
                )}
                <span className="text-xs flex items-center gap-1 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                  {product.co2Saved} CO₂ saved
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">${product.price}</span>
              <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
              <span className="text-sm text-green-600">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% off
              </span>
            </div>

            <Separator />

            <p className="text-gray-600">{product.description}</p>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Quantity</span>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="px-4">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= 10}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium">Warranty</span>
                <span>{product.warranty}</span>
              </div>

              <Button onClick={handleAddToCart} className="w-full">Add to Cart</Button>
              
              <Button variant="outline" className="w-full flex items-center gap-2">
                Request Bulk Quote <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-semibold">Seller Information</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{product.seller.name}</span>
                  {product.seller.isVerified && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <Check className="h-3 w-3 mr-1" /> Verified
                    </Badge>
                  )}
                </div>
                <span className="text-sm text-gray-500">Member since {product.seller.joined}</span>
              </div>
              <div className="text-sm text-gray-600">
                {product.seller.rating} stars | {product.seller.totalSales} sales
              </div>
            </div>

            <Separator />

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="specifications">
                <AccordionTrigger>Technical Specifications</AccordionTrigger>
                <AccordionContent>
                  <dl className="grid grid-cols-1 gap-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="grid grid-cols-2">
                        <dt className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</dt>
                        <dd className="text-gray-600">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="what-included">
                <AccordionTrigger>What's Included</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {product.accessoriesIncluded.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping-returns">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-2">Free shipping on all orders over $500.</p>
                  <p className="text-gray-600">30-day return policy for all products in original condition.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductPage;
