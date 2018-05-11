import React, { Component } from 'react';
import RowUnstyled from 'reactstrap/lib/Row';
import styles from './Row.module.scss';

export { RowUnstyled };

export class Row extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <RowUnstyled cssModule={styles} {...props} />;
  }
}

export default Row;
