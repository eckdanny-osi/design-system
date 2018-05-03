import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Logo from '@cwds/components/lib/Logo';
import Container from '@cwds/components/lib/Container';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';
import { Card, CardBody } from '@cwds/components/lib/Cards';

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
      <PageHeader>
        <h1>Layouts</h1>
      </PageHeader>
      <Container>
        <Row>
          <Col sm="4">
            <Card>
              <CardBody>alksdjflkasdjf</CardBody>
            </Card>
          </Col>
          <Col sm="8">
            <Card>
              <CardBody>alksdjflkasdjf</CardBody>
            </Card>
            <Row>
              <Col sm="12">
                <Card>
                  <CardBody>alksdjflkasdjf</CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card>
                  <CardBody>alksdjflkasdjf</CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card>
                  <CardBody>alksdjflkasdjf</CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card>
                  <CardBody>alksdjflkasdjf</CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card>
                  <CardBody>alksdjflkasdjf</CardBody>
                </Card>
              </Col>
            </Row>
            <Card>
              <CardBody>alksdjflkasdjf</CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
