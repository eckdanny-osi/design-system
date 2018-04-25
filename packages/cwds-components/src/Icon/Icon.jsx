import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// import styles from './Icon.scss';
// import styles from 'font-awesome/scss/font-awesome.scss';
// import FontAwesome from 'react-fontawesome';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import coffee from '@fortawesome/fontawesome-free-solid/faCoffee';
import poo from '@fortawesome/fontawesome-free-solid/faPoo';
import spinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import upload from '@fortawesome/fontawesome-free-solid/faUpload';
import circleNotch from '@fortawesome/fontawesome-free-solid/faCircleNotch';
upload;

const ICONS = {
  coffee: coffee,
  poo: poo,
  spinner: spinner,
  upload: upload,
  circleNotch: circleNotch,
};

const propTypes = {};

const defaultProps = {};

const Icon = props => {
  const { icon: name, ...otherProps } = props;
  console.log(name);
  console.log(ICONS[name]);
  return <FontAwesomeIcon icon={ICONS[name]} {...otherProps} />;
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
