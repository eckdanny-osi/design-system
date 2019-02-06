import React from 'react'
import Page from './Page'
import Banner from '../Banner'
import Body from '../Body'
import { shallow } from 'enzyme'

describe('Page', () => {
  it('has className defined', () => {
    expect(shallow(<Page />).hasClass('Page')).toBe(true)
  })

  it('renders a Banner and Body component', () => {
    const wrapper = shallow(<Page />)
    expect(wrapper.childAt(0).type()).toBe(Banner)
    expect(wrapper.childAt(1).type()).toBe(Body)
  })

  it('passes bannerProps to Banner', () => {
    const wrapper = shallow(<Page title="my-title" />)
    const banner = wrapper.find(Banner)
    expect(banner.prop('title')).toEqual('my-title')
  })

  it('passes bodyProps to Body', () => {
    const wrapper = shallow(
      <Page main="my-main" sidenav="my-sidenav" layout="dashboard" />
    )
    const body = wrapper.find(Body)
    expect(body.prop('main')).toEqual('my-main')
    expect(body.prop('sidenav')).toEqual('my-sidenav')
    expect(body.prop('layout')).toEqual('dashboard')
  })

  it('accepts a Banner component', () => {
    const MyBanner = jest.fn()
    const wrapper = shallow(<Page Banner={MyBanner} title="My Title" />)
    expect(wrapper.find(MyBanner).prop('title')).toEqual('My Title')
  })

  it('accepts a Body component', () => {
    const MyBody = jest.fn()
    const wrapper = shallow(<Page Body={MyBody} layout="dashboard" />)
    expect(wrapper.find(MyBody).prop('layout')).toEqual('dashboard')
  })
})
