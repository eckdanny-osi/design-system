import React from 'react';
import { shallow } from 'enzyme';
import CardTitle from './CardTitle';
import { CardTitle as CardTitleUnstyled } from 'reactstrap';

describe('CardTitle', () => {
  it('composes the ReactStrap component', () => {
    const wrapper = shallow(<CardTitle />);
    expect(wrapper.type()).toBe(CardTitleUnstyled);
  });
  it('has a default cssModule', () => {
    expect(shallow(<CardTitle />).prop('cssModule')).toEqual({});
  });
  it('has default tag of h3', () => {
    expect(shallow(<CardTitle />).prop('tag')).toEqual('h3');
  });
});
