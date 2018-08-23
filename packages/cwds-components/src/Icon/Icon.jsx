import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Icon.module.scss';

import { default as FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import check from '@fortawesome/fontawesome-free-solid/faCheck';
import times from '@fortawesome/fontawesome-free-solid/faTimes';
import user from '@fortawesome/fontawesome-free-solid/faUser';
import search from '@fortawesome/fontawesome-free-solid/faSearch';
import spinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import upload from '@fortawesome/fontawesome-free-solid/faUpload';
import circleNotch from '@fortawesome/fontawesome-free-solid/faCircleNotch';
import checkCircle from '@fortawesome/fontawesome-free-solid/faCheckCircle';
import plusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';
import infoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle';
import exclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';
import chevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown';
import ellipsis from '@fortawesome/fontawesome-free-solid/faEllipsisV';
import plus from '@fortawesome/fontawesome-free-solid/faPlus';
import minus from '@fortawesome/fontawesome-free-solid/faMinus';
import lightbulb from '@fortawesome/fontawesome-free-solid/faLightbulb';

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
  plus: 'plus',
  minus: 'minus',
  plusCircle: 'plusCircle',
  ellipsis: 'ellipsis',
  lightbulb: 'lightbulb',
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
  [ICON_NAMES.plus]: plus,
  [ICON_NAMES.minus]: minus,
  [ICON_NAMES.plusCircle]: plusCircle,
  [ICON_NAMES.ellipsis]: ellipsis,
  [ICON_NAMES.lightbulb]: lightbulb,
};

const {
  icon: __icon,
  fixedWidth: __fixedWidth,
  border: __border,
  listItem: __listItem,
  pulse: __pulse,
  ...fontAwesomeIconPropTypes
} = FontAwesomeIcon.propTypes;

const propTypes = {
  ...fontAwesomeIconPropTypes,
  icon: PropTypes.string.isRequired,
};

export const Icon = props => {
  const { icon: name, color, ...otherProps } = props;
  return (
    <FontAwesomeIcon
      icon={ICONS[name]}
      className={cn({
        [styles['color-primary']]: color === 'primary',
      })}
      {...otherProps}
    />
  );
};

Icon.propTypes = propTypes;
// Icon.defaultProps = defaultProps;

export default Icon;
