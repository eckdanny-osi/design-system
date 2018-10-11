import { getIcon } from './icon-helpers';

describe('getIcon', () => {
  it('returns the contextual icon', () => {
    [
      ['success', 'check-circle'],
      ['info', 'info-circle'],
      ['warning', 'exclamation-triangle'],
      ['danger', 'exclamation-triangle'],
      ['dne', 'check'],
      ['', 'check'],
    ].map(([key, value]) => expect(getIcon(key)).toBe(value));
  });
});
