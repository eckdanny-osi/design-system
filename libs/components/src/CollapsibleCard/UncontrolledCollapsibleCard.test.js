import React from 'react'
import { mount } from 'enzyme'
import {
  Button,
  Collapse,
  CardBody,
  CardHeader,
  CardFooter,
} from '@cwds/reactstrap'
import Icon from '@cwds/icons'
import CollapsibleCard from './CollapsibleCard'
import UncontrolledCollapsibleCard from './UncontrolledCollapsibleCard'

describe('UncontrolledCollapsibleCard', () => {
  it('renders', () => {
    const wrapper = mount(
      <UncontrolledCollapsibleCard>
        <CardHeader>CardHeader</CardHeader>
        <CardBody>CardBody</CardBody>
        <CardFooter>CardFooter</CardFooter>
      </UncontrolledCollapsibleCard>
    )
    expect(wrapper.find(CollapsibleCard).length).toBe(1)
    expect(wrapper.find(Collapse).prop('isOpen')).toBe(true)
    expect(wrapper.find(Icon).prop('rotation')).toBe(180)
    wrapper.find(Button).simulate('click')
    expect(wrapper.find(Collapse).prop('isOpen')).toBe(false)
  })
})
