import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import uniqueId from 'lodash.uniqueid'
import { Input, FormGroup, Label } from '@cwds/reactstrap'

class CheckboxBank extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    labelKey: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
      })
    ),
    render: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    valueKey: PropTypes.string,
    error: PropTypes.string,
    touched: PropTypes.bool,
    inline: PropTypes.bool,
  }
  static defaultProps = {
    labelKey: 'label',
    valueKey: 'value',
  }
  handleChange = e => {
    const { value, checked } = e.target
    const newValues = checked
      ? [...this.props.value, value]
      : this.props.value.filter(item => item !== value)
    this.props.onChange(this.props.name, newValues)
  }
  render() {
    const {
      options,
      name,
      labelKey,
      valueKey,
      value: values,
      error,
      inline,
    } = this.props
    return (
      <Fragment>
        {options.map(options => {
          const [label, value] = [options[labelKey], options[valueKey]]
          const id = uniqueId()
          return (
            <FormGroup
              check
              key={value}
              name={name}
              className={cn('ml-2', {
                'd-inline-block mr-4': inline,
              })}
            >
              <Input
                id={id}
                type="checkbox"
                value={value}
                checked={values.includes(value)}
                onChange={this.handleChange}
              />
              <Label htmlFor={id}>{label}</Label>
            </FormGroup>
          )
        })}
        <div>{error}</div>
      </Fragment>
    )
  }
}

export default CheckboxBank
