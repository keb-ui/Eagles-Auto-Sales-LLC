import { useState } from 'react';
import CarGridCard from './CarGridCard';
import CarDetailModal from './CarDetailModal';
import { cars, Car } from '@/data/carsData';

const SoldCars = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const soldCars = cars.filter((car) => car.status === 'sold');

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  if (soldCars.length === 0) return null;

  return (
    <section id="sold-vehicles" className="py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sold
          </h2>
          <p className="text-lg text-gray-600">
            Past Sales — Our Sold Inventory
          </p>
          <p className="text-sm font-semibold uppercase tracking-wide text-red-600 mt-3">
            {soldCars.length} sold
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soldCars.map((car, index) => (
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

export default SoldCars;
