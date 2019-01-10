import React from 'react'
import { mount } from 'enzyme'
import DemoCard from './DemoCard'

describe('DemoCard', () => {
  it('renders', () => {
    expect(() =>
      mount(
        <DemoCard>
          <div>Hi</div>
        </DemoCard>
      )
    ).not.toThrow()
  })
})
