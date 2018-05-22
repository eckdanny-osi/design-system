import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardSubtitle,
} from '@cwds/components/lib/Cards';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';

const CardSectionTitle = props => (
  <h3
    style={{
      fontWeight: 700,
      fontSize: '16px',
      borderBottom: '1px solid grey',
    }}
    {...props}
  />
);

export default () => {
  return (
    <div>
      <Card>
        <CardBody>
          <h3>Cards</h3>
          <p>Cards are just white boxes...</p>
        </CardBody>
      </Card>
      <br />
      <Card>
        <CardHeader>Card Header</CardHeader>
        <CardBody>
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
          <CardSubtitle>Hello</CardSubtitle>
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
          <CardSubtitle>World</CardSubtitle>
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
        </CardBody>
        <CardFooter>CardFooter</CardFooter>
      </Card>
    </div>
  );
};

// export default {
//   name: 'Cards',
//   component: CardsPage,
// };
