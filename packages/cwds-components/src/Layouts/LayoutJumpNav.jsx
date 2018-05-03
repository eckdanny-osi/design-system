import React from 'react';
import AppBar from '../AppBar';
import PageHeader from '../PageHeader';
import Container from '../Container';
import Col from '../Col';
import Row from '../Row';

export default ({ appbar, appBar, header, sidebar, render, ...props }) => {
  return (
    <div>
      <header>
        {appBar ? appBar(props) : <AppBar />}
        {header && <PageHeader>{header(props)}</PageHeader>}
      </header>
      <main>
        <Container>
          <Row>
            <Col sm="4">{sidebar(props)}</Col>
            <Col sm="8">{render(props)}</Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};
