import React from 'react'
import { mount } from 'enzyme'
import ColorPallete from './ColorPallete'

describe('ColorPallete', () => {
  it('renders colors', () => {
    const colors = {
      foo: 'foo-value',
      bar: 'bar-value',
    }
    const wrapper = mount(<ColorPallete colors={colors} />)
    expect(wrapper.find('.color-pallete__color').length).toBe(2)
  })
})
