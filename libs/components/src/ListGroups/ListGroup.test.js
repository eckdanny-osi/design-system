import React from 'react';
import { shallow } from 'enzyme';
import ListGroup from './ListGroup';
import { ListGroup as ListGroupUnstyled } from 'reactstrap';

describe('ListGroup', () => {
  it('composes the ReactStrap component', () => {
    const wrapper = shallow(<ListGroup />);
    expect(wrapper.type()).toBe(ListGroupUnstyled);
  });
  it('has a default cssModule', () => {
    expect(shallow(<ListGroup />).prop('cssModule')).toEqual({});
  });
});
