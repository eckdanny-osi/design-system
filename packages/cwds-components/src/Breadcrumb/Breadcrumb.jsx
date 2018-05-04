import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import RSBreadcrumb from 'reactstrap/lib/Breadcrumb';
import RSBreadcrumbItem from 'reactstrap/lib/BreadcrumbItem';
import styles from './Breadcrumb.module.scss';
import { withCssModule } from '../utils';

export const Breadcrumb = withCssModule(RSBreadcrumb, styles);

export const BreadcrumbItem = withCssModule(RSBreadcrumbItem, styles);

// const propTypes = {};

// const defaultProps = {};

// const Breadcrumb = props => {
//   return <div className={cn(styles.Breadcrumb)}>Hello World</div>;
// };

// Breadcrumb.propTypes = propTypes;
// Breadcrumb.defaultProps = defaultProps;

// export default Breadcrumb;
