import React from 'react';
import { shallow } from 'enzyme';
import IntraNav from './';

describe('IntraNav', () => {
  it.skip('renders', () => {
    const wrapper = shallow(<IntraNav />);
    expect(!!wrapper).toBe(true);
  });
});
