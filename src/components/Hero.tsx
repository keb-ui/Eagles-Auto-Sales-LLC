
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Honest Cars, Fair Prices
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Skip the hassle. Every car is inspected, cleaned, and fairly priced. 
          <span className="text-blue-600 font-semibold"> 7-day return guarantee.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
            <MessageCircle className="w-5 h-5 mr-2" />
            View Our Cars
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-blue-600 text-blue-600 hover:bg-blue-50">
            <Phone className="w-5 h-5 mr-2" />
            Call Us: (555) 123-4567
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
