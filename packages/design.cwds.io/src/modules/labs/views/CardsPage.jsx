import React from 'react';
import { Card, Row, Col } from '@cwds/components';

// import Test from '!babel-loader!mdx-loader!../../../../../../wiki/About-Child-Welfare.md';

import CardsForCANS from './CardsForCANS';
import CardWithSections from './CardsWithSections';

const CardsPage = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <p>Cards are just white boxes...</p>
        </Card.Body>
      </Card>
      <br />
      <p>alskdfjalksdjfasldkfj...</p>
      <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Body>Card.Body</Card.Body>
        <Card.Footer>Card.Footer</Card.Footer>
      </Card>
      <br />
      <CardWithSections />
      <br />
      <CardsForCANS />
      <br />
      <Card>
        <Card.Header>Card Header</Card.Header>
        <Card.Body>
          <Row>
            <Col sm="4">
              Label<br />Value
            </Col>
            <Col sm="4">
              Label<br />Value
            </Col>
            <Col sm="4">
              Label<br />Value
            </Col>
          </Row>
          <Card.Subtitle>Hello</Card.Subtitle>
          <Row>
            <Col sm="4">
              Label<br />Value
            </Col>
            <Col sm="4">
              Label<br />Value
            </Col>
            <Col sm="4">
              Label<br />Value
            </Col>
          </Row>
          <Card.Subtitle>World</Card.Subtitle>
          <Row>
            <Col sm="4">
              Label<br />Value
            </Col>
            <Col sm="4">
              Label<br />Value
            </Col>
            <Col sm="4">
              Label<br />Value
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>Card Footer</Card.Footer>
      </Card>
    </div>
  );
};

export default {
  name: 'Cards',
  component: CardsPage,
};
