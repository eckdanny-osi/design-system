import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './';
import { Button as RSButton } from 'reactstrap';

describe('Button', () => {
  it('renders', () => {
    const wrapper = shallow(<Button />);
    expect(!!wrapper).toBe(true);
  });
});
