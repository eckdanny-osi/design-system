import React from 'react'
import Banner from '../Banner'
import BreadcrumbTail from '../../BreadcrumbTrail'
import { shallow } from 'enzyme'

describe('Banner', () => {
  it('renders', () => {
    expect(() => shallow(<Banner />)).not.toThrow()
  })

  it('has [aria-role=banner]', () => {
    const wrapper = shallow(<Banner />)
    expect(wrapper.prop('role')).toEqual('banner')
  })

  it('renders 2 content areas', () => {
    const wrapper = shallow(<Banner />)
    expect(wrapper.children().length).toBe(2)
  })

  it('renders 3 content areas when a breadcrumb is provided', () => {
    const wrapper = shallow(<Banner breadcrumb={<div id="breadcrumb" />} />)
    expect(wrapper.children().length).toBe(3)
  })

  describe('breadcrumb prop', () => {
    it('accepts a react element', () => {
      const MyComponent = () => <div>test</div>
      const wrapper = shallow(<Banner breadcrumb={<MyComponent />} />)
      expect(wrapper.find(MyComponent).length).toBe(1)
    })
    it('accepts a renderFn', () => {
      const myRenderFn = jest.fn().mockReturnValueOnce(<div id="renderFn" />)
      const wrapper = shallow(<Banner breadcrumb={myRenderFn} />)
      expect(myRenderFn).toHaveBeenCalledTimes(1)
      expect(wrapper.find('#renderFn')).toHaveLength(1)
    })
    it('accepts items: Array<{path: string, title: string}>', () => {
      const trail = [
        { title: 'Foo', path: '/foo' },
        { title: 'Bar', path: '/foo/bar' },
        { title: 'Quo', path: '/foo/bar/quo' },
      ]
      const wrapper = shallow(<Banner breadcrumb={trail} />)
      expect(wrapper.find(BreadcrumbTail).prop('items')).toBe(trail)
    })
    it('throws a TypeError on invalid prop', () => {
      expect(() => shallow(<Banner breadcrumb={true} />)).toThrow(TypeError)
    })
  })
})
