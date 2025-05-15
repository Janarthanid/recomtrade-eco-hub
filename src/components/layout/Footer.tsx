
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-teal">ReComTrade</h3>
            <p className="text-sm text-gray-600">
              A sustainable marketplace for buying, selling, and recycling used electronics.
            </p>
            <div className="flex gap-4 text-gray-500">
              {/* Social icons would go here */}
              <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                F
              </span>
              <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                T
              </span>
              <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                I
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-gray-600 hover:text-primary">All Products</Link></li>
              <li><Link to="/category/desktops" className="text-gray-600 hover:text-primary">Desktops</Link></li>
              <li><Link to="/category/laptops" className="text-gray-600 hover:text-primary">Laptops</Link></li>
              <li><Link to="/category/monitors" className="text-gray-600 hover:text-primary">Monitors</Link></li>
              <li><Link to="/category/accessories" className="text-gray-600 hover:text-primary">Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Sell</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sell" className="text-gray-600 hover:text-primary">List an Item</Link></li>
              <li><Link to="/bulk-selling" className="text-gray-600 hover:text-primary">Bulk Selling</Link></li>
              <li><Link to="/seller-dashboard" className="text-gray-600 hover:text-primary">Seller Dashboard</Link></li>
              <li><Link to="/selling-guide" className="text-gray-600 hover:text-primary">Selling Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-600 text-center">
          <p>&copy; {new Date().getFullYear()} ReComTrade. All rights reserved.</p>
          <p className="mt-2">Reducing e-waste, one device at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
