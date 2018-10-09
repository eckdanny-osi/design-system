function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import uniqueId from 'lodash.uniqueid';
import Input from '../Input';
import FormGroup from '../FormGroup';
import Label from '../Label';

class CheckboxBank extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleChange", e => {
      const {
        value,
        checked
      } = e.target;
      const newValues = checked ? [...this.props.value, value] : this.props.value.filter(item => item !== value);
      this.props.onChange(this.props.name, newValues);
    });
  }

  render() {
    const {
      options,
      name,
      labelKey,
      valueKey,
      value: values,
      error,
      inline
    } = this.props;
    return React.createElement(Fragment, null, options.map(options => {
      const [label, value] = [options[labelKey], options[valueKey]];
      const id = uniqueId();
      return React.createElement(FormGroup, {
        check: true,
        key: value,
        name: name,
        className: cn('ml-2', {
          'd-inline-block mr-4': inline
        })
      }, React.createElement(Input, {
        id: id,
        type: "checkbox",
        value: value,
        checked: values.includes(value),
        onChange: this.handleChange
      }), React.createElement(Label, {
        htmlFor: id
      }, label));
    }), React.createElement("div", null, error));
  }

}

_defineProperty(CheckboxBank, "propTypes", {
  disabled: PropTypes.bool,
  labelKey: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  })),
  render: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  valueKey: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  inline: PropTypes.bool
});

_defineProperty(CheckboxBank, "defaultProps", {
  labelKey: 'label',
  valueKey: 'value'
});

export default CheckboxBank;