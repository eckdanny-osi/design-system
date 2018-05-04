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
        <h1>Design Principles</h1>
      </PageHeader>
      <Container>
        <p>
          <em>Oooooohhhhh....</em> Wouldn't you like to know?
        </p>
      </Container>
    </div>
  );
};
