import React from 'react';
import { shallow } from 'enzyme';
import Col from './';

describe('Col', () => {
  it('renders', () => {
    const wrapper = shallow(<Col />);
    expect(!!wrapper).toBe(true);
  });
});
