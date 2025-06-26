
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
      "/lovable-uploads/0c7413b2-6886-4801-b77d-d23834d76952.png",
      "/lovable-uploads/6923c175-46b0-43d1-95f1-49775391d4d2.png",
      "/lovable-uploads/d6ad3405-318e-4d5f-b2cf-54c5e9677365.png",
      "/lovable-uploads/7d42d6e3-3ab4-4b08-bddb-b494101c9268.png",
      "/lovable-uploads/b67a8835-6ef8-4fd0-ac06-b396f42051f2.png",
      "/lovable-uploads/a91fa663-fdb7-48dc-8542-989239487e38.png"
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
      "/lovable-uploads/58803bd9-482e-45b8-a1e7-9681103b5b57.png",
      "/lovable-uploads/53483910-be76-4071-ab5d-234f4cb3c7fd.png",
      "/lovable-uploads/14a1ef5f-2874-4682-bf8d-b058c45a9a7d.png",
      "/lovable-uploads/16c4ce2b-0281-4745-897a-95cb87eab744.png",
      "/lovable-uploads/e7f5e8d9-a9bc-4525-9200-5dc3e59ff2bc.png",
      "/lovable-uploads/8c453e41-e06c-4cce-b8b7-d41abb7286e3.png",
      "/lovable-uploads/02f366f1-1d83-47dc-b4cf-951df38d52ac.png",
      "/lovable-uploads/2f8e884d-3d4f-4150-8ebd-547c2777a900.png",
      "/lovable-uploads/ec5a9aa0-53d2-4da0-ad8d-5b228be48324.png"
    ],
    image: "/lovable-uploads/58803bd9-482e-45b8-a1e7-9681103b5b57.png",
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
