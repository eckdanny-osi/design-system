import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, FormFeedback, Input } from '../Forms';
import cn from 'classnames';

const noop = () => {};

const propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onChange: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
const defaultProps = {
  onChange: noop
};
export const Field = ({
  component: Component = Input,
  value,
  label,
  onChange,
  onBlur,
  onFocus
}) => {
  return React.createElement(FormGroup, null, label && React.createElement(Label, null, label), Component && React.createElement(Component, {
    onChange: onChange,
    value: value
  }), React.createElement(FormFeedback, null, "You will not be able to see this"));
};
Field.propTypes = propTypes;
Field.defaultProps = defaultProps;
export default Field;