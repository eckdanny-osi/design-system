import React from 'react'
import { mount, shallow } from 'enzyme'
import Article from './Article'
import Breadcrumb from './ArticleBreadcrumb'
import SideNav from './ArticleSideNav'
import { ButtonGroup, Page } from '@cwds/components'

describe('Article', () => {
  it('wraps returns a Page', () => {
    const wrapper = shallow(<Article component={() => <div>Foobar</div>} />)
    expect(wrapper.find(Page).length).toBe(1)
  })
  describe('renders props', () => {
    const wrapper = mount(<Article />)

    it('pageAction with ButtonGroup', () => {
      expect(wrapper.find(ButtonGroup).length).toBe(1)
    })
    it('sideNav with SideNav component', () => {
      expect(wrapper.find(SideNav).length).toBe(1)
    })
    it('BreadCrumb with BreadCrumb component', () => {
      expect(wrapper.find(Breadcrumb).length).toBe(1)
    })
  })
  describe('changes the layout', () => {
    const wrapper = mount(<Article />)
    it('initialize as subroutes', () => {
      expect(wrapper.state('layout')).toEqual('subroutes')
      expect(
        wrapper.find('Button [aria-label="Side Nav"]').hasClass('active')
      ).toBe(true)
      expect(wrapper.find(SideNav).length).toBe(1)
    })
    it('from subroutes to dashboard', () => {
      wrapper.find('Button [aria-label="Full Width"]').simulate('click')
      expect(
        wrapper.find('Button [aria-label="Full Width"]').hasClass('active')
      ).toBe(true)
      expect(wrapper.state('layout')).toEqual('dashboard')
      expect(wrapper.find(SideNav).length).toBe(0)
    })
  })
})
