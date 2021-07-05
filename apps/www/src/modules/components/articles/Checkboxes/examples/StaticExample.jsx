import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardTitle } from '@cwds/components'
import {
  Label,
  Input,
  FormGroup,
  FormText,
  FormFeedback,
} from '@cwds/reactstrap'
import { Fieldset, Legend, CheckboxControl, CheckboxBank } from '@cwds/forms'

export class Example extends Component {
  state = {
    isInline: false,
    data: {
      options: [],
      letters: [],
    },
  }
  handleChangeIsInline = () => {
    this.setState({ isInline: !this.state.isInline })
  }
  handleChangeOption = e => {
    const { checked, value } = e.target
    this.setState({
      data: {
        ...this.state.data,
        options: checked
          ? [...this.state.data.options, value]
          : this.state.data.options.filter(d => d !== value),
      },
    })
  }
  handleChangeLetters = e => {
    const { checked, value } = e.target
    this.setState({
      data: {
        ...this.state.data,
        letters: checked
          ? [...this.state.data.letters, value]
          : this.state.data.letters.filter(d => d !== value),
      },
    })
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
          <CheckboxBank
            options={[
              { label: 'Alpha', value: 'a' },
              { label: 'Bravo', value: 'b' },
              { label: 'Charlie', value: 'c' },
              { label: 'Delta', value: 'd' },
              { label: 'Echo', value: 'e', disabled: true },
              { label: 'Foxtrot', value: 'f' },
            ]}
            name="letters"
            value={this.state.data.letters}
            onChange={this.handleChangeLetters}
            inline={this.state.isInline}
          />
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
