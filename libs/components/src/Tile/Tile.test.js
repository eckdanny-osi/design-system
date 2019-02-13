import React from 'react'
import { shallow } from 'enzyme'
import Tile from './Tile'

describe('Tile', () => {
  it('renders', () => {
    expect(() => shallow(<Tile />)).not.toThrow()
  })
})
