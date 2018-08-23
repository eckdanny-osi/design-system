import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from './';

describe('Breadcrumb', () => {
  it('renders', () => {
    const wrapper = shallow(<Breadcrumb />);
    expect(!!wrapper).toBe(true);
  });

  describe('Item', () => {
    it('renders', () => {
      const wrapper = shallow(<Breadcrumb.Item>Item</Breadcrumb.Item>);
      expect(!!wrapper).toBe(true);
    });
  });
});
