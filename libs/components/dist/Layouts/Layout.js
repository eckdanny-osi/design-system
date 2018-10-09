import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from "./Layout.module.css";
const propTypes = {};
const defaultProps = {};

const Layout = props => {
  return React.createElement("div", {
    className: cn(styles.Layout)
  }, "Hello World");
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
export default Layout;