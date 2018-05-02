import React from 'react';
import { shallow } from 'enzyme';
import CardFooter from './';

describe('CardFooter', () => {
  it('renders', () => {
    const wrapper = shallow(<CardFooter />);
    expect(!!wrapper).toBe(true);
  });
});
