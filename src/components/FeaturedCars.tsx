
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, MessageCircle, ExternalLink } from "lucide-react";

const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry LE",
    year: 2009,
    price: 5600,
    mileage: 134000,
    image: "/lovable-uploads/ba47ede7-f2e5-4576-9fb7-444bdc87a6da.png",
    features: ["Clean Title", "Excellent Mechanical Condition", "NC Inspection Passed"],
    condition: "Excellent",
    description: "This 2009 Toyota LE has been is in excellent mechanical condition. Has clean title and clean service records. Has a Automatic Transmission. All the features are in great working condition such as A/C heat, cruise control windows. Clean interior & has smooth ride. Clean car with clean title with 134k mileage it runs like new no issues. NC inspection passed and ready to go",
    craigslistUrl: "https://raleigh.craigslist.org/ctd/d/raleigh-2009-toyota-camry-le/7857380414.html"
  },
  {
    id: 2,
    make: "Toyota",
    model: "Tundra SR5",
    year: 2000,
    price: 5500,
    mileage: 241000,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    features: ["Clean Title", "Excellent Mechanical Condition", "NC Inspection Passed"],
    condition: "Good",
    description: "This 2000 Toyota Tundra has been is in excellent mechanical condition. Has clean title and clean service records. Has a Automatic Transmission. All the features are in great working condition such as A/C heat. 241k Miles. NC inspection passed and ready to go."
  },
  {
    id: 3,
    make: "Honda",
    model: "Civic",
    year: 2018,
    price: 14500,
    mileage: 68000,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
    features: ["Clean Title", "Recent Oil Change", "New Tires"],
    condition: "Excellent"
  },
  {
    id: 4,
    make: "Toyota",
    model: "Camry",
    year: 2017,
    price: 16200,
    mileage: 72000,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
    features: ["Single Owner", "Service Records", "Non-Smoker"],
    condition: "Very Good"
  },
  {
    id: 5,
    make: "Nissan",
    model: "Altima",
    year: 2016,
    price: 12900,
    mileage: 78000,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
    features: ["Bluetooth", "Backup Camera", "Good Condition"],
    condition: "Good"
  }
];

const FeaturedCars = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:+19194144677";
  };

  const handleFacebookMessage = () => {
    window.open("https://www.facebook.com/EaglesAutoSalesLLC?mibextid=wwXIfr&rdid=U9bIqHdHEU1jIc7h&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19BPqFJfYx%2F%3Fmibextid%3DwwXIfr#", "_blank");
  };

  const handleCraigslistView = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Current Inventory
          </h2>
          <p className="text-lg text-gray-600">
            Every car is inspected, cleaned, and ready to drive home today
          </p>
        </div>
        
        <div className="space-y-16">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative">
                    <img 
                      src={car.image} 
                      alt={`${car.year} ${car.make} ${car.model}`}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <Badge 
                      className={`absolute top-4 right-4 text-lg px-3 py-1 ${
                        car.condition === 'Excellent' ? 'bg-green-500' : 
                        car.condition === 'Very Good' ? 'bg-blue-500' : 'bg-yellow-500'
                      }`}
                    >
                      {car.condition}
                    </Badge>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {car.year} {car.make} {car.model}
                  </h3>
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-4xl font-bold text-blue-600">
                      ${car.price.toLocaleString()}
                    </span>
                    <span className="text-xl text-gray-600">
                      {car.mileage.toLocaleString()} miles
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {car.description && (
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {car.description}
                    </p>
                  )}
                  
                  <div className="flex gap-3 mb-4">
                    <Button 
                      size="lg" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={handleFacebookMessage}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Message Us
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="flex-1"
                      onClick={handlePhoneCall}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                  </div>
                  
                  {car.craigslistUrl && (
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="w-full"
                      onClick={() => handleCraigslistView(car.craigslistUrl)}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View on Craigslist
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
