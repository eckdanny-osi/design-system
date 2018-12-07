import React from 'react'
import { CardTitle } from '../'
import { CardTitle as RSCardTitle } from 'reactstrap'
import { mount } from 'enzyme'

describe('CardTitle', () => {
  it('should be the reactstrap component of the same name', () => {
    expect(CardTitle).toBe(RSCardTitle)
  })
  it('should have a render a div', () => {
    const wrapper = mount(<CardTitle>Hello</CardTitle>)
    expect(wrapper.getDOMNode().tagName).toBe('DIV')
  })
})
