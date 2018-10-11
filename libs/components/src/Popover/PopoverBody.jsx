import React, { Component } from 'react';
import PopoverBodyUnstyled from 'reactstrap/lib/PopoverBody';
import Styles from './Popover.module.scss';

export class PopoverBody extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <PopoverBodyUnstyled cssModule={Styles} {...props} />;
  }
}

export { PopoverBodyUnstyled };

export default PopoverBody;
