
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Us – Eagle Auto Sales LLC
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-4">
                  At Eagle Auto Sales LLC, we're more than just a car dealership—we're a family. 
                  As first-generation immigrants, we know what it means to work hard, start from nothing, 
                  and build something meaningful with honesty and respect. That same mindset is what built this business.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Simple Mission:</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Make buying a used car affordable, honest, and stress-free for everyday people like us.
                </p>
                
                <p className="text-lg text-gray-600 mb-6">
                  We know the car market can feel overwhelming—especially when you're new to the country 
                  or living on a tight budget. That's why we focus on transparency, fair pricing, and personal service. 
                  Every vehicle we sell is inspected, cleaned, and listed with honest details—no hidden issues, no pushy tactics.
                </p>
                
                <p className="text-lg text-gray-600 mb-6">
                  We take pride in treating every customer like family. Whether you're buying your first car, 
                  upgrading for your growing household, or just need reliable transportation, we're here to help 
                  you every step of the way.
                </p>
                
                <p className="text-lg font-semibold text-gray-900">
                  Because at Eagle Auto Sales, your trust is our reputation—and we don't take that lightly.
                </p>
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
