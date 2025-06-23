
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";

const cars = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    make: "Ford",
    model: "Focus",
    year: 2019,
    price: 13800,
    mileage: 45000,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop",
    features: ["Low Mileage", "Warranty Remaining", "Recent Inspection"],
    condition: "Excellent"
  },
  {
    id: 4,
    make: "Nissan",
    model: "Altima",
    year: 2016,
    price: 12900,
    mileage: 78000,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
    features: ["Bluetooth", "Backup Camera", "Good Condition"],
    condition: "Good"
  },
  {
    id: 5,
    make: "Hyundai",
    model: "Elantra",
    year: 2020,
    price: 15900,
    mileage: 32000,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
    features: ["Like New", "Factory Warranty", "Low Miles"],
    condition: "Excellent"
  },
  {
    id: 6,
    make: "Chevrolet",
    model: "Malibu",
    year: 2017,
    price: 13500,
    mileage: 65000,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop",
    features: ["Apple CarPlay", "Remote Start", "Clean Interior"],
    condition: "Very Good"
  }
];

const FeaturedCars = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={`${car.year} ${car.make} ${car.model}`}
                  className="w-full h-48 object-cover"
                />
                <Badge 
                  className={`absolute top-3 right-3 ${
                    car.condition === 'Excellent' ? 'bg-green-500' : 
                    car.condition === 'Very Good' ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}
                >
                  {car.condition}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {car.year} {car.make} {car.model}
                </h3>
                
                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xl font-bold text-blue-600">
                    ${car.price.toLocaleString()}
                  </span>
                  <span className="text-gray-600">
                    {car.mileage.toLocaleString()} miles
                  </span>
                </div>
                
                <div className="space-y-1 mb-4">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Message
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
