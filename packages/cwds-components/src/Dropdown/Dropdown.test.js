import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './';

describe('Dropdown', () => {
  it('renders', () => {
    const wrapper = shallow(<Dropdown />);
    expect(!!wrapper).toBe(true);
  });
});
