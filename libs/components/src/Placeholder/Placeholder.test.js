import React from 'react'
import { mount } from 'enzyme'
import Placeholder from './Placeholder'

describe('Placeholder', () => {
  it('renders', () => {
    expect(() => {
      mount(<Placeholder />)
    }).not.toThrow()
  })
})
