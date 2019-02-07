import React from 'react'
import { render } from 'react-dom'

export default AppComponent => {
  document.addEventListener('DOMContentLoaded', () => {
    let data
    const el = document.getElementById('root')
    try {
      data = JSON.parse(el.getAttribute('data'))
    } catch (e) {
      data = {}
    }
    render(React.createElement(AppComponent, data), el)
  })
}
