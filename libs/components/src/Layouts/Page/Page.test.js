import React from 'react'
import Page from './Page'
import Banner from '../Banner'
import Body from '../Body'
import { shallow } from 'enzyme'

describe('Page', () => {
  it('has style', () => {
    expect(shallow(<Page />).hasClass('Page')).toBe(true)
  })

  it('renders a Banner and Body component', () => {
    const wrapper = shallow(<Page />)
    expect(wrapper.childAt(0).type()).toBe(Banner)
    expect(wrapper.childAt(1).type()).toBe(Body)
  })

  it('allows Banner to be overriden', () => {
    const MyBanner = () => <div id="my-banner">my banner</div>
    const wrapper = shallow(<Page Banner={MyBanner} />)
    expect(wrapper.find(MyBanner).length).toBe(1)
  })

  it('allows Body to be overriden', () => {
    const MyBody = () => <div id="my-body">my body</div>
    const wrapper = shallow(<Page Body={MyBody} />)
    expect(wrapper.find(MyBody).length).toBe(1)
  })

  it('accepts a node for Banner prop', () => {
    const MyBanner = <div id="node">node</div>
    const wrapper = shallow(<Page Banner={MyBanner} />)
    expect(wrapper.find('#node').length).toBe(1)
  })

  it('accepts a node for Body prop', () => {
    const MyBody = <div id="node">node</div>
    const wrapper = shallow(<Page Banner={MyBody} />)
    expect(wrapper.find('#node').length).toBe(1)
  })

  it('accepts a prop getter', () => {
    const mockBannerProps = { mock: true }
    const getBannerProps = jest.fn().mockImplementation(() => mockBannerProps)
    const props = { foo: 'foo', bar: 'bar', getBannerProps }
    const wrapper = shallow(<Page {...props} />)
    expect(getBannerProps).toBeCalledTimes(1)
    expect(getBannerProps).toBeCalledWith({ foo: 'foo', bar: 'bar' })
    expect(wrapper.find(Banner).props()).toEqual(mockBannerProps)
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

  it('accepts children as an alias for `main`', () => {
    const children = <div />
    const wrapper = shallow(<Page>{children}</Page>)
    expect(wrapper.find(Body).prop('children')).toBeDefined()
    expect(wrapper.find(Body).prop('children')).toBe(children)
  })

  describe('children prop', () => {
    const element = <div />
    const component = () => <div />
    it.each`
      type           | value
      ${'element'}   | ${element}
      ${'component'} | ${component}
      ${'string'}    | ${'hello'}
    `('may be a $type', ({ type, value, outcome }) => {
      const wrapper = shallow(<Page>{value}</Page>)
      expect(wrapper.find(Body).prop('children')).toEqual(value)
    })
  })
})
