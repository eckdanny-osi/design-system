import React from 'react'
import { mount, shallow } from 'enzyme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from '../Icon'

describe('Icon', () => {
  it('renders an svg', () => {
    const wrapper = mount(<Icon icon="check" />)
    expect(wrapper.find('svg').length).toBe(1)
  })
  it('passes down className', () => {
    const wrapper = mount(<Icon icon="check" className="text-primary" />)
    expect(wrapper.find('svg').hasClass('text-primary')).toBe(true)
    expect(wrapper.find('svg').hasClass('text-secondary')).toBe(false)
  })
  it('has attr `focusable` set to false', () => {
    const wrapper = mount(<Icon icon="check" />)
    expect(wrapper.find('svg').prop('focusable')).toBe('false')
  })
  it('aliases the `icon` prop as `name`', () => {
    const nameWrapper = shallow(<Icon name="check" />)
    expect(nameWrapper.find(FontAwesomeIcon).prop('icon')).toEqual('check')
    const iconWrapper = shallow(<Icon icon="some-name" />)
    expect(iconWrapper.find(FontAwesomeIcon).prop('icon')).toEqual('some-name')
  })
  it('has a default color', () => {
    const wrapper = mount(<Icon name="check" />)
    expect(wrapper.find('svg').prop('color')).toBeDefined()
  })
  it('transforms `color=<themeColor>` to color value', () => {
    const themeColors = { key: 'value' }
    expect(
      shallow(<Icon name="check" color="key" themeColors={themeColors} />)
        .find(FontAwesomeIcon)
        .prop('color')
    ).toEqual('value')
    expect(
      shallow(<Icon name="check" color="nope" themeColors={themeColors} />)
        .find(FontAwesomeIcon)
        .prop('color')
    ).toEqual('nope')
  })
})
