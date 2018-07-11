import { required, MESSAGE } from '../';

describe('REQUIRED', () => {
  it('returns a default errMsg', () => {
    expect(required()('')).toEqual(MESSAGE.REQUIRED);
  });
  it('accepts a custom errMsg', () => {
    expect(required()('', 'MY_MSG')).toEqual('MY_MSG');
  });
  it('returns falsey for valid values', () => {
    expect(required()('OKAY')).toBeFalsy();
  });
});
