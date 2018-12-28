import React from 'react'
import { shallow } from 'enzyme'
import Infotip from './'

describe('Infotip', () => {
  it('renders', () => {
    const wrapper = shallow(<Infotip> Hello </Infotip>)
    expect(!!wrapper).toBe(true)
  })
})
