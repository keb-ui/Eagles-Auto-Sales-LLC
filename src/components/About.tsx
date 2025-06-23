
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Simple Promise
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  We started this dealership because we were tired of the games, hidden fees, 
                  and pressure tactics that make buying a car stressful.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our approach is simple: find good cars, inspect them thoroughly, price them fairly, 
                  and let you decide without pressure. If something's not right, we'll make it right.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">✓ No pressure sales</p>
                  <p className="font-semibold text-gray-900">✓ Transparent pricing</p>
                  <p className="font-semibold text-gray-900">✓ Quality you can trust</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Financing Available</h3>
                <p className="mb-4">
                  We work with local banks and offer in-house payment plans to help you get the car you need.
                </p>
                <ul className="space-y-2">
                  <li>• Bad credit? We can help</li>
                  <li>• Quick approval process</li>
                  <li>• Competitive rates</li>
                  <li>• Flexible terms</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
