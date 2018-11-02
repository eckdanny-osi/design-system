import React from 'react'
import { render } from 'react-dom'
import App from '../main'

document.addEventListener('DOMContentLoaded', () => {
  let data
  const el = document.getElementById('root')
  try {
    data = JSON.parse(el.getAttribute('data'))
  } catch (e) {
    data = {}
  }
  render(<App {...data} />, el)
})
