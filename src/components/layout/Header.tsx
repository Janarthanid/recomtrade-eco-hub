
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-brand-teal">
              ReComTrade
            </span>
          </Link>

          {!isMobile && (
            <nav className="flex gap-4">
              <Link to="/products" className="text-sm font-medium hover:text-primary">
                Products
              </Link>
              <Link to="/sell" className="text-sm font-medium hover:text-primary">
                Sell
              </Link>
              <Link to="/bulk-orders" className="text-sm font-medium hover:text-primary">
                Bulk Orders
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary">
                About Us
              </Link>
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          {!isMobile && (
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-8 w-[200px] md:w-[300px]"
              />
            </div>
          )}

          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>

          <Link to="/auth">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          {isMobile && (
            <Button variant="outline" size="icon" className="ml-2">
              <Search className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
