import HttpError from "./HttpError";

export default class NotFoundError extends HttpError {
    constructor () {
        super(404, 'Not found');
    }
}