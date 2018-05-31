import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Breadcrumb from '@cwds/components/lib/Breadcrumbs';
import Logo from '@cwds/components/lib/Logo';
import Container from '@cwds/components/lib/Container';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';
import { Card, CardBody, CardHeader } from '@cwds/components/lib/Cards';
import AnchorNav from '@cwds/components/lib/AnchorNav';
import { NavItem, NavLink } from '@cwds/components/lib/Nav';
// import Foo from './modules/design-principles/wiki/AboutChildWelfare';
import ExperienceValues from './modules/design-principles/wiki/ExperienceValues';

import {
  DesignVision,
  AboutChildWelfare,
} from './PrinciplesPages/DesignOpsPages';

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
      <PageHeader title="Design Principles" />
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="#void">Guide</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="#void">Principles</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Whatever</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container>
        <Row>
          <Col md="4" lg="3">
            <AnchorNav
              style={{ position: 'fixed' }}
              items={[]}
              renderItem={d => (
                <NavItem key={d.slug}>
                  <NavLink href={`#${d.slug}`}>{d.title}</NavLink>
                </NavItem>
              )}
            />
          </Col>
          <Col md="8" lg="9">
            <Card>
              <Card.Body>
                <ExperienceValues />
              </Card.Body>
            </Card>
            {/* <Card>
              <CardHeader>
                <h2>Design Ops</h2>
              </CardHeader>
              <CardBody>
                <AnchorNav.Section registerRef={() => {}}>
                  <DesignVision />
                </AnchorNav.Section>
                <AboutChildWelfare />}
              </CardBody>
            </Card> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
