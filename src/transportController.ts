import  {Request,Response} from "express";
import * as CarsServices from "./models/cars/cars.service";
import {Cars} from "./models/cars/cars.interface";
import {Car} from "./models/cars/car.interface";

//** RETURN ALL cars */
//** URL : http://127.0.0.1:3000/api/cars */
exports.getCars=async (req:Request,res:Response)=>{ 

    let Cars:Cars = await CarsServices.findAll();
    res.status(200).send(Cars) 
};

//** FIND car by id */
//** read request parameters */
//** URL : http://127.0.0.1:3000/api/cars/1 */
exports.getCarDetails=async (req:Request,res:Response)=>{ 

    let carId:number = parseInt(req.params.number);

    let Car:Car = await CarsServices.find(carId);
    res.status(200).send(Car)  
};

//** ADD car */
/***  {
    "name": "corola",
    "year": "2021",
    "maker": "Toyota",
    "country": "USA",
    "description": ""
} **/
//** read request parameters */
//** URL : http://127.0.0.1:3000/api/cars (POST METHOD)*/
exports.addCar=async (req:Request,res:Response)=>{ 

    let car:Car = req.body;
    CarsServices.add(car);

    let Cars:Cars = await CarsServices.findAll();
    res.status(200).send(Cars)  
};

/***  {
    "id":3,
    "name": "corola",
    "year": "2021",
    "maker": "Toyota",
    "country": "USA",
    "description": ""
} **/
//** UPDATE car by id */
//** read request parameters */
//** URL : http://127.0.0.1:3000/api/cars (PUT METHOD)*/
exports.updateCar=async (req:Request,res:Response)=>{ 
 
    let car:Car = req.body;

    await CarsServices.update(car.id,car);
    res.status(200).send(`Car with number ${car.id} is updated successfully`)   
};

//** DELETE car by id */
//** read request parameters */
//** URL : http://127.0.0.1:3000/api/cars/1 (DELETE METHOD)*/
exports.deleteCar=async (req:Request,res:Response)=>{ 

    let carId:number = parseInt(req.params.number);

    await CarsServices.remove(carId);
    res.status(200).send(`Car with number ${carId} is deleted successfully`)  
};









 
//** read request query parameters */
exports.getCarName=(req:Request,res:Response)=>{ res.send("Car name   : "+ req.query.name) };









exports.getPlans=(req:Request,res:Response)=>{res.send("Plans")};

exports.getShips=(req:Request,res:Response)=>{res.send({machine:"ships"})};

exports.getBicycles=(req:Request,res:Response)=>{res.status(200).send("Bicycles")};

exports.getError=(req:Request,res:Response)=>{res.status(400).send("error")};