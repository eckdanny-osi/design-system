import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Container from '@cwds/components/lib/Container';
import Logo from '@cwds/components/lib/Logo';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardDeck,
} from '@cwds/components/lib/Cards';
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
          <CardHeader>Principles</CardHeader>
          <CardBody>asdflkjasdlkfjasdlfkj</CardBody>
          <CardFooter>
            <Link to="/principles">
              <Button color="primary">Go!</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>Components</CardHeader>
          <CardBody>You want Components?</CardBody>
          <CardFooter>
            <Link to="/components">
              <Button color="primary">Go!</Button>
            </Link>
          </CardFooter>
        </Card>
        {/* <Card>
          <CardHeader>Components</CardHeader>
          <CardBody>alskdfj</CardBody>
          <CardFooter>
            <Link to="/components-old">
              <Button color="primary">Go!</Button>
            </Link>
          </CardFooter>
        </Card> */}
        <div className="w-100 d-none d-sm-block d-md-none mb-3" />
        <Card>
          <CardHeader>Core</CardHeader>
          <CardBody>asdflkjasdlkfjasdlfkj</CardBody>
          <CardFooter>
            <Link to="/core">
              <Button color="primary">Go!</Button>
            </Link>
          </CardFooter>
        </Card>
        <div className="w-100 d-none d-md-block d-lg-none mb-3" />
        <Card>
          <CardHeader>Layouts</CardHeader>
          <CardBody>Common page layouts for CARES</CardBody>
          <CardFooter>
            <Link to="/page-layouts">
              <Button color="primary">Go!</Button>
            </Link>
          </CardFooter>
        </Card>
        <div className="w-100 d-none d-sm-block d-md-none mb-3" />
        <Card>
          <CardHeader>Labs</CardHeader>
          <CardBody>
            Not everything in here is ready for general use, but it should be
            showcased for the purposes of design critique and soliciting general
            feedback!
          </CardBody>
          <CardFooter>
            <Link to="/labs">
              <Button color="primary">Go!</Button>
            </Link>
          </CardFooter>
        </Card>
      </CardDeck>
    </Container>
  </div>
);
