import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

if(!process.env.MONGODB_URI){
    throw new Error(
        "Please provide mongoDB URI in dotenv file!"
    )
}

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connected!")
        
    } catch (error) {
        console.log("MongoDB connection error!",error)
        process.exit(1)
    }
}

export default connectDB