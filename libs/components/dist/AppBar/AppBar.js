function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from "./AppBar.module.css";
import { Row, Col, Container } from '../Grid';
import Logo from '../Logo';
import Button from '../Button';
import Popover from '../Popover';
import Avatar from '../Avatar';
import { ListGroup, ListGroupItem } from '../ListGroups';

const defaultActionsRenderer = () => {};

class AppBar extends PureComponent {
  static config(opts) {
    AppBar.options = _objectSpread({}, AppBar.options, opts);
  }

  constructor(props) {
    super(props);
    this.renderBrand = this.renderBrand.bind(this);
  }

  renderBrand() {
    const {
      brand
    } = this.props;
    return brand ? brand() : AppBar.options.brand();
  }

  renderActions() {
    const _this$props = this.props,
          {
      actions
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["actions"]);

    return actions ? actions(props) : AppBar.options.actions(props);
  }

  render() {
    const _this$props2 = this.props,
          {
      actions
    } = _this$props2,
          props = _objectWithoutProperties(_this$props2, ["actions"]);

    return React.createElement(Row, {
      style: {
        alignItems: 'center'
      }
    }, React.createElement(Col, null, this.renderBrand()), React.createElement(Col, {
      className: "text-right"
    }, this.renderActions()));
  }

}

_defineProperty(AppBar, "options", {
  brand: _ => React.createElement("a", null, "CWDS-CARES"),
  actions: defaultActionsRenderer
});

_defineProperty(AppBar, "propTypes", {
  brand: PropTypes.func,
  actions: PropTypes.func
});

export default AppBar;