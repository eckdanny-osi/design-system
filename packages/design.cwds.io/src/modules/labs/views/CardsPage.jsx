import React from 'react';
import Card from '@cwds/components/lib/Cards';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';
import Icon from '@cwds/components/lib/Icon';

const CardsPage = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <h3>Cards</h3>
          <p>Cards are just white boxes...</p>
        </Card.Body>
      </Card>
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
      <br />
      <h3>CANS proposal</h3>
      <p>What about an implementation like this for CANS?</p>
      <Card>
        <Card.Header>Add CANS</Card.Header>
        <Card.Body>
          <Row>
            <Col sm="5">
              <label>
                alskdjf<br />
                <input type="text" />
              </label>
            </Col>
            <Col sm="5">
              <label>
                alskdjf<br />
                <input type="text" />
              </label>
            </Col>
            <Col sm="2">
              <br />
              <button>on</button>
              <button>off</button>
            </Col>
          </Row>
          <Card.SectionGroup>
            <Card.Section title="Child Behavioral/Emotional Needs" collapsible>
              <Card.SubsectionGroup>
                <Card.Subsection>My Item 1.1</Card.Subsection>
                <Card.Subsection>My Item 1.2</Card.Subsection>
                <Card.Subsection>My Item 1.3</Card.Subsection>
                <Card.Subsection>My Item 1.4</Card.Subsection>
              </Card.SubsectionGroup>
            </Card.Section>
            <Card.Section title="Foo" collapsible>
              Just content here...
            </Card.Section>
            <Card.Section title="Foo" collapsible>
              Just content here...
            </Card.Section>
            <Card.Section title="Foo" collapsible>
              Just content here...
            </Card.Section>
          </Card.SectionGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default {
  name: 'Cards',
  component: CardsPage,
};
