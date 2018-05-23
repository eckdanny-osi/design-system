import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import { Breadcrumb, BreadcrumbItem } from '@cwds/components/lib/Breadcrumbs';
import Logo from '@cwds/components/lib/Logo';
import Container from '@cwds/components/lib/Container';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';
import { Card, CardBody, CardHeader } from '@cwds/components/lib/Cards';
import AnchorNav from '@cwds/components/lib/AnchorNav';
import { NavItem, NavLink } from '@cwds/components/lib/Nav';

import {
  DesignVision,
  ExperienceValues,
  HumanCenteredDesign,
  AboutChildWelfare,
} from './PrinciplesPages/DesignOpsPages';
import { Scrumban, HowWeWork } from './PrinciplesPages/Scrumban';

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
            {/* <AnchorNav style={{ position: 'fixed' }} /> */}
            <AnchorNav
              style={{ position: 'fixed' }}
              items={[]}
              renderItem={d => (
                <NavItem key={d.slug}>
                  <NavLink
                    href={`#${d.slug}`}
                    onClick={e => {
                      e.preventDefault();
                      // const $el = document.getElementById(d.slug);
                      // $el.scrollIntoView({
                      //   behavior: 'smooth',
                      //   block: 'start',
                      // });
                      const $el = document.getElementById(d.slug);
                      // const posn = $el.getBoundingClientRect().top - 132;
                      const posn = $el.offsetTop + 118 - 60; //  - 132;
                      // console.log(posn);
                      window.scrollTo({
                        top: posn,
                        behavior: 'smooth',
                      });
                    }}
                  >
                    {d.title}
                  </NavLink>
                </NavItem>
              )}
            />
          </Col>
          <Col md="8" lg="9">
            <Card>
              <CardHeader>
                <h2>Design Ops</h2>
              </CardHeader>
              <CardBody>
                <DesignVision />
                <ExperienceValues />
                <HumanCenteredDesign />
                <AboutChildWelfare />
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardHeader>
                <h2 id="scrumban">Scrumban</h2>
              </CardHeader>
              <CardBody>
                <Scrumban />
                <HowWeWork />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
