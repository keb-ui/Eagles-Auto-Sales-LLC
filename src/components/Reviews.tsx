
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Maria T.",
      location: "Cary, NC",
      rating: 5,
      text: "I just moved here and didn't know how to buy a car. Eagle Auto Sales helped me a lot. They were kind and explained everything. I got a good car and didn't feel rushed. I'm very happy!"
    },
    {
      name: "Jamal R.",
      location: "Garner, NC",
      rating: 5,
      text: "These folks really care. I didn't have much money, but they helped me find a good, safe car for my daughter. It runs great and they even checked in with me later. Good people."
    },
    {
      name: "Ashley D.",
      location: "Apex, NC",
      rating: 5,
      text: "Best place I've ever bought a car. They were honest about everything and didn't hide any problems. I like buying from a small family business. I'll be back next time."
    },
    {
      name: "Kevin L.",
      location: "Knightdale, NC",
      rating: 5,
      text: "You can tell they work hard and care about doing things right. The car I bought was clean and priced fairly. They didn't pressure me at all. Great service."
    }
  ];

  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Real reviews from happy customers in the Triangle area
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-3">
                <div className="flex space-x-1 mr-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
