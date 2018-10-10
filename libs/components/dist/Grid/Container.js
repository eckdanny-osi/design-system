function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import getDisplayName from 'react-display-name';
import ContainerUnstyled from 'reactstrap/lib/Container';
import Styles from "./Container.module.css";

const Container = props => React.createElement(ContainerUnstyled, props);

Container.displayName = `cares(${getDisplayName(ContainerUnstyled)})`;
Container.propTypes = _objectSpread({}, ContainerUnstyled.propTypes);
Container.defaultProps = _objectSpread({}, ContainerUnstyled.defaultProps, {
  cssModule: Styles
});
export default Container;