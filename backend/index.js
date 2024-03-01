import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import dbConfig from './DB/Config.db.js';
import todoRoutes from './Routes/todos.routes.js'

dotenv.config();
const app=express();

app.use(cors(
    {
        origin:"todos-siddesh-jaiswal.vercel.app"
    }
))

app.use(bodyParser.json());

dbConfig();

app.use("/todos",todoRoutes);

app.listen(process.env.PORT || 5000,(req,res)=>{
    console.log("Server started at Port : ",process.env.PORT)
})