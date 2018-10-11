import React from 'react';
import { shallow } from 'enzyme';
import CardFooter from './CardFooter';
import { CardFooter as CardFooterUnstyled } from 'reactstrap';

describe('CardFooter', () => {
  it('has a default cssModule', () => {
    const wrapper = shallow(<CardFooter>Hello</CardFooter>);
    expect(wrapper.type()).toBe(CardFooterUnstyled);
    expect(wrapper.prop('cssModule')).toBeDefined();
  });
});
