import React from 'react';
import { shallow } from 'enzyme';
import CardFooter from '../CardFooter';
import { CardFooter as RSCardFooter } from 'reactstrap';

describe('CardFooter', () => {
  it('composes a Reactstrap CardFooter', () => {
    expect(shallow(<CardFooter />).type()).toBe(RSCardFooter);
  });
  it('has a default cssModule', () => {
    const wrapper = shallow(<CardFooter />);
    expect(wrapper.find(RSCardFooter).prop('cssModule')).toBeDefined();
  });
});
