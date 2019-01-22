import React from 'react'
import { mount } from 'enzyme'
import AnchorLink from './AnchorLink'

describe('AnchorLink', () => {
  it('renders', () => {
    const wrapper = mount(<AnchorLink>SOME LINK</AnchorLink>)
    expect(wrapper.find('span').prop('id')).toEqual('some-link')
    expect(wrapper.find('a').prop('href')).toEqual('#some-link')
    expect(wrapper.find('a').text()).toEqual('SOME LINK')
  })

  it('forms a text slug from child elements', () => {
    const wrapper = mount(
      <AnchorLink>
        Some <code>code</code>
      </AnchorLink>
    )
    expect(wrapper.find('span').prop('id')).toEqual('some-code')
    expect(wrapper.find('a').prop('href')).toEqual('#some-code')
  })

  it('forms a slug from an array of string children', () => {
    const wrapper = mount(<AnchorLink>{['foo', 'bar']}</AnchorLink>)
    expect(wrapper.find('span').prop('id')).toEqual('foobar')
  })

  it('throws when a slug cannot be computed', () => {
    const squelchConsole = jest
      .spyOn(global.console, 'error')
      .mockImplementation(() => {})
    expect(() => mount(<AnchorLink>{() => null}</AnchorLink>)).toThrow()
    squelchConsole.mockRestore()
  })
})
