import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Card.module.scss';

const propTypes = {};

const defaultProps = {};

const CardBody = props => {
  return <div className={cn(styles['card-body'])} {...props} />;
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
