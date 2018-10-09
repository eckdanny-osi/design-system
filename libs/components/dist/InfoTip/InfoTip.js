function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames'; // import { TooltipUncontrolled } from '../Tooltip';

import TooltipUncontrolled from 'reactstrap/lib/UncontrolledTooltip';
import { default as Icon } from '../Icon';
import styles from "./InfoTip.module.css";
import uuid from 'lodash.uniqueid';

class InfoTip extends PureComponent {
  constructor(props) {
    super(props);
    this.renderText = this.renderText.bind(this);
  }

  renderText() {
    if ('function' === typeof this.props.text) {
      return this.props.text();
    }

    return this.props.text;
  }

  render() {
    const id = uuid();
    return React.createElement("div", {
      className: cn(styles.InfoTipContainer)
    }, React.createElement(Icon, {
      icon: "infoCircle",
      color: "primary",
      size: "xs",
      id: id
    }), React.createElement(TooltipUncontrolled, {
      placement: "top",
      target: id
    }, this.renderText()));
  }

}

_defineProperty(InfoTip, "propTypes", {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
});

export default InfoTip;