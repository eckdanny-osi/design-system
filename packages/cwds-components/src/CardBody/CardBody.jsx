import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './CardBody.module.scss'

const propTypes = {

};

const defaultProps = {

};

const CardBody = props => {
  return (
    <div className={cn(styles.CardBody)}>Hello World</div>
  );
}

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
