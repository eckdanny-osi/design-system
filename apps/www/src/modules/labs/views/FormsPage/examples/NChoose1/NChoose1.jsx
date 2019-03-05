import React from 'react'
import { Formik } from 'formik'
import {
  Card,
  Row,
  Col,
  FormFeedback,
  FormGroup,
  Label,
  Select,
} from '@cwds/components'

export default () => (
  <Formik
    initialValues={{
      myField: '',
    }}
    onSubmit={_ => {}}
    render={props => {
      const options = [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Quo', value: 'quo' },
        { label: 'Qux', value: 'qux' },
      ]
      return (
        <Card>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label required>My Select</Label>
                <Select
                  name="myField"
                  options={options}
                  onChange={option => {
                    props.setFieldValue('myField', option ? option.value : '')
                  }}
                  onBlur={_ => props.setFieldTouched('methodOfContact')}
                  value={props.values.myField}
                />
                <FormFeedback>{props.errors.myField}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
        </Card>
      )
    }}
  />
)
