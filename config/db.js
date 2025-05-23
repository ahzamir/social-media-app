import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true;
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;