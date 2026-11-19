import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { CheckCircle, Phone, MessageCircle, Calendar, ExternalLink, Car, Gauge, Fuel, Settings } from "lucide-react";
import { Car as CarType } from "@/data/carsData";
import { cn } from "@/lib/utils";

interface CarDetailModalProps {
  car: CarType | null;
  isOpen: boolean;
  onClose: () => void;
}

const CarDetailModal = ({ car, isOpen, onClose }: CarDetailModalProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  useEffect(() => { setCurrent(0); }, [car?.id]);

  if (!car) return null;

  const handleTextMessage = () => { window.location.href = "sms:+19194144677"; };
  const carImages = car.images || [car.image];

  const specs = [
    { icon: Car, label: "Engine", value: car.engineType },
    { icon: Settings, label: "Transmission", value: car.transmission },
    { icon: Fuel, label: "Fuel Type", value: car.fuelType },
    { icon: Gauge, label: "Fuel Economy", value: car.fuelEconomy },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95vw] max-h-[92vh] overflow-y-auto animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {car.year} {car.make} {car.model}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent>
                {carImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <img src={image} alt={`${car.year} ${car.make} ${car.model} - Image ${index + 1}`} className="w-full h-full object-cover" />
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

            {carImages.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
                {carImages.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show photo ${index + 1}`}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                      "flex-shrink-0 w-24 aspect-video overflow-hidden rounded-md border-2 transition-opacity",
                      current === index ? "border-blue-600 opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-wrap justify-between items-center gap-3">
            <span className="text-3xl font-bold text-blue-600">${car.price.toLocaleString()}</span>
            <div className="flex items-center text-gray-600">
              <Gauge className="w-5 h-5 mr-2" />
              <span className="text-lg">{car.mileage.toLocaleString()} miles</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
            {specs.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center">
                <Icon className="w-5 h-5 mr-3 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">{label}</p>
                  <p className="font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Vehicle Features</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {car.features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {car.description && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{car.description}</p>
            </div>
          )}

          <div className="grid sm:grid-cols-3 gap-3">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <a href="sms:+19194144677"><Calendar className="w-5 h-5 mr-2" />Schedule a Test Drive</a>
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="sms:+19194144677"><MessageCircle className="w-5 h-5 mr-2" />Message Us</a>
            </Button>
            <Button size="lg" variant="outline" onClick={handleTextMessage}>
              <Phone className="w-5 h-5 mr-2" />Message Now
            </Button>
          </div>

          {car.craigslistUrl && (
            <Button size="lg" variant="secondary" className="w-full" onClick={() => window.open(car.craigslistUrl, "_blank")}>
              <ExternalLink className="w-5 h-5 mr-2" />View on Craigslist
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarDetailModal;
