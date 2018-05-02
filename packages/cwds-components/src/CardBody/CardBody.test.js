import React from 'react';
import { shallow } from 'enzyme';
import CardBody from './';

describe('CardBody', () => {
  it('renders', () => {
    const wrapper = shallow(<CardBody />);
    expect(!!wrapper).toBe(true);
  });
});
