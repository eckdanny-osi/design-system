import React from 'react'
import { shallow } from 'enzyme'
import Pagination from './Pagination'

describe('Pagination', () => {
  it('returns null for small collections', () => {
    const wrapper = shallow(<Pagination pages={1} />)
    expect(wrapper.type()).toBe(null)
  })
})
