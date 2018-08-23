import { maxLength, MESSAGE } from '../';
import { IValidationFn } from '../types';

describe('MAX_LENGTH', () => {
  it('returns a callback function', () => {
    expect(typeof maxLength(3)).toEqual('function');
  });
  describe('callbackFn', () => {
    let cb: IValidationFn;
    beforeEach(() => (cb = maxLength(3)));
    it('returns falsey when valid', () => {
      expect(cb('123')).toBeFalsy();
      expect(cb('1234')).not.toBeFalsy();
    });
    it('returns the default errMsg when invalid', () => {
      expect(cb('1234')).toEqual(MESSAGE.MAX_LENGTH);
    });
    it('accepts a custom errMsg', () => {
      expect(cb('1234', 'MSG_TOO_LONG')).toEqual('MSG_TOO_LONG');
    });
  });
});
