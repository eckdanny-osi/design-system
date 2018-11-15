import React from 'react'
import { mount } from 'enzyme'
import Rolodex from './Rolodex'
import { Card, CardHeader, CardBody } from '@cwds/reactstrap'

describe('Rolodex', () => {
  it('exists', () => {
    expect(!!Rolodex).toBeDefined()
  })
  describe('basic interactions', () => {
    let wrapper = mount(<div />)

    beforeEach(() => {
      wrapper = mount(
        <Rolodex>
          <Card key="one">
            <CardHeader id="header-one">One Header</CardHeader>
            <CardBody id="body-one">One Body</CardBody>
          </Card>
          <Card key="two">
            <CardHeader id="header-two">Two Header</CardHeader>
            <CardBody id="body-two">Two Body</CardBody>
          </Card>
        </Rolodex>
      )
    })
    it('renders Cards', () => {
      expect(wrapper.find(Card).length).toBe(2)
      expect(wrapper.find(CardHeader).length).toBe(2)
      expect(wrapper.find(CardBody).length).toBe(2)
    })
    it('expands on click', () => {
      expect(wrapper.find('div[role="button"]').length).toBe(2)
      console.log(wrapper.find('header-one').length)
      console.log(wrapper.html())
    })
    it('wtf', () => {
      console.log(wrapper.debug())
    })
  })
})
