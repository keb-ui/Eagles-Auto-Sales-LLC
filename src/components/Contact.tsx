
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Find Your Car?
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch to schedule a test drive or ask any questions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">(555) 123-4567</p>
                    <p className="text-gray-600 text-sm">Call or text anytime</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Facebook Messenger</p>
                    <p className="text-gray-600 text-sm">Fast response during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">123 Main Street</p>
                    <p className="text-gray-600 text-sm">Downtown, Your City 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Mon-Fri: 9am-6pm</p>
                    <p className="font-semibold">Sat: 9am-4pm</p>
                    <p className="text-gray-600 text-sm">Closed Sundays</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Visit Our Lot</h3>
              
              <p className="text-blue-100 mb-6">
                All our cars are parked at our small lot downtown. No appointment needed - 
                just stop by during business hours to take a look!
              </p>
              
              <p className="text-blue-100 mb-6">
                Want to test drive a specific car? Give us a call or message us first 
                to make sure it's available.
              </p>
              
              <div className="space-y-3">
                <Button variant="secondary" size="lg" className="w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (555) 123-4567
                </Button>
                <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-blue-600">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message on Facebook
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
