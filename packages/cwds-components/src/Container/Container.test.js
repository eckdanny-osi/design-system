import React from 'react';
import { shallow } from 'enzyme';
import Container from './';

describe('Container', () => {
  it('renders', () => {
    const wrapper = shallow(<Container />);
    expect(!!wrapper).toBe(true);
  });
});
