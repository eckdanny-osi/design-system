import React from 'react';
import { shallow } from 'enzyme';
import Button from './';

describe('Button', () => {
  it('renders', () => {
    const wrapper = shallow(<Button />);
    expect(!!wrapper).toBe(true);
  });

  it('renders text as child', () => {
    const wrapper = shallow(<Button>Hello World</Button>);
    expect(wrapper.text()).toEqual('Hello World');
  });

  it('adds primary className', () => {
    const wrapper = shallow(<Button primary />);
    expect(wrapper.hasClass('primary')).toBe(true);
  });

  it('renders a danger button', () => {
    const wrapper = shallow(<Button danger />);
    expect(wrapper.hasClass('danger')).toBe(true);
  });
});
