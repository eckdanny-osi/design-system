import React from 'react'
import { mount } from 'enzyme'
import Figure from './Figure'

describe('Figure', () => {
  it('renders', () => {
    const wrapper = mount(<Figure src="foo.png" alt="foo" />)
    expect(wrapper.find('figure').length).toBe(1)
    expect(wrapper.find('img').prop('src')).toBe('foo.png')
  })
})
