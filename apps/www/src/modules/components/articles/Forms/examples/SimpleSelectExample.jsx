import React, { Component, Fragment } from 'react'
import { Formik } from 'formik'
import { Card, CardBody, Select, FormGroup, Label } from '@cwds/components'
import { CodeBlock } from '@cwds/docs'

const TOPPINGS = [
  { value: '9', label: 'Anchovies' },
  { value: '3', label: 'Bacon' },
  { value: '8', label: 'Chicken' },
  { value: '6', label: 'Ham' },
  { value: '2', label: 'Mushrooms' },
  { value: '10', label: 'Olives' },
  { value: '7', label: 'Onion' },
  { value: '1', label: 'Pepperoni' },
  { value: '5', label: 'Peppers' },
  { value: '4', label: 'Sausage' },
]

const initialValues = {
  toppings: ['9', '8', '7', '4'],
}

class MySelect extends Component {
  getValues = (vals, options) => {
    return vals.reduce((acc, id) => {
      return [...acc, options.find(option => id === option.value)]
    }, [])
  }

  handleChange = (value, meta) => {
    this.props.onChange('toppings', value.map(d => d.value))
  }

  handleBlur = () => {
    this.props.onBlur('toppings', true)
  }

  render() {
    return (
      <Select
        isMulti
        options={this.props.options}
        value={this.getValues(this.props.value, this.props.options)}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    )
  }
}

const SimpleCheckboxBankExample = ({ noDebug }) => {
  return (
    <Formik initialValues={initialValues}>
      {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
        <Card>
          <CardBody>
            <FormGroup>
              <Label>Toppings</Label>
              <MySelect
                options={TOPPINGS}
                value={values.toppings}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.toppings}
                touched={touched.toppings}
              />
              {!noDebug && (
                <Fragment>
                  <hr />
                  <CodeBlock language="json" className="mb-0">
                    {JSON.stringify({ values }, null, 2)}
                  </CodeBlock>
                </Fragment>
              )}
            </FormGroup>
          </CardBody>
        </Card>
      )}
    </Formik>
  )
}

export default SimpleCheckboxBankExample
