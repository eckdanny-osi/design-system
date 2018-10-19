import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';
import { Card as RSCard } from 'reactstrap';

describe('Card', () => {
  it('composes Reactstrap Card', () => {
    expect(shallow(<Card />).type()).toBe(RSCard);
  });
  it('has a default cssModule', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find(RSCard).prop('cssModule')).toBeDefined();
  });
});
