import React from 'react';
import { Container, Row, Col } from '@cwds/components/lib/Grid';

const Body = ({ sidenav, main }) => (
  <Container>
    <Row>
      <Col role="navigation" sm={5} md={3}>
        {sidenav}
      </Col>
      <Col role="main" sm={7} md={9}>
        {main}
      </Col>
    </Row>
  </Container>
);

export default Body;
