import React from 'react';
import cn from 'classnames';
import Breadcrumb from '../Breadcrumbs';
import { Container } from '../Grid';
import Styles from "./BreadcrumbTrail.module.css"; // @TODO: this should break!!! Only works because of lerna!

import { NavLink } from 'react-router-dom';

const BreadcrumbTrail = ({
  items = [],
  renderItem
}) => {
  return React.createElement("div", {
    className: cn(Styles.BreadcrumbTrail)
  }, React.createElement(Breadcrumb, {
    className: "pt-0",
    style: {
      width: 'max-content'
    }
  }, items.map((item, i) => React.createElement(Breadcrumb.Item, {
    key: i,
    active: i + 1 === items.length ? true : false,
    tag: NavLink,
    to: item.path
  }, item.title))));
};

export default BreadcrumbTrail;