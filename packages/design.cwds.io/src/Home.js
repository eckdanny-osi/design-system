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
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';
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
          <CardHeader>Components</CardHeader>
          <CardBody>alskdfj</CardBody>
          <CardFooter>
            <Link to="/components">
              <Button primary>Go!</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>Layouts</CardHeader>
          <CardBody>aslkdjfalksdfjl</CardBody>
          <CardFooter>
            <Link to="/page-layouts">
              <Button primary>Go!</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>Core</CardHeader>
          <CardBody>asdflkjasdlkfjasdlfkj</CardBody>
          <CardFooter>
            <Link to="/core">
              <Button primary>Go!</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>Principles</CardHeader>
          <CardBody>asdflkjasdlkfjasdlfkj</CardBody>
          <CardFooter>
            <Link to="/principles">
              <Button primary>Go!</Button>
            </Link>
          </CardFooter>
        </Card>
      </CardDeck>
    </Container>
  </div>
);
