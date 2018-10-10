import React from 'react';
import { shallow } from 'enzyme';
import Col from './Col';

describe('Col', () => {
  it('renders', () => {
    const wrapper = shallow(<Col />);
    expect(!!wrapper).toBe(true);
  });

  it('has a default cssModule', () => {
    const wrapper = shallow(<Col />);
    expect(wrapper.prop('cssModule')).not.toBeUndefined();
  });
});
