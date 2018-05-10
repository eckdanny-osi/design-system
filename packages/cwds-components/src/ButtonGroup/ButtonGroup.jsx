import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ButtonGroup.module.scss'

const propTypes = {

};

const defaultProps = {

};

const ButtonGroup = props => {
  return (
    <div className={cn(styles.ButtonGroup)}>Hello World</div>
  );
}

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
