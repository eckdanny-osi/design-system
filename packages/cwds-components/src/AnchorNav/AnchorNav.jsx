import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Nav, NavItem, NavLink } from '../Nav';
import styles from './AnchorNav.module.scss';
import Affix from 'react-overlays/lib/AutoAffix';
import AnchorManager from './AnchorManager';
import AnchorNavContainer from './AnchorNavContainer';
import Section from './AnchorSection';

const propTypes = {
  offset: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      disabled: PropTypes.bool,
      label: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    })
  ).isRequired,
  renderItem: PropTypes.func.isRequired,
};

function getListItemClassNames({ disabled, active }) {
  return cn(styles['nav-link'], {
    [styles.disabled]: disabled,
    [styles.active]: active, //  Math.random() > 0.5,
  });
}

class AnchorNav extends PureComponent {
  static propTypes = {
    offset: PropTypes.number,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        disabled: PropTypes.bool,
        label: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
      })
    ).isRequired,
    renderItem: PropTypes.func.isRequired,
  };

  static defaultProps = {
    offset: 133,
  };

  static createManager() {
    return;
  }

  state = {
    items: [],
    currentSlug: null,
  };

  constructor(props) {
    super(props);
    this.state.items = this.props.items;
    // Bind methods
    this.handleHashChange = this.handleHashChange.bind(this);
  }

  // componentWillMount() {
  //   if ('onhashchange' in window) {
  //     window.addEventListener('hashchange', this.handleHashChange);
  //   } else {
  //     console.warn('Browser does not support hashchange!');
  //   }
  // }

  componentWillUnmount() {}

  handleHashChange() {
    this.setState({ currentSlug: location.hash.slice(1) });
  }

  isActive() {}

  setActiveSlug() {}

  renderItems(items, topLevel) {
    const currentSlug = location.hash.slice(1);
    const style =
      (topLevel && { display: 'block', bottom: 0, overflowY: 'scroll' }) ||
      null;
    return (
      // <ul className={cn(styles.nav, 'flex-column')}>
      // <ul className={cn(styles.nav)} style={{ display: 'block', ...style }}>
      <ul
        className={cn(
          styles.nav,
          topLevel ? [styles.AnchorNavList] : [styles.SubTree]
        )}
      >
        {items.map(
          item =>
            item.children ? (
              <li
                key={item.title}
                className={cn(styles['nav-link'], {
                  // [styles.disabled]: disabled,
                  [styles.active]:
                    currentSlug === item.slug ||
                    item.children
                      .map(child => child.slug)
                      .includes(currentSlug),
                })}
              >
                {this.props.renderItem(item)}
                {this.renderItems(item.children)}
              </li>
            ) : (
              <li
                key={item.title}
                className={cn(styles['nav-link'], {
                  // [styles.disabled]: disabled,
                  [styles.active]: currentSlug === item.slug,
                })}
              >
                {this.props.renderItem(item)}
              </li>
            )
        )}
      </ul>
    );
  }

  render() {
    const { offset, items } = this.props;
    return (
      <div className={cn(styles.AnchorNav)}>
        <Affix viewportOffsetTop={offset}>
          {this.renderItems(this.state.items, true)}
        </Affix>
      </div>
    );
  }

  render1() {
    const props = this.props;
    return (
      <div className={cn(styles.AnchorNav)}>
        <Nav vertical>
          <Affix viewportOffsetTop={this.props.offset}>
            <div style={{ width: '100%' }}>
              {this.manager.items.map(d => (
                <div key={d.slug}>{props.renderItem(d)}</div>
              ))}
            </div>
          </Affix>
        </Nav>
      </div>
    );
  }
}

AnchorNav.Section = Section;
AnchorNav.Container = AnchorNavContainer;

export default AnchorNav;
