import React, { Component } from 'react';
import ListGroupUnstyled from 'reactstrap/lib/ListGroup';
import styles from './ListGroups.module.scss';

export class ListGroup extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <ListGroupUnstyled cssModule={styles} {...props} />;
  }
}

export { ListGroupUnstyled };

export default ListGroup;
