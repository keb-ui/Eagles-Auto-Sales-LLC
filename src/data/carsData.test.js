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