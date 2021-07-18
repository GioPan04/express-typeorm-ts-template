import { RequestHandler } from "express";

const notFound: RequestHandler = (req, res) => {
    res.status(404).json({error: "Method not found"});
};

export default notFound;