import React, { Component } from 'react';
import BreadcrumbItemUnstyled from 'reactstrap/lib/BreadcrumbItem';
import styles from './Breadcrumbs.module.scss';

export class BreadcrumbItem extends Component {
  render() {
    const { cssModule = {}, ...props } = this.props;
    return <BreadcrumbItemUnstyled cssModule={styles} {...props} />;
  }
}

export { BreadcrumbItemUnstyled };

export default BreadcrumbItem;
