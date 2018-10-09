import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from "./Dropdown.module.css";
const propTypes = {};
const defaultProps = {};

const Dropdown = props => {
  return React.createElement("div", {
    className: cn(styles.Dropdown)
  }, "Hello World");
};

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
export default Dropdown;