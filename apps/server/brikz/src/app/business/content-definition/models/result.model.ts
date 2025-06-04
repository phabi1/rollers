export class Result {
  readonly isValid: boolean = false;
  readonly errors: string[] = [];

  constructor(isValid: boolean = false, errors: string[] = []) {
    this.isValid = isValid;
    this.errors = errors;
  }

  static success(): Result {
    return new Result(true);
  }
  static failure(errors: string[]): Result {
    return new Result(false, errors);
  }
}
