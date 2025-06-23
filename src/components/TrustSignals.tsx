
import { Shield, CheckCircle, Star, Wrench } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    {
      icon: Shield,
      title: "Every Car Inspected",
      description: "Professional 20-point safety inspection on every vehicle"
    },
    {
      icon: Wrench,
      title: "Quality Service",
      description: "All cars are thoroughly cleaned and serviced before sale"
    },
    {
      icon: CheckCircle,
      title: "Fair Pricing",
      description: "No hidden fees, no haggling. The price you see is the price you pay"
    },
    {
      icon: Star,
      title: "Local & Trusted",
      description: "Family-owned business serving our community with integrity"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600">
            We're different from other dealerships. Here's how.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <signal.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {signal.title}
              </h3>
              <p className="text-gray-600">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
