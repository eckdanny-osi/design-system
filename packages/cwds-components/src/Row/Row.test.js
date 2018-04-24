import React from 'react';
import { shallow } from 'enzyme';
import Row from './';

describe('Row', () => {
  it('renders', () => {
    const wrapper = shallow(<Row />);
    expect(!!wrapper).toBe(true);
  });
});
