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
})
