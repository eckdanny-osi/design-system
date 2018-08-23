import { IValidationFn } from './types';
import { MESSAGE } from './';

export function maxLength(length: number): IValidationFn {
  return (value: any, errMsg: string = MESSAGE.MAX_LENGTH) =>
    !(length >= (value as string).length) && errMsg;
}
