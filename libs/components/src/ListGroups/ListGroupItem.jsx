import React, { Component } from 'react';
import ListGroupItemUnstyled from 'reactstrap/lib/ListGroupItem';
import styles from './ListGroups.module.scss';

export class ListGroupItem extends Component {
  render() {
    const { cssModule = {}, ...props } = this.props;
    return <ListGroupItemUnstyled cssModule={styles} {...props} />;
  }
}

export { ListGroupItemUnstyled };

export default ListGroupItem;
