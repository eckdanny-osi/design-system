import React from 'react'
import { shallow } from 'enzyme'
import ListGroupItem from './ListGroupItem'
import { ListGroupItem as ListGroupItemUnstyled } from 'reactstrap'

describe('ListGroupItem', () => {
  it('composes the ReactStrap component', () => {
    const wrapper = shallow(<ListGroupItem />)
    expect(wrapper.type()).toBe(ListGroupItemUnstyled)
  })
  it('has a default cssModule', () => {
    expect(shallow(<ListGroupItem />).prop('cssModule')).toEqual({})
  })
})
