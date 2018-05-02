import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './MyComponent.module.scss'

const propTypes = {

};

const defaultProps = {

};

const MyComponent = props => {
  return (
    <div className={cn(styles.MyComponent)}>Hello World</div>
  );
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
