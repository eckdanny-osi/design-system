import React from 'react'
import { shallow } from 'enzyme'
import { AppBarNoContext as AppBar } from './AppBar'
import Brand from '../Brand'
import UserMenu from '../UserMenu'

describe('AppBar', () => {
  it('renders', () => {
    const wrapper = shallow(<AppBar />)
    expect(!!wrapper).toBe(true)
  })

  it('renders the Brand', () => {
    const wrapper = shallow(<AppBar />)
    expect(wrapper.find(Brand).length).toBe(1)
  })

  it('renders the UserMenu', () => {
    const wrapper = shallow(<AppBar />)
    expect(wrapper.find(UserMenu).length).toBe(1)
  })

  it('accepts a component overload for Brand', () => {
    const someProps = { foo: 'foo', bar: 'bar' }
    const someFilteredProps = { quo: 'quo' }
    const MyBrand = () => <div />
    const myGetBrandProps = jest
      .fn()
      .mockImplementation(() => someFilteredProps)

    expect(myGetBrandProps).toHaveBeenCalledTimes(0)
    const wrapper = shallow(
      <AppBar Brand={MyBrand} getBrandProps={myGetBrandProps} {...someProps} />
    )
    expect(myGetBrandProps).toHaveBeenCalledTimes(1)
    expect(myGetBrandProps).toHaveBeenCalledWith(someProps)
    expect(wrapper.find(MyBrand).length).toBe(1)
    expect(wrapper.find(MyBrand).props()).toEqual(someFilteredProps)
  })

  it('accepts a component overload for UserMenu', () => {
    const someProps = { foo: 'foo', bar: 'bar' }
    const someFilteredProps = { quo: 'quo' }
    const MyUserMenu = () => <div />
    const myGetUserMenuProps = jest
      .fn()
      .mockImplementation(() => someFilteredProps)

    expect(myGetUserMenuProps).toHaveBeenCalledTimes(0)
    const wrapper = shallow(
      <AppBar
        UserMenu={MyUserMenu}
        getUserMenuProps={myGetUserMenuProps}
        {...someProps}
      />
    )
    expect(myGetUserMenuProps).toHaveBeenCalledTimes(1)
    expect(myGetUserMenuProps).toHaveBeenCalledWith(someProps)
    expect(wrapper.find(MyUserMenu).length).toBe(1)
    expect(wrapper.find(MyUserMenu).props()).toEqual(someFilteredProps)
  })
})
