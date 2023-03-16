import  express,{Router} from "express";
const router:Router=express.Router();

const transportController= require("./transportController")

// CARS ROUTES
router.get('/cars/:number',transportController.getCarDetails)
router.get('/cars',transportController.getCars)
router.get('/car',transportController.getCarName)

router.post('/cars',transportController.addCar)
router.put('/cars',transportController.updateCar)
router.delete('/cars/:number',transportController.deleteCar)



router.get('/plans',transportController.getPlans)
router.get('/ships',transportController.getShips)
router.get('/bicycles',transportController.getBicycles)
router.get('/error',transportController.getError)


module.exports =router ;
