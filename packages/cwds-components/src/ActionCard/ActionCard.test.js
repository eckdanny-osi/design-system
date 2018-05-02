import React from 'react';
import { shallow } from 'enzyme';
import ActionCard from './';

describe('ActionCard', () => {
  it('renders', () => {
    const wrapper = shallow(<ActionCard />);
    expect(!!wrapper).toBe(true);
  });
});
