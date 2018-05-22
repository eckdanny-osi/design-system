import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Logo from '@cwds/components/lib/Logo';
import Container from '@cwds/components/lib/Container';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';

import { NavItem, NavLink } from '@cwds/components/lib/Nav';

// TODO: this non-uniform import thing kinda sucks

// import Breadcrumb from '@cwds/components/lib/Breadcrumb';
// import BreadcrumbItem from '@cwds/components/lib/BreadcrumbItem';
import { Breadcrumb, BreadcrumbItem } from '@cwds/components/lib/Breadcrumbs';

// import Card from '@cwds/components/lib/Card';
// import CardHeader from '@cwds/components/lib/CardHeader';
// import CardBody from '@cwds/components/lib/CardBody';
// import { Card, CardBody, CardHeader } from '@cwds/components/lib/Cards';

import IntraNav from '@cwds/components/lib/IntraNav';

import ComponentRoutes from './ComponentRouteManager';

export default () => {
  return (
    <div>
      <AppBar
        brand={props => {
          return (
            <Link to="/">
              <Logo />
            </Link>
          );
        }}
      />
      <PageHeader title="Components" />
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#void">Guide</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#void">Principles</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Whatever</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col md="4" lg="3">
            <IntraNav
              style={{ position: 'fixed' }}
              items={ComponentRoutes}
              renderItem={d => (
                <NavItem key={d.slug}>
                  <NavLink href={`#${d.slug}`}>{d.title}</NavLink>
                </NavItem>
              )}
            />
          </Col>
          <Col md="8" lg="9">
            {ComponentRoutes.map(({ slug, component: Component }) => {
              return (
                <div key={slug} id={slug}>
                  <Component />
                  <hr className="my-4" />
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
