import React from 'react'
import { mount } from 'enzyme'
import PropTable from './PropTable'

describe('PropTable', () => {
  it('renders', () => {
    const info = { displayName: 'MyComponent', props: [] }
    expect(() => mount(<PropTable docgen={info} />)).not.toThrow()
  })
})
