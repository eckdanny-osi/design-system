import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('renders', () => {
    expect(() => mount(<Card />)).not.toThrow();
  });

  it('registers subComponents', () => {
    expect(Card.Body).toBeDefined();
    expect(Card.Header).toBeDefined();
    expect(Card.Footer).toBeDefined();
  });

  it('puts children in a Card.Body when no structure given', () => {
    const inner = 'Hello World!';
    const wrapper = mount(<Card>{inner}</Card>);
    expect(wrapper.find(Card.Body)).toHaveLength(1);
    expect(wrapper.find(Card.Body).text()).toEqual(inner);
  });

  it('attaches style to the unstyled component', () => {
    const wrapper = shallow(<Card>Hello</Card>);
    expect(wrapper.prop('cssModule')).toBeDefined();
  });
});
