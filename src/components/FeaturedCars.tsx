
import { useState } from 'react';
import CarGridCard from './CarGridCard';
import CarDetailModal from './CarDetailModal';
import { cars, Car } from '@/data/carsData';

const FeaturedCars = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Current Inventory
          </h2>
          <p className="text-lg text-gray-600">
            Every car is inspected, cleaned, and ready to drive home today
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div 
              key={car.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CarGridCard 
                car={car} 
                onClick={() => handleCarClick(car)} 
              />
            </div>
          ))}
        </div>
      </div>

      <CarDetailModal 
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default FeaturedCars;
