import React from 'react';
import { shallow } from 'enzyme';
import Badge from './';

describe('Badge', () => {
  it('renders', () => {
    const wrapped = shallow(<Badge>Hello</Badge>);
    expect(!!wrapped).toBe(true);
  });
});
