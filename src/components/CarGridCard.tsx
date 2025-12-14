
import { Badge } from "@/components/ui/badge";
import { Car as CarType } from "@/data/carsData";

interface CarGridCardProps {
  car: CarType;
  onClick: () => void;
}

const CarGridCard = ({ car, onClick }: CarGridCardProps) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={car.image} 
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-48 object-cover transition-transform duration-300"
        />
        <Badge 
          className={`absolute top-3 right-3 text-sm px-2 py-1 ${
            car.condition === 'Excellent' ? 'bg-green-500' : 
            car.condition === 'Very Good' ? 'bg-blue-500' : 'bg-green-600'
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
          <span className="text-2xl font-bold text-blue-600">
            ${car.price.toLocaleString()}
          </span>
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
