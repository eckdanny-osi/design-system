import React from 'react';
import { shallow } from 'enzyme';
import CardHeader from '../CardHeader';
import { CardHeader as RSCardHeader } from 'reactstrap';

describe('CardHeader', () => {
  it('composes a Reactstrap CardHeader', () => {
    expect(shallow(<CardHeader />).type()).toBe(RSCardHeader);
  });
  it('has a default cssModule', () => {
    const wrapper = shallow(<CardHeader />);
    expect(wrapper.find(RSCardHeader).prop('cssModule')).toBeDefined();
  });
});
