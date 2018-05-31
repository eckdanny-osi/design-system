import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Container from '@cwds/components/lib/Container';
import Logo from '@cwds/components/lib/Logo';
import { Card, CardDeck } from '@cwds/components/lib/Cards';
import Button from '@cwds/components/lib/Button';

export default () => (
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
