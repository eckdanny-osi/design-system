import React, { Component } from 'react';
import ColUnstyled from 'reactstrap/lib/Col';
import styles from './Col.module.scss';

export { ColUnstyled };

export class Col extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <ColUnstyled cssModule={styles} {...props} />;
  }
}

export default Col;
