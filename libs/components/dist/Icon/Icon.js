function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from "./Icon.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import check from '@fortawesome/free-solid-svg-icons/faCheck';
import times from '@fortawesome/free-solid-svg-icons/faTimes';
import user from '@fortawesome/free-solid-svg-icons/faUser';
import search from '@fortawesome/free-solid-svg-icons/faSearch';
import spinner from '@fortawesome/free-solid-svg-icons/faSpinner';
import upload from '@fortawesome/free-solid-svg-icons/faUpload';
import circleNotch from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import checkCircle from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import plusCircle from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import infoCircle from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import exclamationTriangle from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import chevronDown from '@fortawesome/free-solid-svg-icons/faChevronDown';
import ellipsis from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import plus from '@fortawesome/free-solid-svg-icons/faPlus';
import minus from '@fortawesome/free-solid-svg-icons/faMinus';
import lightbulb from '@fortawesome/free-solid-svg-icons/faLightbulb';
import arrowUp from '@fortawesome/free-solid-svg-icons/faArrowUp';
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
  arrowUp: 'arrowUp'
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
  [ICON_NAMES.arrowUp]: arrowUp
};

const _FontAwesomeIcon$prop = FontAwesomeIcon.propTypes,
      {
  icon: __icon,
  fixedWidth: __fixedWidth,
  border: __border,
  listItem: __listItem,
  pulse: __pulse
} = _FontAwesomeIcon$prop,
      fontAwesomeIconPropTypes = _objectWithoutProperties(_FontAwesomeIcon$prop, ["icon", "fixedWidth", "border", "listItem", "pulse"]);

const propTypes = _objectSpread({}, fontAwesomeIconPropTypes, {
  icon: PropTypes.string.isRequired
});

export const Icon = props => {
  const {
    icon: name,
    color
  } = props,
        otherProps = _objectWithoutProperties(props, ["icon", "color"]);

  return React.createElement(FontAwesomeIcon, _extends({
    icon: ICONS[name],
    className: cn({
      [styles['color-primary']]: color === 'primary'
    }),
    focusable: "false"
  }, otherProps));
};
Icon.propTypes = propTypes; // Icon.defaultProps = defaultProps;

export default Icon;