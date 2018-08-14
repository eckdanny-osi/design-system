import React from 'react';
import Card from '@cwds/components/lib/Cards';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';

export default () => {
  return (
    <div>
      <h2>Cards</h2>
      <Card>
        <p>Cards are just white boxes...</p>
      </Card>
      <br />
      <Card>
        <Card.Header>
          <Card.Title>Some Title</Card.Title>
        </Card.Header>
        <Card.Body>
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
        <Card.Footer>CardFooter</Card.Footer>
      </Card>
    </div>
  );
};
