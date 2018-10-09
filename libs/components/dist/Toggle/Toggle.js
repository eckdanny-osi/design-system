function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Styles from "./Toggle.module.css";
import Option from './ToggleOption';

const noop = _ => {};

class Toggle extends PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      value: null
    });

    this.state = {
      value: props.value
    };
    this.renderChildren = this.renderChildren.bind(this);
    this._onChange = this.props.onChange;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      value
    });
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onClick: this.handleChange,
        active: this.state.value === child.props.value
      });
    });
  }

  render() {
    return React.createElement("div", {
      className: cn(Styles.Toggle),
      role: "group",
      "aria-label": "Toggle Group"
    }, this.renderChildren());
  }

}

_defineProperty(Toggle, "propTypes", {
  onChange: PropTypes.func
});

_defineProperty(Toggle, "defaultProps", {
  onChange: noop
});

Toggle.Option = Option;
export default Toggle;