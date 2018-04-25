import React from 'react';
import { shallow } from 'enzyme';
import Icon from './';

describe('Icon', () => {
  it('renders', () => {
    const wrapper = shallow(<Icon />);
    expect(!!wrapper).toBe(true);
  });
});
