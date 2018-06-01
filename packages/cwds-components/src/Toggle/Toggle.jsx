import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Styles from './Toggle.module.scss';
import Option from './ToggleOption';

const noop = _ => {};

class Toggle extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
  };
  static defaultProps = {
    onChange: noop,
  };
  state = {
    value: null,
  };
  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
    this._onChange = this.props.onChange;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({ value });
    // this._onChange('asdf');
  }
  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onClick: this.handleChange,
        active: this.state.value === child.props.value,
      });
    });
  }
  render() {
    return <div className={cn(Styles.Toggle)}>{this.renderChildren()}</div>;
  }
}

Toggle.Option = Option;

export default Toggle;
