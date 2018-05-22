import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Logo from '@cwds/components/lib/Logo';
import Container from '@cwds/components/lib/Container';

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
      <PageHeader title="Labs" />
      <Container>
        Hello from <tt>Labs</tt>!
      </Container>
    </div>
  );
};
