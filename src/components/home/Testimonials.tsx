
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "I've sold over 50 refurbished desktops on ReComTrade. The platform makes it easy to reach customers who care about sustainability.",
    author: "Michael Chen",
    role: "IT Consultant",
    avatar: "M",
  },
  {
    quote: "As a startup founder, I was able to equip our entire office with quality refurbished equipment at half the cost of new items.",
    author: "Sarah Johnson",
    role: "Tech Entrepreneur",
    avatar: "S",
  },
  {
    quote: "The condition grading system is spot-on. What I received matched exactly what was described and pictured on the site.",
    author: "David Wilson",
    role: "Small Business Owner",
    avatar: "D",
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-gray-600">
            Join thousands of satisfied buyers and sellers who are making a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-5 h-5 text-brand-orange"
                      >
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-700">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal font-medium">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Based on 2,100+ verified customer reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
