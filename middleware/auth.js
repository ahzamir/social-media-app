import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace("Bearer ", "");
    if (!token) {
        console.log("No token provided");
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        console.log("User authenticated:", req.user); // Log the decoded token
        next();
    } catch (error) {
        console.log("Invalid token", error);
        res.status(400).json({ message: "Invalid token" });
    }
};

export default auth;
