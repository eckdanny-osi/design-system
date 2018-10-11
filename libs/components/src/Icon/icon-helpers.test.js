import { getIcon } from './icon-helpers';

describe('getIcon', () => {
  it('returns the contextual icon', () => {
    [
      ['success', 'check-circle'],
      ['info', 'info-circle'],
      ['warning', 'error'],
      ['danger', 'error'],
      ['dne', 'check'],
      ['', 'check'],
    ].map(([key, value]) => expect(getIcon(key)).toBe(value));
  });
});
