import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './CardFooter.module.scss'

const propTypes = {

};

const defaultProps = {

};

const CardFooter = props => {
  return (
    <div className={cn(styles.CardFooter)}>Hello World</div>
  );
}

CardFooter.propTypes = propTypes;
CardFooter.defaultProps = defaultProps;

export default CardFooter;
