import React, { Fragment, Component } from 'react'
import {
  Button,
  Card,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Icon,
} from '@cwds/components'
import { Formik } from 'formik'
import MultiCard from '@cwds/components/dist/Cards/CardMultiContext'

class Example extends Component {
  state = {
    values: {
      foo: 'some value',
      bar: 'another value',
      quo: 'yet another value',
    },
  }

  render() {
    return (
      <MultiCard
        title="My Resource"
        read={({ renderHeader, toggleScope, scope }) => (
          <Card>
            {renderHeader({ scope })}
            <Card.Body>
              <p>Check out these interesting stats:</p>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label>Foo</Label>
                    <Input
                      readOnly
                      disabled
                      type="text"
                      value={this.state.values.foo}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label>Bar</Label>
                    <Input
                      readOnly
                      disabled
                      type="text"
                      value={this.state.values.bar}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label>Quo</Label>
                    <Input
                      readOnly
                      disabled
                      type="text"
                      value={this.state.values.quo}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ac est orci. Praesent tempus orci non est dapibus, non
                faucibus purus elementum. Nunc non risus et nunc faucibus
                ultrices in eu nunc. Suspendisse potenti. Praesent convallis
                ligula non metus pulvinar, et cursus nibh suscipit. Ut mollis
                vitae arcu gravida bibendum. Etiam facilisis massa quis
                tincidunt interdum. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Maecenas
                pulvinar fringilla urna, condimentum luctus purus faucibus at.
                In lectus tortor, pulvinar sed ipsum vel, vestibulum aliquet
                orci. Ut facilisis fringilla rutrum. Nullam consequat, enim et
                egestas tincidunt, nisl tortor ultrices dolor, ut consequat sem
                nisl in sapien. Nulla in justo lacus.
              </p>

              <blockquote
                style={{
                  fontFamily: 'serif',
                  fontSize: '185%',
                  fontStyle: 'italic',
                  fontWeight: 600,
                }}
              >
                Four score and seven years ago our fathers brought forth on this
                continent, a new nation, conceived in Liberty, and dedicated to
                the proposition that all men are created equal.
              </blockquote>
            </Card.Body>
          </Card>
        )}
        edit={({ renderHeader, toggleScope, scope }) => (
          <Formik
            initialValues={this.state.values}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                actions.resetForm(values)
                this.setState({ values })
                toggleScope()
              }, 1000)
            }}
            render={props => {
              const onChange = e =>
                props.setFieldValue(e.target.name, e.target.value)
              return (
                <form onSubmit={props.handleSubmit} autoComplete="off">
                  <Card>
                    {renderHeader({ scope })}
                    <Card.Body>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label htmlFor="multiscopedemo__foo">Foo</Label>
                            <Input
                              id="multiscopedemo__foo"
                              name="foo"
                              type="text"
                              onChange={onChange}
                              value={props.values.foo}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label htmlFor="multiscopedemo__bar">Bar</Label>
                            <Input
                              id="multiscopedemo__bar"
                              name="bar"
                              type="text"
                              onChange={onChange}
                              value={props.values.bar}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label htmlFor="multiscopedemo__quo">Quo</Label>
                            <Input
                              id="multiscopedemo__quo"
                              name="quo"
                              type="text"
                              onChange={onChange}
                              value={props.values.quo}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Card.Body>
                    <Card.Footer>
                      <Button onClick={toggleScope}>Cancel</Button>{' '}
                      <Button
                        type="submit"
                        color="primary"
                        disabled={
                          !(props.dirty && props.isValid) || props.isSubmitting
                        }
                      >
                        {props.isSubmitting ? (
                          <Fragment>
                            <Icon className="mr-2" icon="circleNotch" spin />
                            Saving...
                          </Fragment>
                        ) : (
                          'Save'
                        )}
                      </Button>
                    </Card.Footer>
                  </Card>
                </form>
              )
            }}
          />
        )}
      />
    )
  }
}

export default Example
