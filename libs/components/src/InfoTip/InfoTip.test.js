import React from 'react'
import { shallow } from 'enzyme'
import InfoTip from './'

describe('InfoTip', () => {
  it('renders', () => {
    const wrapper = shallow(<InfoTip> Hello </InfoTip>)
    expect(!!wrapper).toBe(true)
  })
})
