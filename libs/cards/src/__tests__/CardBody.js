import React from 'react'
import { shallow } from 'enzyme'
import CardBody from '../CardBody'
import { CardBody as RSCardBody } from 'reactstrap'

describe('CardBody', () => {
  it('composes a Reactstrap CardBody', () => {
    expect(shallow(<CardBody />).type()).toBe(RSCardBody)
  })
  it('has a default cssModule', () => {
    const wrapper = shallow(<CardBody />)
    expect(wrapper.find(RSCardBody).prop('cssModule')).toBeDefined()
  })
})
