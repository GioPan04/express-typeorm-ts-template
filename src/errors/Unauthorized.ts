import HttpError from "./HttpError";

export default class UnauthorizedError extends HttpError {
    constructor () {
        super(401, 'Unauthorized');
    }
}