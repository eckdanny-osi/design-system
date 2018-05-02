import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ActionCard.module.scss'

const propTypes = {

};

const defaultProps = {

};

const ActionCard = props => {
  return (
    <div className={cn(styles.ActionCard)}>Hello World</div>
  );
}

ActionCard.propTypes = propTypes;
ActionCard.defaultProps = defaultProps;

export default ActionCard;
