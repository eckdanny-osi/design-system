import React from 'react';
import AppBar from '../AppBar';
import PageHeader from '../PageHeader';
import Container from '../Container';

export default ({ appbar, header, render }) => {
  return (
    <div>
      <AppBar />
      <PageHeader>Whatever</PageHeader>
      {render && <Container>{render()}</Container>}
    </div>
  );
};
