
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { Car } from "@/data/carsData";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
  );
};

export default CarCard;
