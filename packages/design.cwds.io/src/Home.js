import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Container from '@cwds/components/lib/Container';
import Logo from '@cwds/components/lib/Logo';
import { Card, CardBody } from '@cwds/components/lib/Cards';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';

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
      <Card>
        <CardBody>
          <p>
            For <tt>Components</tt>, go <Link to="/components">here</Link>.
          </p>
          <p>
            For <tt>Page Layouts</tt>, go <Link to="/page-layouts">here</Link>.
          </p>
          <p>
            For <tt>Core</tt> stuff, go <Link to="/core">here</Link>.
          </p>
          <p>
            For <tt>Operating Principles</tt> stuff, go{' '}
            <Link to="/principles">here</Link>.
          </p>
        </CardBody>
      </Card>
      <Card>
        <CardBody>alksdfj</CardBody>
      </Card>
    </Container>
  </div>
);
