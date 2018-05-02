import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Card.module.scss';

const propTypes = {};

const defaultProps = {};

const CardHeader = props => {
  return <div className={cn(styles['card-header'])}>Hello World</div>;
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
