import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from './';

describe('ButtonGroup', () => {
  it('renders', () => {
    const wrapper = shallow(<ButtonGroup />);
    expect(!!wrapper).toBe(true);
  });
});
