import { AppError } from '../interfaces/appError.js';

export default function notFoundError(message: string): AppError {
  return {
    name: 'NotFound',
    message,
  };
}
