function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Nav, NavItem, NavLink } from '../Nav';
import styles from "./AnchorNav.module.css";
import Affix from 'react-overlays/lib/AutoAffix';
import AnchorManager from './AnchorManager';
import AnchorNavContainer from './AnchorNavContainer';
import Section from './AnchorSection';
const propTypes = {
  offset: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  })).isRequired,
  renderItem: PropTypes.func.isRequired
};

function getListItemClassNames({
  disabled,
  active
}) {
  return cn(styles['nav-link'], {
    [styles.disabled]: disabled,
    [styles.active]: active //  Math.random() > 0.5,

  });
}

class AnchorNav extends PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      items: [],
      currentSlug: null
    });

    this.state.items = this.props.items; // Bind methods

    this.handleHashChange = this.handleHashChange.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }

  handleHashChange() {
    this.setState({
      currentSlug: location.hash.slice(1)
    });
  }

  renderItems(items, isRoot) {
    const currentSlug = location.hash.slice(1);
    const style = isRoot && {
      display: 'block',
      bottom: 0,
      overflowY: 'scroll'
    } || null;
    return React.createElement("ul", {
      className: cn(styles.nav, isRoot ? [styles.AnchorNavList] : [styles.SubTree])
    }, items.map(item => item.children ? React.createElement("li", {
      key: item.title,
      className: cn(styles['nav-link'], {
        // [styles.disabled]: disabled,
        [styles.active]: currentSlug === item.slug || item.children.map(child => child.slug).includes(currentSlug)
      })
    }, this.props.renderItem(item), this.renderItems(item.children)) : React.createElement("li", {
      key: item.title,
      className: cn(styles['nav-link'], {
        // [styles.disabled]: disabled,
        [styles.active]: currentSlug === item.slug
      })
    }, this.props.renderItem(item))));
  }

  renderListItem(item) {
    const {
      title,
      active,
      slug,
      children
    } = item;
    return React.createElement("li", {
      key: item.slug,
      className: cn(styles['nav-link'], {
        [styles.active]: active
      })
    }, this.props.renderItem(item));
  }

  render() {
    const {
      offset,
      items
    } = this.props;
    return React.createElement("div", {
      className: cn(styles.AnchorNav)
    }, React.createElement(Affix, {
      viewportOffsetTop: offset
    }, this.renderItems(this.state.items, true)));
  }

}

_defineProperty(AnchorNav, "propTypes", {
  offset: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  })).isRequired,
  renderItem: PropTypes.func.isRequired
});

_defineProperty(AnchorNav, "defaultProps", {
  offset: 133
});

AnchorNav.Section = Section;
AnchorNav.Container = AnchorNavContainer;
export default AnchorNav;