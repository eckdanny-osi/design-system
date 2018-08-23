import React, { Component } from 'react';
import NavUnstyled from 'reactstrap/lib/Nav';
import styles from './Nav.module.scss';

export class Nav extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <NavUnstyled cssModule={styles} {...props} />;
  }
}

export { NavUnstyled };

export default Nav;
