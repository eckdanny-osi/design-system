import { minLength, MESSAGE } from '../';
import { IValidationFn } from '../types';

describe('MIN_LENGTH', () => {
  it('returns a callback function', () => {
    expect(typeof minLength(3)).toEqual('function');
  });
  describe('callbackFn', () => {
    let cb: IValidationFn;
    beforeEach(() => (cb = minLength(3)));
    it('returns falsey when valid', () => {
      expect(cb('123')).toBeFalsy();
    });
    it('returns default errMsg when invalid', () => {
      expect(cb('12')).toEqual(MESSAGE.MIN_LENGTH);
    });
    it('accepts a custom errMsg', () => {
      expect(cb('12', 'MSG_TOO_SHORT')).toEqual('MSG_TOO_SHORT');
    });
  });
});
