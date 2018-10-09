function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Collapse from '../Collapse';
import Icon from '../Icon';
import CardSubtitle from './CardSubtitle';
import Subtitle from './CardSubtitle';
import Styles from "./Cards.module.css";

class CardSection extends PureComponent {
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
      this.state.collapsed = true;
    }
  }

  renderSectionTitle() {
    const {
      title
    } = this.props;
    return React.createElement("div", {
      className: Styles.CardSectionTitle
    }, React.createElement("a", {
      onClick: this.toggleCollapse,
      href: "#section"
    }, 'function' === typeof title ? title() : title, React.createElement(Icon, {
      icon: "chevronDown",
      style: {
        float: 'right',
        marginRight: '9px',
        marginTop: '4px'
      },
      rotation: this.state.collapsed ? null : 180
    })));
  }

  renderSectionBody() {
    if (!this.props.collapsible) {
      return this.props.children;
    }

    return React.createElement(Collapse, {
      isOpen: !this.state.collapsed
    }, this.props.children);
  }

  render() {
    const {
      children,
      title,
      collapsible
    } = this.props;
    return React.createElement("div", {
      className: cn(Styles.CardSection, {
        [Styles.CardSectionActive]: !this.state.collapsed
      })
    }, this.renderSectionTitle(), this.renderSectionBody());
  }

}

_defineProperty(CardSection, "propTypes", {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  collapsible: PropTypes.bool
});

_defineProperty(CardSection, "defaultProps", {
  collapsible: false
});

export default CardSection;