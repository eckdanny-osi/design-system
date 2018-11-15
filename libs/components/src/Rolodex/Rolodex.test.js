import React from 'react'
import { mount } from 'enzyme'
import Rolodex from './Rolodex'
import { Card, CardHeader, CardBody } from '@cwds/reactstrap'

describe('Rolodex', () => {
  it('exists', () => {
    expect(!!Rolodex).toBeDefined()
  })
  describe('composition errors', () => {
    it('throws when no children are found', () => {
      const quiet = jest
        .spyOn(global.console, 'error')
        .mockImplementation(() => {})
      expect(() => {
        mount(<Rolodex />)
      }).toThrow()
      quiet.mockRestore()
    })
    it('throws when children are not Cards', () => {
      const quiet = jest
        .spyOn(global.console, 'error')
        .mockImplementation(() => {})
      expect(() =>
        mount(
          <Rolodex>
            <Card>
              <CardHeader>Good</CardHeader>
              <CardBody>Good</CardBody>
            </Card>
            <div>Bad</div>
          </Rolodex>
        )
      ).toThrowError()
      quiet.mockRestore()
    })
    it('throws when Card descendent are not CardHeader, CardBody, or CardFooter', () => {
      const quiet = jest
        .spyOn(global.console, 'error')
        .mockImplementation(() => {})
      expect(() =>
        mount(
          <Rolodex>
            <Card>
              <CardHeader>Good</CardHeader>
              <CardBody>Good</CardBody>
              <div>No Good</div>
            </Card>
          </Rolodex>
        )
      ).toThrowError()
      quiet.mockRestore()
    })
  })
  describe('basic interactions', () => {
    let wrapper = mount(<div />) // initialize to a :wrapper for type support

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
    it('renders aria attributes', () => {
      expect(wrapper.find('div[role="button"]').length).toBe(2)
      const node = wrapper.find('div[role="button"]').first()
      expect(node.getDOMNode().getAttribute('aria-controls')).toBeDefined()
      expect(node.getDOMNode().getAttribute('aria-expanded')).toBe('false')
      expect(node.getDOMNode().getAttribute('tabIndex')).toBe('0')
    })
    it('expands on click', () => {
      const el = wrapper.find('div[role="button"]').first()
    })
  })
})
