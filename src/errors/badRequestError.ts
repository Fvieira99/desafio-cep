import { AppError } from '../interfaces/appError';

export default function badRequestError(message: string): AppError {
  return {
    name: 'BadRequest',
    message,
  };
}
