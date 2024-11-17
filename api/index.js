import app from "../app";

const handeler = async (req, res) => {
    await app(req, res);
}

export default handeler;