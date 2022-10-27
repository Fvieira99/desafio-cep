type appErrorNames = 'NotFound' | 'BadRequest';

export interface AppError {
  name: appErrorNames;
  message?: string;
}
