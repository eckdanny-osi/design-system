import React from 'react';
import { shallow } from 'enzyme';
import CardSubtitle from '../CardSubtitle';
import { CardSubtitle as RSCardSubtitle } from 'reactstrap';

describe('CardSubtitle', () => {
  it('composes a Reactstrap CardSubtitle', () => {
    expect(shallow(<CardSubtitle />).type()).toBe(RSCardSubtitle);
  });
  it('has a default cssModule', () => {
    const wrapper = shallow(<CardSubtitle />);
    expect(wrapper.find(RSCardSubtitle).prop('cssModule')).toBeDefined();
  });
});
