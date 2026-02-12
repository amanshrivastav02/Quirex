import express from 'express';
import {dbConnect} from './config/db.js';
import router from './route/userRoute.js';
import adminRoute from './route/adminRoute.js'
import fileUpload from 'express-fileupload';
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path';

dotenv.config();
const app=express();
const __dirname=path.resolve();
app.use(express.json());
app.use(fileUpload());
app.use(cors());
const PORT=process.env.PORT || 9000; 
dbConnect();
app.use("/img",express.static("uploads"));
 app.use('/api',router);
 app.use('/api',adminRoute);

 app.use(express.static(path.join(__dirname, "/frontend/dist")));
 app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
app.listen(PORT,()=>{
    console.log("Server running on port "+PORT ); 
})