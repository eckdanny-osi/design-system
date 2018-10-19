import React from 'react';
import { mount } from 'enzyme';
import Icon from '../Icon';

describe('Icon', () => {
  it('renders an svg', () => {
    const wrapper = mount(<Icon icon="check" />);
    expect(wrapper.find('svg').length).toBe(1);
  });
  it('passes down className', () => {
    const wrapper = mount(<Icon icon="check" className="text-primary" />);
    expect(wrapper.find('svg').hasClass('text-primary')).toBe(true);
    expect(wrapper.find('svg').hasClass('text-secondary')).toBe(false);
  });
  it('has attr `focusable` set to false', () => {
    const wrapper = mount(<Icon icon="check" />);
    expect(wrapper.find('svg').prop('focusable')).toBe('false');
  });
  it('raises an error on invalid icon prop', () => {
    const wrapper = mount(<Icon icon="dne" />);
    console.log(wrapper.debug());
  });
});
