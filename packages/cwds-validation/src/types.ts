export interface IValidationFn {
  (value: any, errMsg?: string): string | false;
}
