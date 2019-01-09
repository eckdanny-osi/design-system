import React from 'react'
import { shallow, mount } from 'enzyme'
import BreadcrumbTrail from './BreadcrumbTrail'
import { CaresProvider } from '../'

describe('BreadcrumbTrail', () => {
  it('exists', () => {
    expect(BreadcrumbTrail).toBeDefined()
  })

  it('accepts a Breadcrumb component prop', () => {
    const MyBreadcrumb = () => <div>Hello</div>
    const wrapper = mount(
      <BreadcrumbTrail Breadcrumb={MyBreadcrumb} items={[]} />
    )
    expect(wrapper.find(MyBreadcrumb).length).toBe(1)
  })

  it('renders anchor links by default', () => {
    const wrapper = mount(
      <BreadcrumbTrail
        items={[
          { path: '/', title: 'Home' },
          { path: '/foo', title: 'Foo' },
          { path: '/foo/bar', title: 'Bar', active: true },
        ]}
      />
    )
    const links = wrapper.find('a')
    expect(links.length).toBe(3)
  })

  it('accepts a BreadcrumbItem component prop', () => {
    const MyBreadcrumbItem = ({ tag: Tag, ...props }) => <Tag {...props} />
    const wrapper = mount(
      <BreadcrumbTrail
        BreadcrumbItem={MyBreadcrumbItem}
        items={[
          { path: '/', title: 'Home' },
          { path: '/foo', title: 'Foo' },
          { path: '/foo/bar', title: 'Bar', active: true },
        ]}
      />
    )
    expect(wrapper.find(MyBreadcrumbItem).length).toBe(3)
  })

  it('accepts Breadcrumb component on context', () => {
    const MyBreadcrumb = () => <div>Hello</div>
    const wrapper = mount(
      <CaresProvider Breadcrumb={MyBreadcrumb}>
        <BreadcrumbTrail
          items={[
            { path: '/', title: 'Home' },
            { path: '/foo', title: 'Foo' },
            { path: '/foo/bar', title: 'Bar', active: true },
          ]}
        />
      </CaresProvider>
    )
    expect(wrapper.find(MyBreadcrumb).length).toBe(1)
  })

  it('accepts BreadcrumbItem component on context', () => {
    const MyBreadcrumbItem = ({ tag: Tag, ...props }) => <Tag {...props} />
    const wrapper = mount(
      <CaresProvider BreadcrumbItem={MyBreadcrumbItem}>
        <BreadcrumbTrail
          items={[
            { path: '/', title: 'Home' },
            { path: '/foo', title: 'Foo' },
            { path: '/foo/bar', title: 'Bar', active: true },
          ]}
        />
      </CaresProvider>
    )
    expect(wrapper.find(MyBreadcrumbItem).length).toBe(3)
  })

  it('prioritizes local prop component overrides', () => {
    const FromContext = ({ tag: Tag, ...props }) => <Tag {...props} />
    const FromProp = ({ tag: Tag, ...props }) => <Tag {...props} />
    const wrapper = mount(
      <CaresProvider BreadcrumbItem={FromContext}>
        <BreadcrumbTrail
          BreadcrumbItem={FromProp}
          items={[{ path: '/', title: 'Home' }, { path: '/foo', title: 'Foo' }]}
        />
      </CaresProvider>
    )
    expect(wrapper.find(FromProp).length).toBe(2)
  })
})

// ### It should...

// Passed Props > Context > Default Props
// ( impl'd in HOC prop ordering )

// Accept a BreadcrumbItem prop for the subcomponent override
