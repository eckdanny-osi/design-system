import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './';

describe('MyComponent', () => {
  it('renders', () => {
    const wrapper = shallow(<MyComponent />);
    expect(!!wrapper).toBe(true);
  });
});
