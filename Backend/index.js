import express from 'express';


// connect to database
import connect from './Database/db.js';

const app=express();
const PORT=3500;

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)});
connect();