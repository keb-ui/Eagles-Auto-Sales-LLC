import { describe, expect, test } from "bun:test";
import { cars } from "./carsData";

describe("November inventory additions", () => {
  const listings = [
    { year: 2005, make: "Toyota", model: "Corolla CE", price: 4880, mileage: 168830, paintColor: "Blue", interiorColor: "Beige", condition: "Not provided" },
    { year: 2004, make: "Toyota", model: "Corolla LE", price: 4675, mileage: 123534, paintColor: "White", interiorColor: "Beige", condition: "2.8" },
    { year: 2015, make: "Chevrolet", model: "Silverado 1500 LT", price: 6935, mileage: 155177, paintColor: "Green", interiorColor: "Black", condition: "2.4" },
    { year: 2007, make: "Honda", model: "CR-V LX", price: 5805, mileage: 157725, paintColor: "Green", interiorColor: "Beige", condition: "3.5" },
  ];

  for (const listing of listings) {
    const findCar = () => cars.find(car => car.year === listing.year && car.make === listing.make && car.model === listing.model);
    test(`${listing.year} ${listing.model} has the exact listed price`, () => {
      expect(findCar()?.price).toBe(listing.price);
    });
    test(`${listing.year} ${listing.model} retains the supplied details`, () => {
      expect(findCar()).toMatchObject(listing);
    });
    test(`${listing.year} ${listing.model} is available`, () => {
      expect(findCar()?.status).toBe("available");
    });
  }
});

describe("Researched specifications", () => {
  const specs = [
    { id: 33, engineType: "1.8L 4-Cylinder", transmission: "4-Speed Auto / 5-Speed Manual (confirm)", fuelType: "Gasoline", fuelEconomy: "26/35 MPG auto; 28/37 manual (city/hwy)" },
    { id: 34, engineType: "1.8L 4-Cylinder", transmission: "4-Speed Auto / 5-Speed Manual (confirm)", fuelType: "Gasoline", fuelEconomy: "25/34 MPG auto; 28/36 manual (city/hwy)" },
    { id: 35, engineType: "5.3L V8", transmission: "6-Speed Automatic", fuelType: "Gasoline / E85 Flex Fuel", fuelEconomy: "16 city / 22 highway MPG (gasoline)", driveType: "4WD" },
    { id: 36, engineType: "2.4L 4-Cylinder", transmission: "5-Speed Automatic", fuelType: "Gasoline", fuelEconomy: "19 city / 26 highway MPG", driveType: "4WD" },
  ];
  for (const expected of specs) {
    test(`vehicle ${expected.id} shows researched specs without guessing its configuration`, () => {
      expect(cars.find(car => car.id === expected.id)).toMatchObject(expected);
    });
  }
});

describe("Supplied vehicle VINs", () => {
  for (const [id, vin] of [[33, "1NXBR32E15Z526769"], [34, "1NXBR38E34Z234577"], [35, "1GCVKREC5FZ244254"], [36, "5J6RE48387L017694"]]) {
    test(`vehicle ${id} retains VIN ${vin}`, () => {
      expect(cars.find(car => car.id === id)?.description).toContain(`VIN: ${vin}.`);
    });
  }
});

describe("CR-V LX approved features", () => {
  const features = ["JVC Touch-Screen Stereo", "Dual-Zone Climate Control", "Automatic Transmission", "4-Wheel Drive", "Fold-Down Rear Seats"];
  test("vehicle 36 lists the features confirmed from its photos", () => {
    expect(cars.find(car => car.id === 36)?.features).toEqual(features);
  });
});