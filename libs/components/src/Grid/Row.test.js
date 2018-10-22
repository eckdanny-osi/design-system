import React from 'react'
import { shallow } from 'enzyme'
import Row from './Row'

describe('Row', () => {
  it('renders', () => {
    const wrapper = shallow(<Row />)
    expect(wrapper.prop('cssModule')).not.toBeUndefined()
  })

  it('has a default cssModule', () => {
    const wrapper = shallow(<Row />)
    expect(wrapper.prop('cssModule')).not.toBeUndefined()
  })
})
