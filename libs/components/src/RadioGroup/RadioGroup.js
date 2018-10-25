import * as React from 'react'
import * as PropTypes from 'prop-types'
import Legend from '../Legend'
import { Input, FormGroup } from 'reactstrap'
const noop = () => {}
const defaultRenderOption = ({
  name,
  inline,
  // onBlur: handleBlur,
  onChange: handleChange,
  option,
  value,
}) => {
  const id = `uniq__${name}--${option.label}`
  return React.createElement(
    FormGroup,
    {
      key: id,
      check: true,
      className: 'ml-2',
      inline: inline,
      disabled: option.disabled,
    },
    React.createElement(Input, {
      id: id,
      name: name,
      type: 'radio',
      checked: option.value === value,
      // onBlur={handleBlur}
      onChange: handleChange,
      value: option.value,
    }),
    React.createElement('label', { htmlFor: id }, option.label)
  )
}
/**
 * MyRadioGroup
 *
 * @example
 * <MyRadioGroup
 *   name="color"
 *   options={COLOR_OPTIONS}
 *   onChange={}
 *   touched={props.touched.color}
 *   error={props.errors.color}
 *   renderItem={({ error }) => (
 *     <div>{error}</div>
 *   )}
 * />
 */
export default class RadioGroup extends React.Component {
  constructor() {
    super(...arguments)
    this.renderOption = (option, index) => {
      // TODO: generate uuid here?
      return this.props.renderOption({
        option,
        index,
        inline: this.props.inline,
        name: this.props.name,
        value: this.props.value,
        onChange: this.handleChange,
        touched: this.props.touched,
        error: this.props.error,
      })
    }
    this.renderError = () => {}
    this.handleBlur = e => {
      console.debug('RadioGroup#handleBlur()')
      this.props.onBlur(e)
    }
    this.handleChange = e => {
      console.debug('RadioGroup#handleChange()')
      this.props.onChange(e)
    }
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'fieldset',
        null,
        this.props.legend &&
          React.createElement(Legend, { required: true }, this.props.legend),
        this.props.options.map(this.renderOption)
      ),
      this.props.error && this.props.renderError(this.props.error)
    )
  }
}
RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
}
RadioGroup.defaultProps = {
  error: '',
  onChange: noop,
  options: [],
  valueAccessor: option => option.value,
  renderOption: defaultRenderOption,
  renderError: errMsg => null,
}
