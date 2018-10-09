function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import getDisplayName from 'react-display-name';
import RowUnstyled from 'reactstrap/lib/Row';
import Styles from "./Row.module.css";

const Row = props => React.createElement(RowUnstyled, props);

Row.displayName = `cares(${getDisplayName(RowUnstyled)})`;
Row.propTypes = _objectSpread({}, RowUnstyled.propTypes);
Row.defaultProps = _objectSpread({}, RowUnstyled.defaultProps, {
  cssModule: Styles
});
export default Row;