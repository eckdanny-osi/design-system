import React from 'react'
import { shallow } from 'enzyme'
import Article from './Article'
import { Page } from '@cwds/components'

describe('Article', () => {
  it('wraps returns a Page', () => {
    const wrapper = shallow(<Article />)
    expect(wrapper.find(Page).length).toBe(1)
  })
})
