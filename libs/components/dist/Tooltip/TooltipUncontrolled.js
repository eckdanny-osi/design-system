function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react';
import Tooltip from './Tooltip';
import TooltipUncontrolledUnstyled from 'reactstrap/lib/UncontrolledTooltip';
export default class TooltipUncontrolled extends TooltipUncontrolledUnstyled {
  render() {
    React.createElement(Tooltip, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, this.props));
  }

}