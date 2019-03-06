import React from 'react'
import { shallow } from 'enzyme'
import SelectList from './SelectList'

describe('SelectList', () => {
  it('renders', () => {
    expect(() => shallow(<SelectList name="test" options={[]} />)).not.toThrow()
  })
})
