import { REQUIRED, MESSAGE } from '../';

describe('REQUIRED', () => {
  it('returns a default errMsg', () => {
    expect(REQUIRED()('')).toEqual(MESSAGE.REQUIRED);
  });
  it('accepts a custom errMsg', () => {
    expect(REQUIRED()('', 'MY_MSG')).toEqual('MY_MSG');
  });
  it('returns falsey for valid values', () => {
    expect(REQUIRED()('OKAY')).toBeFalsy();
  });
});
