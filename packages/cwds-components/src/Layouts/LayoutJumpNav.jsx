import React from 'react';
import AppBar from '../AppBar';
import PageHeader from '../PageHeader';
import { Container, Col, Row } from '../Grid';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

export default ({ appbar, appBar, header, sidebar, render, ...props }) => {
  return (
    <div>
      <header>
        {appBar ? appBar(props) : <AppBar />}
        {header ? header(props) : <PageHeader />}
      </header>
      <main>
        <Container>
          <Row>
            <Col md="4" lg="3">
              {sidebar(props)}
            </Col>
            <Col md="8" lg="9">
              {render(props)}
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};
