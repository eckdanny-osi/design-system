import React from 'react';
import { shallow } from 'enzyme';
import AppBar from './';

describe('AppBar', () => {
  it('renders', () => {
    const wrapper = shallow(<AppBar />);
    expect(!!wrapper).toBe(true);
  });
});
