import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardTitle } from '@cwds/components'
import { CheckboxBank } from '@cwds/forms'
import { Form } from '@cwds/reactstrap'

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
      <Card>
        <CardHeader>
          <CardTitle>CheckboxBank Example</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <CheckboxBank
              options={this.OPTIONS}
              onChange={this.handleOnChange}
              value={this.state.value}
              inline
            />
          </Form>
        </CardBody>
      </Card>
    )
  }
}
