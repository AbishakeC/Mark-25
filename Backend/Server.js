import express from 'express';      
import dotenv from 'dotenv';

//Database Connection
import connectDB from './Database/db.js';
connectDB();

//App Config
const app = express();
dotenv.config();

//Port Settings
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

