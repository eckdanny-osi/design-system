import React from 'react'
import { shallow } from 'enzyme'
import NotFound from './ArticleNotFound'
import { Page } from '@cwds/components'

describe('NotFound', () => {
  it('returns a Page', () => {
    const wrapper = shallow(<NotFound />)
    expect(wrapper.find(Page).length).toBe(1)
  })
})
