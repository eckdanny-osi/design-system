import React from 'react'
import { shallow } from 'enzyme'
import Container from './Container'

describe('Container', () => {
  it('renders', () => {
    const wrapper = shallow(<Container />)
    expect(wrapper.prop('cssModule')).not.toBeUndefined()
  })

  it('has a default cssModule', () => {
    const wrapper = shallow(<Container />)
    expect(wrapper.prop('cssModule')).not.toBeUndefined()
  })
})
