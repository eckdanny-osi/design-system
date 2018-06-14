import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbUnstyled from 'reactstrap/lib/Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import styles from './Breadcrumbs.module.scss';

export { BreadcrumbUnstyled };

export const Breadcrumb = ({ cssModule, ...props }) => (
  <BreadcrumbUnstyled cssModule={styles} {...props} />
);

export default Breadcrumb;
