function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { PureComponent } from 'react'; // import { ButtonUnstyled as Button } from '../Button';

import Button from '../Button';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Styles from "./Toggle.module.css";
const propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
};

const Option = props => {
  const {
    onClick
  } = props,
        attrs = _objectWithoutProperties(props, ["onClick"]);

  return React.createElement(Button, _extends({
    className: cn(Styles.Option, {
      [Styles.ActiveOption]: props.active
    }),
    onClick: e => onClick(props.value)
  }, attrs));
};

Option.propTypes = propTypes;
export default Option;