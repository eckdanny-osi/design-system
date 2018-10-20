import React from 'react';
import { shallow } from 'enzyme';
import CardTitle from '../CardTitle';
import { CardTitle as RSCardTitle } from 'reactstrap';

describe('CardTitle', () => {
  it('composes a Reactstrap CardTitle', () => {
    expect(shallow(<CardTitle />).type()).toBe(RSCardTitle);
  });
  it('has a default cssModule', () => {
    const wrapper = shallow(<CardTitle />);
    expect(wrapper.find(RSCardTitle).prop('cssModule')).toBeDefined();
  });
});
