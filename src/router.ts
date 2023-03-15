import  express,{Router} from "express";
const router:Router=express.Router();

const transportController= require("./transportController")

router.get('/cars',transportController.getCars)
router.get('/car',transportController.getCarName)
router.get('/car/:number',transportController.getCarDetails)
router.get('/plans',transportController.getPlans)
router.get('/ships',transportController.getShips)
router.get('/bicycles',transportController.getBicycles)
router.get('/error',transportController.getError)


module.exports =router ;
