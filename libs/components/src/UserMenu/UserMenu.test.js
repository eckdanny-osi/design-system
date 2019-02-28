import React from 'react'
import { mount } from 'enzyme'
import UserMenu from './UserMenu'

describe('UserMenu', () => {
  it('renders', () => {
    expect(() => mount(<UserMenu />)).not.toThrow()
  })
})
