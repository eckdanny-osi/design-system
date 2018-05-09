import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Nav, NavItem, NavLink } from '../Nav';
import styles from './IntraNav.module.scss';

const propTypes = {};

const defaultProps = {};

const IntraNav = props => {
  // return (
  //   <div className={cn(styles.IntraNav)}>Hello World</div>
  // );
  return (
    <Nav className="flex-column" vertical={true}>
      <NavItem>
        <NavLink href="#">asdf</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  );
};

IntraNav.propTypes = propTypes;
IntraNav.defaultProps = defaultProps;

export default IntraNav;
