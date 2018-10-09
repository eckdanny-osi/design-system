import React from 'react';
import { Link } from 'react-router-dom';
import Page from '@test/components/dist/Layouts/Page';
import Button from '@test/components/dist/Button';
import Card from '@test/components/dist/Cards';
import { Row, Col } from '@test/components/dist/Grid';

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
                  <Card.Title>Component Library</Card.Title>
                </Card.Header>
                <Card.Body>
                  Component documentation and visual showcase for developers and
                  designers with usage guidelines and reference implementation
                  examples
                </Card.Body>
                <Card.Footer>
                  <Button color="primary" tag={Link} to="/components">
                    Go!
                  </Button>
                </Card.Footer>
              </Card>
            </Col>

            <Col sm={6}>
              <Card>
                <Card.Header>
                  <Card.Title>Core Style</Card.Title>
                </Card.Header>
                <Card.Body>
                  Foundational UX principles and overarching design decisions
                  including color system, typography, grid system, tone,
                  iconography, and accessibility
                </Card.Body>
                <Card.Footer>
                  <Button color="primary" tag={Link} to="/core-style">
                    Go!
                  </Button>
                </Card.Footer>
              </Card>
            </Col>

            <Col sm={6}>
              <Card>
                <Card.Header>
                  <Card.Title>
                    UX Guidelines / Patterns{' '}
                    <small className="text-muted">(TODO)</small>
                  </Card.Title>
                </Card.Header>
                <Card.Body>@TODO</Card.Body>
                <Card.Footer>
                  <Button color="primary" tag={Link} to="/">
                    Go!
                  </Button>
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
                  be showcased for the purpose of design critique and
                  solicitation of general feedback
                </Card.Body>
                <Card.Footer>
                  <Button color="primary" tag={Link} to="/labs">
                    Go!
                  </Button>
                </Card.Footer>
              </Card>
            </Col>

            <Col sm={6}>
              <Card>
                <Card.Header>
                  <Card.Title>
                    About <small className="text-muted">(TODO)</small>
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  Defines key terms and identifies the business value of the
                  Design System, a manual for designers, developers, and
                  stakeholders to get the most out of this site
                </Card.Body>
                <Card.Footer>
                  <Button color="primary" tag={Link} to="/">
                    Go!
                  </Button>
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
