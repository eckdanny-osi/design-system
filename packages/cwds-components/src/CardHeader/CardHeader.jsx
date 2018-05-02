import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './CardHeader.module.scss'

const propTypes = {

};

const defaultProps = {

};

const CardHeader = props => {
  return (
    <div className={cn(styles.CardHeader)}>Hello World</div>
  );
}

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
