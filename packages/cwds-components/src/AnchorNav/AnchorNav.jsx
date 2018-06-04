import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Nav, NavItem, NavLink } from '../Nav';
import styles from './AnchorNav.module.scss';
import Affix from 'react-overlays/lib/AutoAffix';
import AnchorManager from './AnchorManager';
import AnchorNavContainer from './AnchorNavContainer';

class Section extends Component {
  // ref = React.createRef();
  // static propTypes = {
  //   registerRef: PropTypes.func,
  // };
  componentDidMount() {
    // this.props.registerRef(this.ref.current);
  }
  componentWillUnmount() {
    // console.debug('section unmounted');
  }
  render() {
    return <div id={this.props.id}>{this.props.children}</div>;
  }
}

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

const defaultProps = {
  offset: 133,
};

function getListItemClassNames({ disabled }) {
  return cn(styles['nav-link'], {
    [styles.disabled]: disabled,
  });
}

class AnchorNav extends PureComponent {
  OFFSET = 133;

  static createManager() {
    return;
  }

  renderItems(items, topLevel) {
    return (
      // <ul className={cn(styles.nav, 'flex-column')}>
      <ul
        className={cn(styles.nav)}
        style={{ display: 'block', bottom: 0, overflowY: 'scroll' }}
      >
        {items.map(
          item =>
            item.children ? (
              <li key={item.title} className={getListItemClassNames(item)}>
                {this.props.renderItem(item)}
                {this.renderItems(item.children)}
              </li>
            ) : (
              <li key={item.title} className={getListItemClassNames(item)}>
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
        <Affix viewportOffsetTop={offset}>{this.renderItems(items)}</Affix>
      </div>
    );
  }

  render1() {
    const props = this.props;
    return (
      <div className={cn(styles.AnchorNav)}>
        <Nav vertical>
          <Affix viewportOffsetTop={this.OFFSET}>
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

AnchorNav.propTypes = propTypes;
AnchorNav.defaultProps = defaultProps;

AnchorNav.Section = Section;
AnchorNav.Container = AnchorNavContainer;

export default AnchorNav;
