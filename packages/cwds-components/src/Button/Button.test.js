import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './';
import { Button as RSButton } from 'reactstrap';

describe('Button', () => {
  it('renders', () => {
    const wrapper = shallow(<Button />);
    expect(!!wrapper).toBe(true);
  });

  it('renders text as child', () => {
    const wrapper = mount(<Button>Hello World</Button>);
    expect(wrapper.text()).toEqual('Hello World');
  });

  it('adds primary className', () => {
    const wrapper = mount(<Button primary />);
    const btn = wrapper.find(RSButton);
    expect(btn.prop('color')).toEqual('primary');
  });

  it('renders a warning button', () => {
    const wrapper = mount(<Button warning />);
    const btn = wrapper.find(RSButton);
    expect(btn.prop('color')).toEqual('warning');
  });
});
