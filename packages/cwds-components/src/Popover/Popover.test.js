import React from 'react';
import { shallow } from 'enzyme';
import Popover from './';

describe('Popover', () => {
  it('renders', () => {
    const wrapper = shallow(<Popover />);
    expect(!!wrapper).toBe(true);
  });
});
