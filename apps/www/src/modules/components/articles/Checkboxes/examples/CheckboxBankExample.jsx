import React, { Component } from 'react'
import { CheckboxBank } from '@cwds/forms'

export default class CheckboxBankExample extends Component {
  OPTIONS = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
    { label: 'Quo', value: 'quo' },
    { label: 'Qux', value: 'qux' },
  ]

  state = {
    value: [],
  }

  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target
    this.setState({
      value: checked
        ? [...this.state.value, value]
        : this.state.value.filter(d => d !== value),
    })
  }

  render() {
    return (
      <div className="bg-white">
        <CheckboxBank
          options={this.OPTIONS}
          onChange={this.handleOnChange}
          value={this.state.value}
        >
          alksdjflaksdjf
        </CheckboxBank>
        <br />
        <div className="pretty p-default">
          <input type="checkbox" />
          <div className="state">
            <label>Default</label>
          </div>
        </div>
      </div>
    )
  }
}
