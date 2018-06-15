import React, { Component } from 'react';
import TooltipUnstyled from 'reactstrap/lib/Tooltip';
import classNames from 'classnames';
import Styles from './Tooltip.module.scss';

// export class Tooltip extends Component {
//   render() {
//     const { cssModule, modifiers, ...props } = this.props;
//     return (
//       <TooltipUnstyled
//         cssModule={Styles}
//         modifiers={{ cssModule: Styles }}
//         {...props}
//       />
//     );
//   }
// }

// export { TooltipUnstyled };

// export default Tooltip;

//
// Oh no's! Looks like the Tooltip component does not spread
// the cssModule prop to PopperContent. The arrow and bs-tooltip-*
// classes are not resolving to their CSS Module!
//

import {
  // getTarget,
  // DOMElement,
  mapToCssModules,
  omit,
  // PopperPlacements
} from 'reactstrap/lib/utils';
import PopperContent from 'reactstrap/lib/PopperContent';

function hack(Wrapped) {
  return class Hack extends Wrapped {
    render() {
      if (!this.props.isOpen) {
        return null;
      }

      const attributes = omit(this.props, Object.keys(Wrapped.propTypes));
      const classes = mapToCssModules(
        classNames('tooltip-inner', this.props.innerClassName),
        this.props.cssModule
      );

      const popperClasses = mapToCssModules(
        classNames('tooltip', 'show', this.props.className),
        this.props.cssModule
      );

      return (
        <PopperContent
          className={popperClasses}
          target={this.props.target}
          isOpen={this.props.isOpen}
          hideArrow={this.props.hideArrow}
          placement={this.props.placement}
          placementPrefix={this.props.placementPrefix}
          container={this.props.container}
          modifiers={this.props.modifiers}
          cssModule={this.props.cssModule}
        >
          <div
            {...attributes}
            className={classes}
            onMouseOver={this.onMouseOverTooltipContent}
            onMouseLeave={this.onMouseLeaveTooltipContent}
          />
        </PopperContent>
      );
    }
  };
}

const Hack = hack(TooltipUnstyled);

export class Tooltip extends Component {
  render() {
    const { cssModule, modifiers, ...props } = this.props;
    return <Hack cssModule={Styles} {...props} />;
  }
}

export { TooltipUnstyled };

export default Tooltip;
