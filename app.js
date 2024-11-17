import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
    res.send("Welcome to the MERN Social API");
});
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the MERN Social API");
});

export default app;