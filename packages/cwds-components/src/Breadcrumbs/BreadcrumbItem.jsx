import React from 'react';
import BreadcrumbItemUnstyled from 'reactstrap/lib/BreadcrumbItem';
import { withCssModule } from '../utils';
import Styles from './Breadcrumbs.module.scss';

const BreadcrumbItem = withCssModule(BreadcrumbItemUnstyled, Styles);

export { BreadcrumbItem, BreadcrumbItemUnstyled };
export default BreadcrumbItem;
