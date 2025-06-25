
import CarCard from './CarCard';
import { cars } from '@/data/carsData';

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
        
        <div className="space-y-16">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
