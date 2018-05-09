import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import { Breadcrumb, BreadcrumbItem } from '@cwds/components/lib/Breadcrumb';
import Logo from '@cwds/components/lib/Logo';
import Container from '@cwds/components/lib/Container';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';
import { Card, CardBody } from '@cwds/components/lib/Cards';
import IntraNav from '@cwds/components/lib/IntraNav';

import DesignVision from './PrinciplesPages/design-vision';
import ExperienceValues from './PrinciplesPages/experience-values';
import HumanCenteredDesign from './PrinciplesPages/human-centered-design';

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
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Library</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Data</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col md="4" lg="3">
            <IntraNav />
          </Col>
          <Col md="8" lg="9">
            <Card>
              <CardBody>
                <em>Oooooohhhhh....</em> Wouldn't you like to know?
              </CardBody>
            </Card>
            <br />

            <Card>
              <CardBody>
                <DesignVision />
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardBody>
                <ExperienceValues />
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardBody>
                <HumanCenteredDesign />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
