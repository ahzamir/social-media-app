// server.js
import app from "./app.js";
import connectDB from "./config/db.js"; // Import the database configuration

const PORT = process.env.PORT || 5000;

// Connect to the database, then start the server
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => {
    console.error("Failed to connect to database:", error);
});

export default app;