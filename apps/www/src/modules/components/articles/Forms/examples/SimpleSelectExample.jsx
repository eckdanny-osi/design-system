import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import partial from 'lodash.partial'
import get from 'lodash.get'
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
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    formatValue: PropTypes.func,
    parseValue: PropTypes.func,
  }

  static defaultProps = {
    formatValue: x => get(x, 'value'),
  }

  parseValue = () => {
    const { value, options, formatValue, parseValue } = this.props
    if (parseValue) return parseValue(value, options)
    return value.reduce((acc, val) => {
      return [...acc, options.find(opt => val === formatValue(opt))]
    }, [])
  }

  handleChange = (value, meta) => {
    this.props.onChange(value.map(this.props.formatValue))
  }

  handleBlur = () => {
    this.props.onBlur(true)
  }

  render() {
    return (
      <Select
        isMulti
        options={this.props.options}
        value={this.parseValue()}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    )
  }
}

const SimpleCheckboxBankExample = ({ noDebug }) => {
  return (
    <Formik initialValues={initialValues}>
      {({ values, setFieldValue, setFieldTouched }) => (
        <Card>
          <CardBody>
            <FormGroup>
              <Label>Toppings</Label>
              <MySelect
                options={TOPPINGS}
                value={get(values, 'toppings')}
                onChange={partial(setFieldValue, 'toppings')}
                onBlur={partial(setFieldTouched, 'toppings')}
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
