function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Collapsible, { Collapse } from '../Collapse';
import Icon from '../Icon';
import CardSubtitle from './CardSubtitle';
import Subtitle from './CardSubtitle';
import Styles from "./Cards.module.css";

class CardSubsection extends PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {});

    _defineProperty(this, "toggleCollapse", e => {
      e.preventDefault();
      this.setState({
        collapsed: !this.state.collapsed
      });
    });

    if (props.collapsible) {
      this.state.collapsed = !this.props.initialOpen;
    }

    if (props.renderTitle) {
      this._renderTitle = props.renderTitle;
    }
  }

  renderTitle() {
    return this._renderTitle && this._renderTitle() || this.props.title;
  }

  renderSectionTitle() {
    const {
      title,
      renderTitle
    } = this.props;
    return React.createElement("div", {
      className: cn(Styles.CardSubsectionTitle, {
        [Styles.CardSubsectionTitleActive]: !this.state.collapsed
      })
    }, React.createElement("a", {
      onClick: this.toggleCollapse,
      href: "javascript:void(0)",
      "aria-expanded": !this.state.collapsed
    }, React.createElement(Icon, {
      className: Styles.CardSubsectionToggle,
      icon: this.state.collapsed ? 'plus' : 'minus'
    }), React.createElement("div", {
      className: Styles.CardSubsectionTitleContent
    }, this.renderTitle())));
  }

  renderSectionBody() {
    if (!this.props.collapsible) {
      return this.props.children;
    }

    return React.createElement(Collapse, {
      isOpen: !this.state.collapsed
    }, React.createElement("div", {
      className: Styles.CardSubsectionBody
    }, this.props.children));
  }

  render() {
    const {
      children,
      title,
      collapsible
    } = this.props;
    return React.createElement("div", {
      className: Styles.CardSubsection
    }, this.renderSectionTitle(), this.renderSectionBody());
  }

}

_defineProperty(CardSubsection, "propTypes", {
  title: PropTypes.string,
  renderTitle: PropTypes.func,
  collapsible: PropTypes.bool,
  initialOpen: PropTypes.bool
});

export default CardSubsection;