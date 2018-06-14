import React, { Component } from 'react';
import TooltipUnstyled from 'reactstrap/lib/Tooltip';
import Styles from './Tooltip.module.scss';

export class Tooltip extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <TooltipUnstyled cssModule={Styles} {...props} />;
  }
}

export { TooltipUnstyled };

export default Tooltip;
