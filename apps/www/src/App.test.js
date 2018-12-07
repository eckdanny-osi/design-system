import React from 'react'
import { render } from 'react-testing-library'
import App from './App'

jest.mock('./modules/status', () => () => null)
jest.mock('./modules/home', () => () => null)
jest.mock('./modules/core-style', () => () => null)
jest.mock('./modules/labs', () => () => null)
jest.mock('./modules/components', () => () => null)

describe('App', () => {
  it('renders a jumpToTop button', () => {
    const spy = jest
      .spyOn(global.window, 'scrollTo')
      .mockImplementationOnce(() => {})
    const wrapper = render(<App />)
    const $el = wrapper.getByText('Scroll to top').parentElement
    expect($el).toBeInTheDocument()
    expect($el.tagName).toBe('BUTTON')
    expect(spy).not.toHaveBeenCalled()
    $el.click()
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
