
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const sellFormSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters"),
  category: z.string().min(1, "Please select a category"),
  brand: z.string().min(1, "Please enter the brand"),
  model: z.string().min(1, "Please enter the model number"),
  condition: z.string().min(1, "Please select the condition"),
  price: z.string().min(1, "Please enter the price"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  })
});

type SellFormValues = z.infer<typeof sellFormSchema>;

const SellPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const { toast } = useToast();
  
  const form = useForm<SellFormValues>({
    resolver: zodResolver(sellFormSchema),
    defaultValues: {
      title: "",
      category: "",
      brand: "",
      model: "",
      condition: "",
      price: "",
      description: "",
      acceptTerms: false
    }
  });

  const onSubmit = (data: SellFormValues) => {
    if (images.length === 0) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please upload at least one image of your product",
      });
      return;
    }
    
    console.log("Form submitted:", data, "Images:", images);
    
    toast({
      title: "Listing submitted successfully",
      description: "Your product has been submitted for review",
    });
    
    form.reset();
    setImages([]);
  };

  // Mock function for image upload
  const handleImageUpload = () => {
    // In a real app, this would handle file uploads
    // For now, just adding placeholder images
    const newImage = `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}`;
    setImages([...images, newImage]);
    
    toast({
      title: "Image uploaded",
      description: "Your image has been uploaded successfully",
    });
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Sell Your Electronics</h1>
            <p className="text-gray-600">
              List your used electronics on ReComTrade to find buyers quickly and get the best value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                  <CardDescription>
                    Fill in the details about the product you want to sell
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Product Title</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Dell OptiPlex 7050 Desktop, i7, 16GB RAM" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="desktops">Desktops</SelectItem>
                                  <SelectItem value="laptops">Laptops</SelectItem>
                                  <SelectItem value="monitors">Monitors</SelectItem>
                                  <SelectItem value="accessories">Accessories</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="condition"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Condition</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select condition" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="excellent">Excellent</SelectItem>
                                  <SelectItem value="very-good">Very Good</SelectItem>
                                  <SelectItem value="good">Good</SelectItem>
                                  <SelectItem value="fair">Fair</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="brand"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Brand</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Dell, HP, Lenovo" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="model"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Model Number</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., OptiPlex 7050" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Price ($)</FormLabel>
                            <FormControl>
                              <Input type="number" min="0" placeholder="Enter price in USD" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Product Description</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe your product in detail, including specifications, any defects or issues, age, reason for selling, etc." 
                                className="min-h-32" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div>
                        <p className="mb-2 font-medium">Product Images</p>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {images.map((image, index) => (
                            <div key={index} className="aspect-square bg-gray-100 rounded-md">
                              {/* In a real app, would display the actual image */}
                              <div className="h-full flex items-center justify-center bg-gray-100 text-gray-500">
                                Image {index + 1}
                              </div>
                            </div>
                          ))}
                          {images.length < 5 && (
                            <Button 
                              type="button" 
                              variant="outline" 
                              className="aspect-square flex flex-col items-center justify-center gap-2 h-full"
                              onClick={handleImageUpload}
                            >
                              <Upload className="h-5 w-5" />
                              <span className="text-xs">Upload Image</span>
                            </Button>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">
                          Upload up to 5 images of your product. The first image will be the cover image.
                        </p>
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="acceptTerms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I agree to the terms and conditions, and confirm this item is genuine and legally mine to sell.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full">
                        Submit Listing
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Selling Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium">Take Clear Photos</h4>
                    <p className="text-gray-600">Good lighting and multiple angles help buyers see exactly what they're getting.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Be Honest About Condition</h4>
                    <p className="text-gray-600">Mention any scratches, dents, or functional issues to avoid disputes.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Price Competitively</h4>
                    <p className="text-gray-600">Check similar listings to set a fair market price.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Include All Specs</h4>
                    <p className="text-gray-600">Processor, RAM, storage, and other details help buyers make decisions.</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6">
                <Card className="bg-brand-teal/5">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Need help with bulk selling?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      If you have multiple items to sell, our team can help you list them efficiently.
                    </p>
                    <Button variant="outline" className="w-full">
                      Contact Bulk Sales Team
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SellPage;
