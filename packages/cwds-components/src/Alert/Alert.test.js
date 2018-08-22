import React from 'react';
import { shallow } from 'enzyme';
import Alert from './';
import { getIcon } from './Alert';
import { ICON_NAMES } from '../Icon';

describe('Alert', () => {
  it('renders', () => {
    const wrapper = shallow(<Alert />);
    expect(!!wrapper).toBe(true);
  });
});

describe('getIcon', () => {
  it('returns the contextual icon', () => {
    [
      ['success', ICON_NAMES.checkCircle],
      ['info', ICON_NAMES.infoCircle],
      ['warning', ICON_NAMES.error],
      ['danger', ICON_NAMES.error],
      ['dne', ICON_NAMES.check],
      ['', ICON_NAMES.check],
    ].map(([key, value]) => expect(getIcon(key)).toBe(value));
  });
});
