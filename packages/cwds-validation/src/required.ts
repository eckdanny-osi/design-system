import { IValidationFn } from './types';
import { MESSAGE } from './';

export function REQUIRED(): IValidationFn {
  return (value: any, errMsg: string = MESSAGE.REQUIRED) =>
    (value == null || value.length === 0) && errMsg;
}
