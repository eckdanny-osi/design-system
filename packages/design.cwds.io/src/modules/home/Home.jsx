import React from 'react';
import { Link } from 'react-router-dom';
import Page from '@cwds/components/lib/Layouts/Page';
import Button from '@cwds/components/lib/Button';
import Card from '@cwds/components/lib/Cards';
import { Row, Col } from '@cwds/components/lib/Grid';

export default () => (
  <Page
    layout="dashboard"
    title="Design System"
    breadcrumb={props => <em>Welcome to your dashboard!</em>}
    main={props => (
      <Row>
        <Col xs={{ order: 2 }} lg={{ size: 9, order: 1 }}>
          <Row>
            <Col sm={6}>
              <Card>
                <Card.Header>
                  <Card.Title>Principles</Card.Title>
                </Card.Header>
                <Card.Body>
                  Guiding principles for CARES including tone, goals and methods
                  for building a great product!
                </Card.Body>
                <Card.Footer>
                  <Link to="/principles">
                    <Button color="primary">Go!</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>

            <Col sm={6}>
              <Card>
                <Card.Header>
                  <Card.Title>Component Library</Card.Title>
                </Card.Header>
                <Card.Body>
                  Component documentation and visual showcase for developers and
                  designers with usage guidelines and examples
                </Card.Body>
                <Card.Footer>
                  <Link to="/components">
                    <Button color="primary">Go!</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>

            <Col sm={6}>
              <Card>
                <Card.Header>
                  <Card.Title>Core Style</Card.Title>
                </Card.Header>
                <Card.Body>
                  Overarching design decisions including colors, type system,
                  global styles, Iconography, etc.
                </Card.Body>
                <Card.Footer>
                  <Link to="/core-style">
                    <Button color="primary">Go!</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>

            <Col sm={6}>
              <Card>
                <Card.Header>
                  <Card.Title>Layouts</Card.Title>
                </Card.Header>
                <Card.Body>
                  The layout system and typical page layouts found in CARES.
                </Card.Body>
                <Card.Footer>
                  <Link to="/page-layouts">
                    <Button color="primary">Go!</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>

            <Col sm={6}>
              <Card>
                <Card.Header>
                  <Card.Title>Labs</Card.Title>
                </Card.Header>
                <Card.Body>
                  Not everything in here is ready for general use, but it should
                  be showcased for the purposes of design critique and
                  soliciting general feedback!
                </Card.Body>
                <Card.Footer>
                  <Link to="/labs">
                    <Button color="primary">Go!</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ order: 1 }}
          lg={{ size: 3, order: 1 }}
          className="d-none d-sm-block"
        >
          <Row>
            <Col sm={6} md={4} lg={12}>
              <Card>Placeholder Widget</Card>
            </Col>
            <Col sm={6} md={4} lg={12}>
              <Card>Placeholder Widget</Card>
            </Col>
          </Row>
        </Col>
      </Row>
    )}
  />
);
