
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight">
              <span className="text-brand-teal">Sustainable</span> Tech,{" "}
              <span className="text-brand-teal">Sensible</span> Prices
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Buy, sell, and trade quality refurbished electronics. Extend the life of tech products and reduce e-waste while saving money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90">
                <Link to="/products">Find Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
                <Link to="/sell">Sell Your Device</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-medium text-xs">T</div>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-medium text-xs">S</div>
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 font-medium text-xs">C</div>
              </div>
              <p className="text-sm text-gray-600">
                Join 3,500+ users saving the planet
              </p>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1500&q=80"
              alt="Electronics refurbishment workbench"
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-green animate-pulse"></span>
              <span className="text-sm font-medium">42 Products Just Listed</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-3xl font-bold text-brand-teal">1200+</p>
            <p className="text-sm text-gray-600">Products Traded</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-brand-teal">940kg</p>
            <p className="text-sm text-gray-600">E-Waste Saved</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-brand-teal">$215K</p>
            <p className="text-sm text-gray-600">Customer Savings</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-brand-teal">2.1K</p>
            <p className="text-sm text-gray-600">Verified Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
