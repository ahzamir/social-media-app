import express from "express";
import {
    createPost,
    getPosts,
    toggleLike,
    addComment,
} from "../controllers/postController.js";
import auth from "../middleware/auth.js";
const postRoutes = express.Router();

postRoutes.post("/", auth, createPost);
postRoutes.get("/", auth, getPosts);
postRoutes.put("/:id/like", auth, toggleLike);
postRoutes.post("/:id/comment", auth, addComment);

export default postRoutes;