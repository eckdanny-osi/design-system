import React from 'react'
import { shallow } from 'enzyme'
import CardBody from './CardBody'
import { CardBody as CardBodyUnstyled } from 'reactstrap'

describe('CardBody', () => {
  it('has a default cssModule', () => {
    const wrapper = shallow(<CardBody>Hello</CardBody>)
    expect(wrapper.type()).toBe(CardBodyUnstyled)
    expect(wrapper.prop('cssModule')).toBeDefined()
  })
})
