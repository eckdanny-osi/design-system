import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Toggle.module.scss'

const propTypes = {

};

const defaultProps = {

};

const Toggle = props => {
  return (
    <div className={cn(styles.Toggle)}>Hello World</div>
  );
}

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
