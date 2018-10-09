function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Fragment } from 'react';
import Button from '../Button';
import Icon from '../Icon';

const PagerButtonFactory = ({
  rotation
}) => props => {
  const {
    children
  } = props,
        rest = _objectWithoutProperties(props, ["children"]);

  return React.createElement(Fragment, null, React.createElement("span", {
    className: "sr-only"
  }, children), React.createElement(Button, _extends({}, rest, {
    color: "info",
    "aria-label": children
  }), React.createElement(Icon, {
    "aria-hidden": "true",
    icon: "chevronDown",
    rotation: rotation
  })));
};

export default PagerButtonFactory;