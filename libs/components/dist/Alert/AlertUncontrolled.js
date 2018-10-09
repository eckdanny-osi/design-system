function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import Alert from './Alert';

class AlertUncontrolled extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isOpen: true
    });

    _defineProperty(this, "toggle", () => this.setState({
      isOpen: !this.state.isOpen
    }));
  }

  render() {
    return React.createElement(Alert, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, this.props));
  }

}

export default AlertUncontrolled;