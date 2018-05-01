import React, { Component } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Button as RSButton } from 'reactstrap';
import { withPropAdapter, withCssModule } from '../utils';
import styles from './Button.module.scss';

const adapterFn = props => {
  const {
    primary,
    warning,
    color: _,
    outline,
    block,
    ...passThroughProps
  } = props;
  // order conditional style by logical severity
  const color = (warning && 'warning') || (primary && 'primary') || 'secondary';
  return { color, ...passThroughProps };
};

const buttonPropTypes = parentPropTypes => {
  const { color, size, outline, block, ...propTypes } = parentPropTypes;
  return {
    primary: PropTypes.bool,
    warning: PropTypes.bool,
    ...propTypes,
  };
};

const buttonDefaultProps = parentDefaultProps => {
  const { color, size, outline, block, ...defaultProps } = parentDefaultProps;
  return {
    primary: false,
    warning: false,
    ...defaultProps,
  };
};

export const Button = withCssModule(RSButton, styles);

export default withPropAdapter(
  Button,
  adapterFn,
  buttonPropTypes,
  buttonDefaultProps,
  'Button'
);
