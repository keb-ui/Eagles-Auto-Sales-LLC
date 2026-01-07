
import { Badge } from "@/components/ui/badge";
import { Car as CarType } from "@/data/carsData";

interface CarGridCardProps {
  car: CarType;
  onClick: () => void;
}

const CarGridCard = ({ car, onClick }: CarGridCardProps) => {
  const isSold = car.status === "sold";
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in ${isSold ? 'opacity-75' : ''}`}
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={car.image} 
          alt={`${car.year} ${car.make} ${car.model}`}
          className={`w-full h-48 object-cover transition-transform duration-300 ${isSold ? 'grayscale' : ''}`}
        />
        {isSold && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Badge className="bg-red-600 text-white text-lg px-4 py-2 font-bold">
              SOLD
            </Badge>
          </div>
        )}
        <Badge 
          className={`absolute top-3 right-3 text-sm px-2 py-1 ${
            car.condition === 'Excellent' ? 'bg-blue-500' : 
            car.condition === 'Very Good' ? 'bg-blue-400' : 'bg-green-500'
          }`}
        >
          {car.condition}
        </Badge>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {car.year} {car.make} {car.model}
        </h3>
        
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">
              ${car.price.toLocaleString()}
            </span>
            {isSold ? (
              <Badge className="bg-red-500 text-white text-xs">Sold</Badge>
            ) : (
              <Badge className="bg-green-500 text-white text-xs">Available</Badge>
            )}
          </div>
          <span className="text-gray-600">
            {car.mileage.toLocaleString()} mi
          </span>
        </div>
        
        <div className="text-sm text-gray-500">
          Click to view details
        </div>
      </div>
    </div>
  );
};

export default CarGridCard;
