import React from 'react';
import { Card } from '@cwds/components';
import MultiScopeCardExample from './MultiScopeCards';

// import Test from '!babel-loader!mdx-loader!../../../../../../wiki/About-Child-Welfare.md';

import CardWithSections from './CardsWithSections';

import AsyncCardExample from './AsyncCardExample';

const CardsPage = () => {
  return (
    <div>
      <h2>Cards</h2>
      <p>Some introductory text</p>
      <section>
        <h3>Simple</h3>
        <p>nothing too fancy here!</p>
        <Card>
          <p>Cards are just white boxes...</p>
        </Card>
      </section>

      <section>
        <h3>Structure</h3>
        <p>There are </p>
        <Card>
          <Card.Header>
            <Card.Title>Card Title</Card.Title>
          </Card.Header>
          <Card.Body>Card.Body</Card.Body>
          <Card.Footer>Card.Footer</Card.Footer>
        </Card>
      </section>

      <section>
        <h3>Loading State</h3>
        <AsyncCardExample />
      </section>

      <section>
        <h3>Multiscope</h3>
        <MultiScopeCardExample />
      </section>

      <section>
        <h3>Card With Sections</h3>
        <CardWithSections />
      </section>

      {/* <section>
        <h3>Something Else I dunno</h3>
        <Card>
          <Card.Header>
            <Card.Title>Card Header</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Section>
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
            </Card.Section>
            <Card.Section collapsible={true}>
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
            </Card.Section>
            <Card.Section>
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
            </Card.Section>
          </Card.Body>
        </Card>
      </section> */}
    </div>
  );
};

export default {
  name: 'Cards',
  component: CardsPage,
};
