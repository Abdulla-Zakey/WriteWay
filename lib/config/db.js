import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Load values from .env

export const ConnectDB = async () => {
    // console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debug line
    // console.log("MONGODB_URI type:", typeof process.env.MONGODB_URI);
    
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected");
}