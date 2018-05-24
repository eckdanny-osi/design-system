import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Nav, NavItem, NavLink } from '../Nav';
import styles from './AnchorNav.module.scss';
import Affix from 'react-overlays/lib/AutoAffix';
import AnchorManager from './AnchorManager';
import AnchorNavContainer from './AnchorNavContainer';

class Section extends Component {
  ref = React.createRef();
  static propTypes = {
    registerRef: PropTypes.func,
  };
  componentDidMount() {
    this.props.registerRef(this.ref.current);
  }
  componentWillUnmount() {
    console.debug('section unmounted');
  }
  render() {
    return (
      <div ref={this.ref} id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      disabled: PropTypes.bool,
      label: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    })
  ).isRequired,
  renderItem: PropTypes.func.isRequired,
};

const defaultProps = {};

class AnchorNav extends PureComponent {
  OFFSET = 133;

  static createManager() {
    return;
  }

  constructor(props) {
    super(props);
    this.manager = new AnchorManager();
    this.manager.items = props.items;
  }

  render() {
    const props = this.props;
    return (
      <div className={cn(styles.AnchorNav)}>
        <Nav className={cn('flex-column')} vertical={true}>
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
