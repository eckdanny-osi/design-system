import { IValidationFn } from './types';
import { MESSAGE } from './';

export function MIN_LENGTH(length: number): IValidationFn {
  return (value: any, errMsg: string = MESSAGE.MIN_LENGTH) =>
    !(length <= (value as string).length) && errMsg;
}
