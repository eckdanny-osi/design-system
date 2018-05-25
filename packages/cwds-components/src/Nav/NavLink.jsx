import React, { Component } from 'react';
import NavLinkUnstyled from 'reactstrap/lib/NavLink';
import styles from './Nav.module.scss';

export class NavLink extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <NavLinkUnstyled cssModule={styles} {...props} />;
  }
}

export { NavLinkUnstyled };

export default NavLink;
