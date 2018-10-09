import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import AppBar from '../../AppBar';
import PageHeader from '../../PageHeader';
import { Container } from '../../Grid';
import BreadcrumbTrail from '../../BreadcrumbTrail';
import Styles from "../Layout.module.css";

const renderBreadcrumb = itemsOrRenderFn => {
  return typeof itemsOrRenderFn === 'function' ? itemsOrRenderFn() : React.createElement(BreadcrumbTrail, {
    items: itemsOrRenderFn
  });
};

const Banner = ({
  AppBar,
  PageHeader,
  BreadcrumbTrail,
  title,
  breadcrumb,
  cta
}) => React.createElement("div", {
  role: "banner",
  className: cn(Styles.Banner)
}, React.createElement("div", {
  className: cn(Styles.AppBarContainer)
}, React.createElement(Container, null, React.createElement(AppBar, null))), React.createElement("div", {
  className: cn(Styles.PageHeaderContainer)
}, React.createElement(Container, null, React.createElement(PageHeader, {
  title: title,
  cta: cta
}))), breadcrumb && React.createElement("div", {
  className: cn(Styles.BreadcrumbContainer)
}, React.createElement(Container, null, renderBreadcrumb(breadcrumb))));

Banner.propTypes = {
  AppBar: PropTypes.func,
  PageHeader: PropTypes.func,
  BreadcrumbTrail: PropTypes.func,
  title: PropTypes.string,
  breadcrumbItems: PropTypes.arrayOf(PropTypes.func)
};
Banner.defaultProps = {
  AppBar: AppBar,
  PageHeader: PageHeader,
  BreadcrumbTrail: BreadcrumbTrail
};
export default Banner;