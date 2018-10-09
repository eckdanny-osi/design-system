function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import cn from 'classnames';
import Icon from '../Icon';
import Styles from "./JumpToTop.module.css";

class JumpToTop extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "scrollToTop", () => {
      window.scrollTo(0, 0);
      this.el.blur();
    });
  }

  render() {
    return React.createElement("button", {
      ref: el => this.el = el,
      className: cn(Styles.JumpToTop, 'p-2'),
      onClick: this.scrollToTop
    }, React.createElement(Icon, {
      icon: "arrowUp",
      className: cn(Styles.Icon)
    }));
  }

}

_defineProperty(JumpToTop, "propTypes", {});

_defineProperty(JumpToTop, "defaultProps", {});

export default JumpToTop;