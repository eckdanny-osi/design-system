import React from 'react';
import { shallow } from 'enzyme';
import Icon from './';

describe('Icon', () => {
  it('renders', () => {
    const wrapper = shallow(<Icon icon="check" />);
    expect(!!wrapper).toBe(true);
  });
});
