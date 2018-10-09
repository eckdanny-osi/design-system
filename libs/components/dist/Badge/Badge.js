function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import BadgeUnstyled from 'reactstrap/lib/Badge';
import getDisplayName from 'react-display-name';
import Styles from "./Badge.module.css";

const Badge = props => React.createElement(BadgeUnstyled, props);

Badge.displayName = `cares(${getDisplayName(BadgeUnstyled)})`;
Badge.propTypes = _objectSpread({}, BadgeUnstyled.propTypes);
Badge.defaultProps = _objectSpread({}, BadgeUnstyled.defaultProps, {
  cssModule: Styles
});
export default Badge;