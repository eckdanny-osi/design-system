import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardTitle } from '@cwds/components'
import {
  Label,
  Input,
  FormGroup,
  FormText,
  FormFeedback,
} from '@cwds/reactstrap'
import { Fieldset, Legend, CheckboxControl } from '@cwds/forms'

export class Example extends Component {
  state = {
    isInline: false,
    data: {
      options: [],
    },
  }
  handleChangeIsInline = () => {
    this.setState({ isInline: !this.state.isInline })
  }
  handleChangeOption = e => {
    const { checked, value } = e.target
    this.setState(
      state => {
        return {
          data: {
            ...this.state.data,
            options: checked
              ? [...this.state.data.options, value]
              : this.state.data.options.filter(d => d !== value),
          },
        }
      },
      () => console.log(this.state.data.options)
    )
  }
  render() {
    return (
      <Card>
        <CardHeader className="d-flex align-items-center justify-content-between">
          <CardTitle>Simple Example</CardTitle>
          <div>
            <FormGroup check inline>
              <Input
                type="checkbox"
                id="example__is-inline"
                checked={Boolean(this.state.isInline)}
                onChange={this.handleChangeIsInline}
              />
              <Label check htmlFor="example__is-inline">
                Inline?
              </Label>
            </FormGroup>
          </div>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label for="exampleEmail">Valid input</Label>
            <Input valid />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <Fieldset>
            <Legend>Pick Some Values</Legend>
            <CheckboxControl
              inline={this.state.isInline}
              id="rdo__foo"
              value="foo"
              label="Foo"
              checked={this.state.data.options.includes('foo')}
              onChange={this.handleChangeOption}
            />
            <CheckboxControl
              inline={this.state.isInline}
              id="rdo__bar"
              value="bar"
              label="Bar"
              checked={this.state.data.options.includes('bar')}
              onChange={this.handleChangeOption}
            />
            <CheckboxControl
              inline={this.state.isInline}
              id="rdo__quo"
              value="quo"
              label="Quo"
              checked={this.state.data.options.includes('quo')}
              onChange={this.handleChangeOption}
            />
          </Fieldset>
          <FormGroup>
            <Label for="exampleEmail">Valid input</Label>
            <Input valid />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
        </CardBody>
      </Card>
    )
  }
}

export default Example
