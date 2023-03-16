/**
 * Data Model Interfaces
 */

import { Car } from "./car.interface";
import { Cars } from "./cars.interface";

/**
 * In-Memory Store /// mock data
 */
let carsArray: Cars = {
  1: {
    id: 1,
    name: "Altima",
    year: "2014",
    maker: "Nissan",
    country: "USA",
    description: "",
  },
  2: {
    id: 2,
    name: "X-TRAIL",
    year: "2017",
    maker: "Nissan",
    country: "USA",
    description: "",
  },
  3: {
    id: 3,
    name: "Camry",
    year: "2018",
    maker: "Toyota",
    country: "USA",
    description: "",
  },
};

/**
 * Service Methods
 */
// This is definition to function of type Promise that use Car object and return Car object 
export const add = async (newCar: Car): Promise<Car> => {
    const id = new Date().valueOf();
  
    newCar.id = id;

    carsArray[id] = newCar;
  
    return carsArray[id];
  };

// update the car which has this id number
export const update = async (id: number,CarUpdate: Car): Promise<Car | null> => {
    const Car = await find(id);
  
    if (!Car) {
      return null;
    }
  
    carsArray[id] = CarUpdate ;
  
    return carsArray[id];
  };

  // delete a car by id number
  export const remove = async (id: number): Promise<null | void> => {
    const Car = await find(id);
  
    if (!Car) {
      return null;
    }
  
    delete carsArray[id];
  };


  // return all stored cars
  export const findAll = async (): Promise<Car[]> => Object.values(carsArray);


// find a car by id number
  export const find = async (id: number): Promise<Car> => carsArray[id];