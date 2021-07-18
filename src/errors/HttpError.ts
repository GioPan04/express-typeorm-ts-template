export default abstract class HttpError extends Error {

  constructor (
    public statusCode: number,
    public jsonError: string,
  ) {
    super("Http Error");
  }
}