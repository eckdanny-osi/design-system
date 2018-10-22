import React from 'react'
import { shallow } from 'enzyme'
import Popover from './'

describe('Popover', () => {
  it('renders', () => {
    const wrapper = shallow(<Popover target="dne" />)
    expect(!!wrapper).toBe(true)
  })
  describe('Body', () => {
    it('renders', () => {
      const wrapper = shallow(<Popover.Body>Hello world</Popover.Body>)
      expect(!!wrapper).toBe(true)
    })
  })
  describe('Header', () => {
    it('renders', () => {
      const wrapper = shallow(<Popover.Header>Popover Header</Popover.Header>)
      expect(!!wrapper).toBe(true)
    })
  })
})
