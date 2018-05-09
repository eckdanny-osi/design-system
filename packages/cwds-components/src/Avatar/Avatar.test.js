import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './';

describe('Avatar', () => {
  it('renders', () => {
    const wrapper = shallow(<Avatar />);
    expect(!!wrapper).toBe(true);
  });
});
