import React from 'react';
import { shallow, mount } from 'enzyme';
import Icon from './';

describe('Icon', () => {
  it('renders', () => {
    const wrapper = shallow(<Icon icon="check" />);
    expect(!!wrapper).toBe(true);
  });

  it.skip('has attr `focusable` set to false', () => {
    const wrapper = mount(<Icon icon="check" />);
    expect(wrapper.find('svg').prop('focusable')).toBe('false');
  });
});
