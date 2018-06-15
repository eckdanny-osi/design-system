import React from 'react';
import { shallow } from 'enzyme';
import InfoTip from './';

describe('InfoTip', () => {
  it('renders', () => {
    const wrapper = shallow(<InfoTip />);
    expect(!!wrapper).toBe(true);
  });
});
