import React, { Component } from 'react';
import TooltipUnstyled from 'reactstrap/lib/Tooltip';
import Styles from './Tooltip.module.scss';

//
// Oh no's! Looks like the Tooltip component does not spread
// the cssModule prop to PopperContent. The arrow and bs-tooltip-*
// classes are not resolving to their CSS Module!
//

export class Tooltip extends Component {
  render() {
    const { cssModule, modifiers, ...props } = this.props;
    return (
      <TooltipUnstyled
        cssModule={Styles}
        modifiers={{ cssModule: Styles }}
        {...props}
      />
    );
  }
}

export { TooltipUnstyled };

export default Tooltip;
