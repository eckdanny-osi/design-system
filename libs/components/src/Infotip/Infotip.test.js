import React from 'react'
import { shallow } from 'enzyme'
import Infotip from './Infotip'

describe('Infotip', () => {
  it('renders', () => {
    const wrapper = shallow(<Infotip id="myId">Hello</Infotip>)
    expect(!!wrapper).toBe(true)
  })
})
