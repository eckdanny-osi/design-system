import React from 'react';
import { shallow } from 'enzyme';
import CardHeader from './';

describe('CardHeader', () => {
  it('renders', () => {
    const wrapper = shallow(<CardHeader />);
    expect(!!wrapper).toBe(true);
  });
});
