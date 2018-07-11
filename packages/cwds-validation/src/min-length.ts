import { IValidationFn } from './types';
import { MESSAGE } from './';

export function minLength(length: number): IValidationFn {
  return (value: any, errMsg: string = MESSAGE.MIN_LENGTH) =>
    !(length <= (value as string).length) && errMsg;
}
