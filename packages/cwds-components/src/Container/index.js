import React, { Component } from 'react';
import ContainerUnstyled from 'reactstrap/lib/Container';
import styles from './Container.module.scss';

export { ContainerUnstyled };

export class Container extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <ContainerUnstyled cssModule={styles} {...props} />;
  }
}

export default Container;
