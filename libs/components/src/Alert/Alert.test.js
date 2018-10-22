import React from 'react'
import { shallow } from 'enzyme'
import Alert from './'
import { getIcon } from './Alert'
import { ICON_NAMES } from '../Icon'

describe('Alert', () => {
  it('renders', () => {
    const wrapper = shallow(<Alert />)
    expect(!!wrapper).toBe(true)
  })
})
