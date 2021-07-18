import { ErrorRequestHandler } from "express";
import HttpError from "../errors/HttpError";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {

    if(err instanceof HttpError) {
        res.status(err.statusCode).json({error: err.jsonError});
        return;
    }

    console.error(err);
    res.status(500).json({error: "Server error"});
};

export default errorHandler;