import Express from "express";
import cors from "cors";
import { Request, Response } from "express";

const app = Express();
app.use(cors())
const port=process.env.PORT || 3000;
app.get('/', (req:Request,res:Response)=>{
    res.send('hi therer');
})

console.log(port);
app.listen(3000,()=>{
    console.log("server running on port = ",port)
})