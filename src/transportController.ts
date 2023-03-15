import  {Request,Response} from "express";


exports.getCars=(req:Request,res:Response)=>{ res.send("Cars") };
 
//** read request query parameters */
exports.getCarName=(req:Request,res:Response)=>{ res.send("Car name   : "+ req.query.name) };

//** read request parameters */
exports.getCarDetails=(req:Request,res:Response)=>{ res.send("Car Details / Chassis Number  : "+ req.params.number) };

exports.getPlans=(req:Request,res:Response)=>{res.send("Plans")};

exports.getShips=(req:Request,res:Response)=>{res.send({machine:"ships"})};

exports.getBicycles=(req:Request,res:Response)=>{res.status(200).send("Bicycles")};

exports.getError=(req:Request,res:Response)=>{res.status(400).send("error")};