
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Trash2, ArrowLeft } from "lucide-react";

// We'll use localStorage to store cart items
type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse cart data", error);
      }
    }
    setIsLoading(false);
  }, []);

  // Calculate cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Update quantity of an item
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    toast({
      title: "Cart updated",
      description: "Item quantity has been updated",
    });
  };

  // Remove an item from cart
  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart",
    });
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex items-center gap-2 mb-6">
          <ShoppingCart className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Your Cart</h1>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-pulse">Loading cart...</div>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="text-center py-16 space-y-6">
            <ShoppingCart className="h-16 w-16 mx-auto text-gray-300" />
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>
            <p className="text-gray-500">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products">
              <Button className="mt-4">Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6 flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Shopping Cart ({cartItems.length} items)</h2>
                    <Button 
                      variant="outline" 
                      onClick={clearCart} 
                      className="text-red-500 hover:bg-red-50"
                    >
                      Clear Cart
                    </Button>
                  </div>
                  
                  <Separator />
                  
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 border-b">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-md overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <Link to={`/product/${item.id}`} className="font-semibold hover:text-brand-teal">
                            {item.name}
                          </Link>
                          <div className="mt-2 flex justify-between">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center border rounded">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                >
                                  -
                                </Button>
                                <span className="px-4">{item.quantity}</span>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  +
                                </Button>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:bg-red-50"
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                Remove
                              </Button>
                            </div>
                            <div className="text-lg font-semibold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link to="/products">
                    <Button variant="outline" className="flex items-center gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow p-6 sticky top-20">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Tax</span>
                      <span>${(cartTotal * 0.07).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between font-bold text-lg mb-6">
                    <span>Total</span>
                    <span>${(cartTotal + (cartTotal * 0.07)).toFixed(2)}</span>
                  </div>
                  
                  <Button className="w-full">Proceed to Checkout</Button>
                  
                  <div className="mt-4 text-xs text-gray-500 text-center">
                    By proceeding, you agree to our Terms and Conditions
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default CartPage;
