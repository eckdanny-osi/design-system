import React from 'react'
import { mount } from 'enzyme'
import Placeholder from './Placeholder'
import { Col } from '@cwds/reactstrap'

describe('Placeholder', () => {
  it('renders', () => {
    expect(() => {
      mount(<Placeholder />)
    }).not.toThrow()
  })
  it('renders a variable number of columns', () => {
    let wrapper

    wrapper = mount(<Placeholder cols={2} />)
    expect(wrapper.find(Col).length).toBe(2)

    wrapper = mount(<Placeholder cols={3} />)
    expect(wrapper.find(Col).length).toBe(3)
  })
  it('renders a variable number of rows', () => {
    let wrapper

    wrapper = mount(<Placeholder cols={2} rows={4} tag="p" />)
    expect(wrapper.find('p').length).toBe(8)

    wrapper = mount(<Placeholder cols={3} rows={3} tag="p" />)
    expect(wrapper.find('p').length).toBe(9)
  })
})
