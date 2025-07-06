
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle, Phone, MessageCircle, Calendar, ExternalLink, Car, Gauge, Fuel, Settings } from "lucide-react";
import { Car as CarType } from "@/data/carsData";

interface CarDetailModalProps {
  car: CarType | null;
  isOpen: boolean;
  onClose: () => void;
}

const CarDetailModal = ({ car, isOpen, onClose }: CarDetailModalProps) => {
  if (!car) return null;

  const handlePhoneCall = () => {
    window.location.href = "tel:+19194144677";
  };

  const handleFacebookMessage = () => {
    window.open("https://www.facebook.com/EaglesAutoSalesLLC?mibextid=wwXIfr&rdid=U9bIqHdHEU1jIc7h&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19BPqFJfYx%2F%3Fmibextid%3DwwXIfr#", "_blank");
  };

  const handleScheduleTestDrive = () => {
    const message = `Hi! I'm interested in scheduling a test drive for the ${car.year} ${car.make} ${car.model} listed at $${car.price.toLocaleString()}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://www.facebook.com/EaglesAutoSalesLLC?mibextid=wwXIfr&rdid=U9bIqHdHEU1jIc7h&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19BPqFJfYx%2F%3Fmibextid%3DwwXIfr#${encodedMessage}`, "_blank");
  };

  const handleCraigslistView = (url: string) => {
    window.open(url, "_blank");
  };

  // Use the images array if it exists, otherwise fall back to single image
  const carImages = car.images || [car.image];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {car.year} {car.make} {car.model}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {carImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${car.year} ${car.make} ${car.model} - Image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <Badge 
                        className={`absolute top-4 right-4 text-sm px-2 py-1 ${
                          car.condition === 'Excellent' ? 'bg-green-500' : 
                          car.condition === 'Very Good' ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}
                      >
                        {car.condition}
                      </Badge>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {carImages.length > 1 && (
                <>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </>
              )}
            </Carousel>
          </div>

          {/* Car Details */}
          <div className="space-y-6">
            {/* Price and Mileage */}
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-blue-600">
                ${car.price.toLocaleString()}
              </span>
              <div className="flex items-center text-gray-600">
                <Gauge className="w-5 h-5 mr-2" />
                <span className="text-lg">{car.mileage.toLocaleString()} miles</span>
              </div>
            </div>

            {/* Vehicle Specifications */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Car className="w-5 h-5 mr-3 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Engine</p>
                  <p className="font-semibold">{car.engineType}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Settings className="w-5 h-5 mr-3 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Transmission</p>
                  <p className="font-semibold">{car.transmission}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Fuel className="w-5 h-5 mr-3 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Fuel Type</p>
                  <p className="font-semibold">{car.fuelType}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Gauge className="w-5 h-5 mr-3 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Fuel Economy</p>
                  <p className="font-semibold">{car.fuelEconomy}</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Vehicle Features</h3>
              <div className="space-y-2">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            {car.description && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {car.description}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 animate-fade-in"
                onClick={handleScheduleTestDrive}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Test Drive
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleFacebookMessage}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message Us
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
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
      </DialogContent>
    </Dialog>
  );
};

export default CarDetailModal;
