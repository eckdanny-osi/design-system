import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BreadcrumbUnstyled from 'reactstrap/lib/Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import styles from './Breadcrumbs.module.scss';

export { BreadcrumbUnstyled };

export class Breadcrumb extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <BreadcrumbUnstyled cssModule={styles} {...props} />;
  }
}

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
