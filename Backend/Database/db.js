import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config(); // Make sure this is at the top

const DB_URI = process.env.DB_URI;

const connectDB = async ()=> {
  
  try{
        await mongoose.connect(DB_URI, {
           useNewUrlParser: true,
           useUnifiedTopology: true
      })
     .then(() => console.log("MongoDB connected"))
     .catch(err => console.log("MongoDB connection error:", err));
     }catch(err){
          console.log("Error connecting to MongoDB:", err);
      }
   }
export default connectDB;