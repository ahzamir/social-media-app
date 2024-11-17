import app from "../app";

// serverless is a utility that allows you to run Express.js apps on vercel
export default async function (req, res) {
    await app(req, res);
}