import React from 'react';
import Breadcrumb from '@cwds/components/lib/Breadcrumbs';
import { Container } from '@cwds/components/lib/Grid';

import { NavLink } from 'react-router-dom';

const BreadcrumbTrail = ({ items = [], renderItem }) => {
  return (
    <Container>
      <Breadcrumb>
        {items.map((item, i) => (
          <Breadcrumb.Item
            key={i}
            active={i + 1 === items.length ? true : false}
          >
            <NavLink to={item.path}>{item.title}</NavLink>
          </Breadcrumb.Item>
          // <Breadcrumb.Item
          //   key={i}
          //   active={i + 1 === items.length ? true : false}
          // >
          //   {item}
          // </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </Container>
  );
};

export default BreadcrumbTrail;
