import { NextFunction, Response, Request } from 'express';
import { AppError } from '../interfaces/appError.js';

const nameToStatusCode = {
  BadRequest: 400,
  NotFound: 404,
};

export default function handleError(err: AppError, req: Request, res: Response, next: NextFunction) {
  console.log(err);

  if (err.name) {
    return res.status(nameToStatusCode[err.name]).send(err.message);
  }

  res.status(500).send('Internal Server Error.');
}
