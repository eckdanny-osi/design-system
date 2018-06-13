import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, PageHeader, Container, Button } from '@cwds/components';
import { Card, CardDeck } from '@cwds/components/lib/Cards';

export default () => (
  <div>
    <AppBar />
    <PageHeader title="Design Guide" />
    <Container>
      <CardDeck>
        <Card>
          <Card.Header>Principles</Card.Header>
          <Card.Body>asdflkjasdlkfjasdlfkj</Card.Body>
          <Card.Footer>
            <Link to="/principles">
              <Button color="primary">Go!</Button>
            </Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>Components</Card.Header>
          <Card.Body>You want Components?</Card.Body>
          <Card.Footer>
            <Link to="/components">
              <Button color="primary">Go!</Button>
            </Link>
          </Card.Footer>
        </Card>
        <div className="w-100 d-none d-sm-block d-md-none mb-3" />
        <Card>
          <Card.Header>Core</Card.Header>
          <Card.Body>asdflkjasdlkfjasdlfkj</Card.Body>
          <Card.Footer>
            <Link to="/core">
              <Button color="primary">Go!</Button>
            </Link>
          </Card.Footer>
        </Card>
        <div className="w-100 d-none d-md-block d-lg-none mb-3" />
        <Card>
          <Card.Header>Layouts</Card.Header>
          <Card.Body>Common page layouts for CARES</Card.Body>
          <Card.Footer>
            <Link to="/page-layouts">
              <Button color="primary">Go!</Button>
            </Link>
          </Card.Footer>
        </Card>
        <div className="w-100 d-none d-sm-block d-md-none mb-3" />
        <Card>
          <Card.Header>Labs</Card.Header>
          <Card.Body>
            Not everything in here is ready for general use, but it should be
            showcased for the purposes of design critique and soliciting general
            feedback!
          </Card.Body>
          <Card.Footer>
            <Link to="/labs">
              <Button color="primary">Go!</Button>
            </Link>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  </div>
);
