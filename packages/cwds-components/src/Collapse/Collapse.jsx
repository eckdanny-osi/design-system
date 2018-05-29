import React, { Component } from 'react';
import CollapseUnstyled from 'reactstrap/lib/Collapse';
// import styles from './ListGroups.module.scss';
const styles = {};

export class Collapse extends Component {
  render() {
    const { cssModule, className, ...props } = this.props;
    return <CollapseUnstyled cssModule={styles} {...props} />;
  }
}

export { CollapseUnstyled };
export default Collapse;
