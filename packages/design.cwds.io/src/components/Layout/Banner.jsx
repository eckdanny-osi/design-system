import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import BreadcrumbTrail from './BreadcrumbTrail';

const Banner = ({ AppBar, PageHeader, BreadcrumbTrail, title, breadcrumb }) => (
  <div role="banner">
    <AppBar />
    <PageHeader title={title} />
    <BreadcrumbTrail items={breadcrumb} />
  </div>
);

Banner.propTypes = {
  AppBar: PropTypes.func,
  PageHeader: PropTypes.func,
  BreadcrumbTrail: PropTypes.func,
  title: PropTypes.string,
  breadcrumbItems: PropTypes.arrayOf(PropTypes.func),
};

Banner.defaultProps = {
  AppBar: AppBar,
  PageHeader: PageHeader,
  BreadcrumbTrail: BreadcrumbTrail,
};

export default Banner;
