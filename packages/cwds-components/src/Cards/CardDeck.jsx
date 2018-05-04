import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Card.module.scss';

const propTypes = {};

const defaultProps = {};

const CardDeck = props => {
  return <div className={cn(styles['card-deck'])} {...props} />;
};

CardDeck.propTypes = propTypes;
CardDeck.defaultProps = defaultProps;

export default CardDeck;
