import express from 'express';      
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));