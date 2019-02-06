import React from 'react'
import { shallow } from 'enzyme'
import SideNav from './SideNav'

describe('SideNav', () => {
  it('renders', () => {
    expect(() => shallow(<SideNav />)).not.toThrow()
  })
})
