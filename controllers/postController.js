import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

export const createPost = async (req, res) => {
    try {
        const { content, isPublic } = req.body;
        if (!req.user || !req.user.userId) {
            return res.status(401).json({ message: "User not authenticated" });
        }
        const post = new Post({ userId: req.user.userId, content, isPublic });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPosts = async (req, res) => {
    try {
        const userId = req.user.userId;
        const posts = await Post.find({
            $or: [
                { isPublic: true }, 
                { userId: userId }
            ]
        }).populate("userId", "username");
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Update toggleLike to use req.user.userId
export const toggleLike = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        if (post.likes.includes(req.user.userId)) {
            post.likes.pull(req.user.userId);
        } else {
            post.likes.push(req.user.userId);
        }
        await post.save();
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update addComment to use req.user.userId
export const addComment = async (req, res) => {
    try {
        const { text } = req.body;
        const comment = new Comment({
            postId: req.params.id,
            userId: req.user.userId,
            text,
        });
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
