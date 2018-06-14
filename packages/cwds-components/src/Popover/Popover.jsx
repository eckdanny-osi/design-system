import React, { Component } from 'react';
import PopoverUnstyled from 'reactstrap/lib/Popover';
import Styles from './Popover.module.scss';

export class Popover extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <PopoverUnstyled cssModule={Styles} {...props} />;
  }
}

export { PopoverUnstyled };

export default Popover;
