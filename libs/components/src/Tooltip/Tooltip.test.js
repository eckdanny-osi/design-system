import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  it('renders', () => {
    const wrapper = shallow(<Tooltip target="dne" />);
    expect(!!wrapper).toBe(true);
  });
});
