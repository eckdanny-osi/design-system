import React, { Component } from 'react';
import Tooltip from './Tooltip';
import TooltipUncontrolledUnstyled from 'reactstrap/lib/UncontrolledTooltip';

export default class TooltipUncontrolled extends TooltipUncontrolledUnstyled {
  render() {
    <Tooltip isOpen={this.state.isOpen} toggle={this.toggle} {...this.props} />;
  }
}
