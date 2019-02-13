import React from 'react'
import { shallow } from 'enzyme'
import { CardTitle } from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'
import Tile from './Tile'

describe('Tile', () => {
  it('renders', () => {
    expect(() => shallow(<Tile />)).not.toThrow()
  })

  it('accepts a string icon prop', () => {
    const wrapper = shallow(<Tile icon="foo" />)
    expect(wrapper.find(Icon).prop('name')).toBe('foo')
  })

  it('accepts an Icon declaration', () => {
    const wrapper = shallow(<Tile Icon={<Icon name="my-icon" />} />)
    expect(wrapper.find(Icon).length).toBe(1)
  })

  it('accepts a string title', () => {
    const wrapper = shallow(<Tile title="my title" />)
    expect(wrapper.find(CardTitle).length).toBe(1)
    expect(wrapper.find(CardTitle).prop('children')).toContain('my title')
  })
})
