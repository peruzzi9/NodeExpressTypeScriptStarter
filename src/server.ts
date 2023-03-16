import  express,{Application,Request,Response} from "express";
const app:Application=express();

const apiRouter=require("./router")

const bodyParser = require("body-Parser")

const port:number=3000;
const host:string="127.0.0.1";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//** auto json pars for request body .... not need to use JSON.parse() */
app.use(bodyParser.json())


app.use('/api',apiRouter)

app.get('/',(req:Request,res:Response)=>{
    res.send(`Hello Server Node js/TypeScript started and running on port ${port}`);
})



app.listen(port,host,()=>{
    console.log(`Server is started and listining to port ${port}`)
})