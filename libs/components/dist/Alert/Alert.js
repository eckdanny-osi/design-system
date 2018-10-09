function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import Fade from 'reactstrap/lib/Fade';
import Icon, { ICON_NAMES, getIcon } from '../Icon';
import styles from "./Alert.module.css";
const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transition: PropTypes.shape(Fade.propTypes)
};
const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  transition: _objectSpread({}, Fade.defaultProps, {
    unmountOnExit: true,
    appear: false,
    enter: false
  })
};

function Alert(props) {
  const {
    className,
    closeClassName,
    closeAriaLabel,
    cssModule = styles,
    tag: Tag,
    color,
    isOpen,
    toggle,
    children,
    transition
  } = props,
        attributes = _objectWithoutProperties(props, ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition"]);

  const classes = mapToCssModules(classNames(className, 'alert', `alert-${color}`, {
    'alert-dismissible': toggle
  }), cssModule);
  const closeClasses = mapToCssModules(classNames('close', closeClassName), styles);
  return React.createElement(Fade, _extends({}, attributes, transition, {
    tag: Tag,
    className: classes,
    in: isOpen,
    role: "alert"
  }), React.createElement("div", {
    className: mapToCssModules(classNames('alert-icon-container', {
      'alert-dismissible': !!toggle
    }), styles)
  }, React.createElement(Icon, {
    icon: getIcon(color),
    style: {
      color: 'white'
    }
  })), React.createElement("div", {
    className: mapToCssModules(classNames('alert-body'), styles)
  }, toggle ? React.createElement("button", {
    type: "button",
    className: closeClasses,
    "aria-label": closeAriaLabel,
    onClick: toggle,
    style: {
      fontSize: '15px',
      padding: '12px'
    }
  }, React.createElement(Icon, {
    icon: "times"
  })) : null, children));
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
export default Alert;