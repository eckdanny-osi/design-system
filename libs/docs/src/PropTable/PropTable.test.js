import React from 'react'
import ReactDOM from 'react-dom'
import PropTable from './'

describe('PropTable', () => {
  it('renders', () => {
    const div = document.createElement('div')
    const info = { displayName: 'MyComponent', props: [] }
    ReactDOM.render(<PropTable docgen={info} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
