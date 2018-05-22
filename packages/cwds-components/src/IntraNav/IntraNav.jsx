import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Nav, NavItem, NavLink } from '../Nav';
import styles from './IntraNav.module.scss';
import Affix from 'react-overlays/lib/AutoAffix';

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

const IntraNav = props => {
  // return (
  //   <div className={cn(styles.IntraNav)}>Hello World</div>
  // );
  return (
    <div className={cn(styles.IntraNav)}>
      <Nav className={cn('flex-column')} vertical={true}>
        <Affix viewportOffsetTop={128}>
          <div style={{ width: '100%' }}>
            {props.items.map(item => props.renderItem(item))}
            {/* <NavLink>
              <NavLink href="#">asdf</NavLink>
            </NavLink>
            <NavItem>
              <NavLink href="#scrumban">Scrumban</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled Link
              </NavLink>
            </NavItem> */}
          </div>
        </Affix>
      </Nav>
    </div>
  );
};

IntraNav.propTypes = propTypes;
IntraNav.defaultProps = defaultProps;

export default IntraNav;
