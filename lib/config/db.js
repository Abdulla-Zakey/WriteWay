import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Load values from .env

export const ConnectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
}