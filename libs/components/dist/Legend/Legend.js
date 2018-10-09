function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from "../Forms/Forms.module.css";
const propTypes = {};
const defaultProps = {};

const Legend = props => React.createElement("legend", _extends({
  className: cn(styles['legend'], {
    [styles['required']]: !!props.required
  })
}, props));

Legend.propTypes = propTypes;
Legend.defaultProps = defaultProps;
export default Legend;