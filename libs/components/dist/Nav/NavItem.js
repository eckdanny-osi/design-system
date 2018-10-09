function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import getDisplayName from 'recompose/getDisplayName';
import NavItemUnstyled from 'reactstrap/lib/NavItem';
import Styles from "./Nav.module.css";

const NavItem = props => React.createElement(NavItemUnstyled, props);

NavItem.displayName = `cares(${getDisplayName(NavItemUnstyled)})`;
NavItem.propTypes = _objectSpread({}, NavItemUnstyled.propTypes);
NavItem.defaultProps = _objectSpread({}, NavItemUnstyled.defaultProps, {
  cssModule: Styles
});
export default NavItem;