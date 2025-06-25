
export const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry LE",
    year: 2009,
    price: 5600,
    mileage: 134000,
    images: [
      "/lovable-uploads/ba47ede7-f2e5-4576-9fb7-444bdc87a6da.png",
      "/lovable-uploads/b5716a01-0495-4524-815b-4ddbe24d884a.png",
      "/lovable-uploads/0c7413b2-6886-4801-b77d-d23834d76952.png"
    ],
    image: "/lovable-uploads/ba47ede7-f2e5-4576-9fb7-444bdc87a6da.png",
    features: [
      "Clean Title", 
      "Excellent Mechanical Condition", 
      "NC Inspection Passed",
      "Automatic Transmission",
      "Air Conditioning",
      "Power Windows",
      "Cruise Control",
      "Clean Interior",
      "Smooth Ride"
    ],
    condition: "Excellent",
    description: "This 2009 Toyota LE has been is in excellent mechanical condition. Has clean title and clean service records. Has a Automatic Transmission. All the features are in great working condition such as A/C heat, cruise control windows. Clean interior & has smooth ride. Clean car with clean title with 134k mileage it runs like new no issues. NC inspection passed and ready to go",
    craigslistUrl: "https://raleigh.craigslist.org/ctd/d/raleigh-2009-toyota-camry-le/7857380414.html",
    engineType: "4-Cylinder",
    transmission: "Automatic",
    fuelEconomy: "28 city / 35 highway",
    fuelType: "Gasoline"
  },
  {
    id: 2,
    make: "Toyota",
    model: "Tundra SR5",
    year: 2000,
    price: 5500,
    mileage: 241000,
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
    ],
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    features: [
      "Clean Title", 
      "Excellent Mechanical Condition", 
      "NC Inspection Passed",
      "Automatic Transmission",
      "Air Conditioning",
      "Power Steering",
      "4WD Capability",
      "Towing Package"
    ],
    condition: "Good",
    description: "This 2000 Toyota Tundra has been is in excellent mechanical condition. Has clean title and clean service records. Has a Automatic Transmission. All the features are in great working condition such as A/C heat. 241k Miles. NC inspection passed and ready to go.",
    craigslistUrl: "https://raleigh.craigslist.org/ctd/d/raleigh-2000-toyota-tundra-sr5/7857386739.html",
    engineType: "V8",
    transmission: "Automatic",
    fuelEconomy: "15 city / 20 highway",
    fuelType: "Gasoline"
  },
  {
    id: 3,
    make: "Honda",
    model: "Civic",
    year: 2018,
    price: 14500,
    mileage: 68000,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
    features: [
      "Clean Title", 
      "Recent Oil Change", 
      "New Tires",
      "Bluetooth Connectivity",
      "Backup Camera",
      "Lane Keep Assist",
      "Collision Mitigation",
      "Apple CarPlay"
    ],
    condition: "Excellent",
    engineType: "4-Cylinder Turbo",
    transmission: "CVT",
    fuelEconomy: "32 city / 42 highway",
    fuelType: "Gasoline"
  },
  {
    id: 4,
    make: "Toyota",
    model: "Camry",
    year: 2017,
    price: 16200,
    mileage: 72000,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
    features: [
      "Single Owner", 
      "Service Records", 
      "Non-Smoker",
      "Leather Seats",
      "Sunroof",
      "Premium Audio",
      "Navigation System",
      "Heated Seats"
    ],
    condition: "Very Good",
    engineType: "4-Cylinder",
    transmission: "Automatic",
    fuelEconomy: "30 city / 38 highway",
    fuelType: "Gasoline"
  },
  {
    id: 5,
    make: "Nissan",
    model: "Altima",
    year: 2016,
    price: 12900,
    mileage: 78000,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
    features: [
      "Bluetooth", 
      "Backup Camera", 
      "Good Condition",
      "Power Windows",
      "Power Locks",
      "Keyless Entry",
      "Cruise Control",
      "Air Conditioning"
    ],
    condition: "Good",
    engineType: "4-Cylinder",
    transmission: "CVT",
    fuelEconomy: "27 city / 39 highway",
    fuelType: "Gasoline"
  }
];

export type Car = typeof cars[0];
