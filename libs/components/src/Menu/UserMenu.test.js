import React from 'react'
import { shallow, mount } from 'enzyme'
import UserMenu from './UserMenu'
import Menu from './Menu'
import Avatar from '../Avatar'

describe('UserMenu', () => {
  it('wraps Menu', () => {
    const wrapper = shallow(<UserMenu label="Boaty McBoatface" />)
    expect(wrapper.find(Menu).length).toBe(1)
  })
  it('renders label in the popup button', () => {
    const wrapper = mount(
      <UserMenu label="Boaty McBoatface" toggle={() => {}} />
    )
    const label = wrapper.find('button[aria-haspopup] span')
    expect(label.text()).toEqual('Boaty McBoatface')
    expect(label.hasClass('text-capitalize')).toBe(true)
  })
  it('renders an Avatar in the popup button', () => {
    const wrapper = mount(
      <UserMenu label="Boaty McBoatface" toggle={() => {}} />
    )
    expect(wrapper.find(Avatar).prop('size')).toBe('sm')
    expect(wrapper.find(Avatar).prop('invert')).toBe(true)
  })
})
