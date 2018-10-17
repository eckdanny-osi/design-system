import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Layout.module.scss';

const propTypes = {};

const defaultProps = {};

const Layout = props => {
  return <div className={cn(styles.Layout)}>Hello World</div>;
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
