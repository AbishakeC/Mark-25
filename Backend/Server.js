import express from 'express';      
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.listen(5000, () => console.log('Server started on port 5000'));