import React, { Component } from 'react'
import { Row, Col, Card, CardBody, Alert } from '@cwds/components'

class DismissableAlertExample extends Component {
  rdoGrpName = 'DismissableAlertExampleGroup'
  state = {
    isOpen: true,
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <Card>
        <CardBody>
          <Alert toggle={this.toggle} isOpen={this.state.isOpen}>
            <p>I am dismissable!</p>
            <p>
              You may also be interested to see how the overflow conditions work
              here...
            </p>
            <p className="mb-0">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </Alert>
          <Card className="mb-0">
            <CardBody>
              <Row>
                <Col md="6">
                  <fieldset>
                    <legend>
                      <small>isOpen</small>
                    </legend>
                    {[
                      { label: 'True', value: true },
                      { label: 'False', value: false },
                    ].map(({ label, value }) => (
                      <label key={label} className="mr-3">
                        <input
                          type="radio"
                          name={this.rdoGrpName}
                          value={value}
                          checked={value === this.state.isOpen}
                          onChange={this.toggle}
                          className="mr-1"
                        />
                        {label}
                      </label>
                    ))}
                  </fieldset>
                </Col>
                <Col md="6">
                  <pre className="mb-0 p-2 text-light bg-dark rounded">
                    <code>{JSON.stringify(this.state, null, 2)}</code>
                  </pre>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    )
  }
}

export default DismissableAlertExample
