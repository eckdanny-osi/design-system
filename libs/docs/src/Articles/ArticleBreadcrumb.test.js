import React from 'react'
import { shallow } from 'enzyme'
import ArticleBreadcrumb from './ArticleBreadcrumb'
import { Breadcrumb, BreadcrumbItem } from '@cwds/components'

describe('ArticleBreadcrumb', () => {
  it('works', () => {
    expect(true).toBe(true)
  })

  it('adds `active` to last item', () => {
    const items = [
      { path: '/', title: 'home' },
      { path: '/foo', title: 'foo' },
      { path: '/foo/bar', title: 'bar' },
    ]
    const wrapper = shallow(<ArticleBreadcrumb items={items} />)
    expect(wrapper.type()).toBe(Breadcrumb)
    expect(wrapper.find(BreadcrumbItem).length).toBe(3)
    expect(
      wrapper
        .find(BreadcrumbItem)
        .at(0)
        .prop('active')
    ).not.toBeDefined()
    expect(
      wrapper
        .find(BreadcrumbItem)
        .at(1)
        .prop('active')
    ).not.toBeDefined()
    expect(
      wrapper
        .find(BreadcrumbItem)
        .last()
        .prop('active')
    ).toBe(true)
  })

  it.todo('adds `active` to last item')
})
