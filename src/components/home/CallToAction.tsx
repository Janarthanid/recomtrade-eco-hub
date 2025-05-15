
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-brand-teal text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to sell your used electronics?</h2>
            <p className="text-white/80 text-lg">
              List your items in minutes and reach thousands of potential buyers. 
              Get fair prices and reduce electronic waste.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-brand-orange hover:bg-brand-orange/90">
                <Link to="/sell">Start Selling</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/selling-guide">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Why Sell with ReComTrade?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center text-brand-teal text-xs mt-0.5">✓</span>
                <span>No listing fees – only pay when your item sells</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center text-brand-teal text-xs mt-0.5">✓</span>
                <span>Secure payment protection for sellers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center text-brand-teal text-xs mt-0.5">✓</span>
                <span>Connect with environmentally conscious buyers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center text-brand-teal text-xs mt-0.5">✓</span>
                <span>Tools to help price and grade your items accurately</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-brand-teal bg-white flex items-center justify-center text-brand-teal font-medium text-xs">J</div>
                <div className="w-8 h-8 rounded-full border-2 border-brand-teal bg-white flex items-center justify-center text-brand-teal font-medium text-xs">S</div>
                <div className="w-8 h-8 rounded-full border-2 border-brand-teal bg-white flex items-center justify-center text-brand-teal font-medium text-xs">A</div>
              </div>
              <p className="text-sm text-white/80">
                Join 2,400+ sellers already on the platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
