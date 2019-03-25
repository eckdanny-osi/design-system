import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pick from 'lodash.pick'
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Page,
  Row,
} from '@cwds/components'

class ToggleRadios extends Component {
  static defaultProps = {
    options: [
      { value: 'foo', label: 'Foo' },
      { value: 'bar', label: 'Bar' },
      { value: 'quo', label: 'Quo' },
    ],
    color: 'secondary',
    size: 'sm',
    outline: false,
    onChange: () => {},
  }

  handleClick = e => {
    this.props.onChange(e.target.value)
  }

  render() {
    const buttonProps = pick(this.props, ['color', 'size', 'outline'])
    return (
      <ButtonGroup>
        {this.props.options.map(option => {
          return (
            <Button
              key={option.value}
              {...buttonProps}
              value={option.value}
              onClick={this.handleClick}
              active={option.value === this.props.value}
            >
              {option.label}
            </Button>
          )
        })}
      </ButtonGroup>
    )
  }
}

export class ToggleDemos extends Component {
  state = {
    radioValue: undefined,
    value2: undefined,
  }
  handleRadioChange = radioValue => {
    this.setState({ radioValue })
  }
  render() {
    return (
      <Page
        title="Toggles"
        Breadcrumb={
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>Demos</BreadcrumbItem>
            <BreadcrumbItem active>Toggles</BreadcrumbItem>
          </Breadcrumb>
        }
      >
        <div>
          <Card>
            <CardHeader>
              <CardTitle>alksdjf</CardTitle>
            </CardHeader>
            <CardBody>
              <Row className="mb-2">
                <Col>Defaults</Col>
                <Col>
                  <ToggleRadios
                    value={this.state.radioValue}
                    onChange={this.handleRadioChange}
                  />
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>Outline</Col>
                <Col>
                  <ToggleRadios
                    outline
                    value={this.state.radioValue}
                    onChange={this.handleRadioChange}
                  />
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>Color</Col>
                <Col>
                  <ToggleRadios
                    color="primary"
                    value={this.state.radioValue}
                    onChange={this.handleRadioChange}
                  />
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>Outline + Primary</Col>
                <Col>
                  <ToggleRadios
                    outline
                    color="primary"
                    value={this.state.radioValue}
                    onChange={this.handleRadioChange}
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </Page>
    )
  }
}

export default ToggleDemos
