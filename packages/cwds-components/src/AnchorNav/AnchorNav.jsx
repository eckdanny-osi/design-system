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

  state = {
    items: [],
    currentSlug: null,
  };

  constructor(props) {
    super(props);
    this.state.items = this.props.items;
    // Bind methods
    this.handleHashChange = this.handleHashChange.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }

  handleHashChange() {
    this.setState({ currentSlug: location.hash.slice(1) });
  }

  renderItems(items, isRoot) {
    const currentSlug = location.hash.slice(1);
    const style =
      (isRoot && { display: 'block', bottom: 0, overflowY: 'scroll' }) || null;
    return (
      <ul
        className={cn(
          styles.nav,
          isRoot ? [styles.AnchorNavList] : [styles.SubTree]
        )}
      >
        {/* {items.map(
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
        )} */}
        {items.map(this.renderListItem)}
      </ul>
    );
  }

  renderListItem(item) {
    const { title, active, slug, children } = item;
    return (
      <li
        key={item.slug}
        className={cn(styles['nav-link'], {
          [styles.active]: active,
        })}
      >
        {this.props.renderItem(item)}
      </li>
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
}

AnchorNav.Section = Section;
AnchorNav.Container = AnchorNavContainer;

export default AnchorNav;
