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
    this.setState({
      isInline: !this.state.isInline,
    })
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
            <Legend>Pick Something...</Legend>
            <FormGroup check inline={this.state.isInline}>
              <Input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <Label className="form-check-label" htmlFor="inlineCheckbox1">
                1
              </Label>
            </FormGroup>
            <CheckboxControl
              id="inlineCheckbox2"
              value="option2"
              checked={this.state.data.options.includes('option2')}
              onChange={this.handleChangeOption}
              label="Option 2"
            />
            {/* <FormGroup check inline={this.state.isInline}>
              <Input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <Label className="form-check-label" htmlFor="inlineCheckbox2">
                2
              </Label>
            </FormGroup> */}
            <FormGroup check inline={this.state.isInline}>
              <Input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
                disabled
              />
              <Label className="form-check-label" htmlFor="inlineCheckbox3">
                3 (disabled)
              </Label>
            </FormGroup>
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
