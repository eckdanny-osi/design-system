import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from './ButtonGroup';
import { ButtonGroup as ButtonGroupUnstyled } from 'reactstrap';

describe('ButtonGroup', () => {
  it('has a default cssModule', () => {
    const wrapper = shallow(<ButtonGroup>Hello</ButtonGroup>);
    expect(wrapper.type()).toBe(ButtonGroupUnstyled);
    expect(wrapper.prop('cssModule')).toBeDefined();
  });
});
