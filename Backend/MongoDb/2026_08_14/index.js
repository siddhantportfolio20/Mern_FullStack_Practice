import express from 'express';
import connectDB from './db.js';

import 'dotenv/config'
// or
// import { configDotenv } from 'dotenv';


const app = express()

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('API is working')
})
connectDB()

app.listen(PORT, ()=>{
    console.log(`Server is running on Port : ${PORT}`);
})

