import React from 'react'
import { shallow } from 'enzyme'
import CardHeader from './CardHeader'
import { CardHeader as CardHeaderUnstyled } from 'reactstrap'

describe('CardHeader', () => {
  it('has a default cssModule', () => {
    const wrapper = shallow(<CardHeader>Hello</CardHeader>)
    expect(wrapper.type()).toBe(CardHeaderUnstyled)
    expect(wrapper.prop('cssModule')).toBeDefined()
  })
})
