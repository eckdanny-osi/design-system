import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Card.module.scss';

const propTypes = {};

const defaultProps = {};

const CardFooter = props => {
  return <div className={cn(styles['card-footer'])} {...props} />;
};

CardFooter.propTypes = propTypes;
CardFooter.defaultProps = defaultProps;

export default CardFooter;
