import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './';

describe('Toggle', () => {
  it('renders', () => {
    const wrapper = shallow(<Toggle />);
    expect(!!wrapper).toBe(true);
  });
});
