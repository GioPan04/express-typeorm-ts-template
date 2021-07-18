import HttpError from "./HttpError";

export default class BadRequestError extends HttpError {
  constructor () {
    super(400, 'Bad request');
  }
}