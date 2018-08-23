import React, { Component } from 'react';
import NavItemUnstyled from 'reactstrap/lib/NavItem';
import styles from './Nav.module.scss';

export class NavItem extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <NavItemUnstyled cssModule={styles} {...props} />;
  }
}

export { NavItemUnstyled };

export default NavItem;
