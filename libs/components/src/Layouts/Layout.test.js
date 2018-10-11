import React from 'react';
import { shallow } from 'enzyme';
import Layout from './';

describe('Layout', () => {
  it('renders', () => {
    const wrapper = shallow(<Layout />);
    expect(!!wrapper).toBe(true);
  });
});
