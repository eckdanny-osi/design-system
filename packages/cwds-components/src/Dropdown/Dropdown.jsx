import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Dropdown.module.scss'

const propTypes = {

};

const defaultProps = {

};

const Dropdown = props => {
  return (
    <div className={cn(styles.Dropdown)}>Hello World</div>
  );
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
