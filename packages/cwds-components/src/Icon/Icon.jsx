import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// import styles from './Icon.scss';
// import styles from 'font-awesome/scss/font-awesome.scss';
// import FontAwesome from 'react-fontawesome';

import { default as FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import check from '@fortawesome/fontawesome-free-solid/faCheck';
import times from '@fortawesome/fontawesome-free-solid/faTimes';
import user from '@fortawesome/fontawesome-free-solid/faUser';
import search from '@fortawesome/fontawesome-free-solid/faSearch';
import spinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import upload from '@fortawesome/fontawesome-free-solid/faUpload';
import circleNotch from '@fortawesome/fontawesome-free-solid/faCircleNotch';
import checkCircle from '@fortawesome/fontawesome-free-solid/faCheckCircle';
import infoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle';
import exclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';
import chevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown';

export const ICON_NAMES = {
  check: 'check',
  times: 'times',
  spinner: 'spinner',
  upload: 'upload',
  circleNotch: 'circleNotch',
  checkCircle: 'checkCircle',
  infoCircle: 'infoCircle',
  error: 'error',
  user: 'user',
  search: 'search',
  chevronDown: 'chevronDown',
};

const ICONS = {
  [ICON_NAMES.check]: check,
  [ICON_NAMES.times]: times,
  [ICON_NAMES.spinner]: spinner,
  [ICON_NAMES.upload]: upload,
  [ICON_NAMES.circleNotch]: circleNotch,
  [ICON_NAMES.checkCircle]: checkCircle,
  [ICON_NAMES.infoCircle]: infoCircle,
  [ICON_NAMES.error]: exclamationTriangle,
  [ICON_NAMES.user]: user,
  [ICON_NAMES.search]: search,
  [ICON_NAMES.chevronDown]: chevronDown,
};

const {
  icon: __icon,
  fixedWidth: __fixedWidth,
  border: __border,
  listItem: __listItem,
  pulse: __pulse,
  ...fontAwesomeIconPropTypes
} = FontAwesomeIcon.propTypes;

const propTypes = Object.assign({}, fontAwesomeIconPropTypes, {
  icon: PropTypes.string.isRequired,
});

export const Icon = props => {
  const { icon: name, ...otherProps } = props;
  return <FontAwesomeIcon icon={ICONS[name]} {...otherProps} />;
};

Icon.propTypes = propTypes;
// Icon.defaultProps = defaultProps;

export default Icon;
