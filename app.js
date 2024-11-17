import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import connectDB from "./config/db.js"; // Import the database configuration

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database, then start the server
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => {
    console.error("Failed to connect to database:", error);
});

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

export default app;