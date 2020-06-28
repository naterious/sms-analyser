import ExtendableError from 'es6-error';

export class DataError extends ExtendableError {
  data: object;

  constructor(message: string, data?: object) {
    super(message);
    if (data) {
      this.data = data;
    }
  }
}

export class RequestValidationError extends DataError {
  public readonly status: number = 400;
}

export class ProcessingError extends DataError {
  public readonly status: number = 422;
}