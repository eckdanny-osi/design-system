import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from '../Forms/Forms.module.scss';

const propTypes = {};

const defaultProps = {};

const Legend = props => (
  <legend
    className={cn(styles['legend'], {
      [styles['required']]: !!props.required,
    })}
    {...props}
  />
);

Legend.propTypes = propTypes;
Legend.defaultProps = defaultProps;

export default Legend;
