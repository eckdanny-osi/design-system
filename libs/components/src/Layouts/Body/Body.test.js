import React from 'react'
import { shallow } from 'enzyme'
import Body from '../Body'

describe('Body', () => {
  it('exists', () => {
    expect(Body).toBeDefined()
  })

  it('defaults to dashboard layout', () => {
    expect(Body.defaultProps.layout).toBe('dashboard')
  })

  describe('with dashboard layout', () => {
    const layout = 'dashboard'

    it('renders the main element', () => {
      const main = <div id="my-main">Hello, world!</div>
      expect(
        shallow(<Body layout={layout} main={main} />)
          .find('#my-main')
          .exists()
      ).toBe(true)
    })

    it('renders no sidenav element', () => {
      const sidenav = <div id="my-sidenav">Side Nav</div>
      expect(
        shallow(<Body layout={layout} sidenav={sidenav} />)
          .find('#my-sidenav')
          .exists()
      ).toBe(false)
    })
  })

  describe('with subroutes layout', () => {
    const layout = 'subroutes'

    it('renders the main element', () => {
      const main = <div id="my-main">Hello, world!</div>
      expect(
        shallow(<Body layout={layout} main={main} />)
          .find('#my-main')
          .exists()
      ).toBe(true)
    })

    it('renders the sidenav element', () => {
      const sidenav = <div id="my-sidenav">Side Nav</div>
      expect(
        shallow(<Body layout={layout} sidenav={sidenav} />)
          .find('#my-sidenav')
          .exists()
      ).toBe(true)
    })
  })

  describe('with jumpnav layout', () => {
    const layout = 'jumpnav'

    it('renders the main element', () => {
      const main = <div id="my-main">Hello, world!</div>
      expect(
        shallow(<Body layout={layout} main={main} />)
          .find('#my-main')
          .exists()
      ).toBe(true)
    })

    it('renders the sidenav element', () => {
      const sidenav = <div id="my-sidenav">Side Nav</div>
      expect(
        shallow(<Body layout={layout} sidenav={sidenav} />)
          .find('#my-sidenav')
          .exists()
      ).toBe(true)
    })
  })
})
