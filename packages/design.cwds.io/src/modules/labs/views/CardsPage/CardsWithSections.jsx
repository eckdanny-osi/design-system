import React from 'react';
import Card from '@cwds/components/lib/Cards';

const CardsWithSections = () => {
  return (
    <div>
      <h3>CANS proposal</h3>
      <p>What about an implementation like this for CANS?</p>
      <Card>
        <Card.Header>Add CANS</Card.Header>
        <Card.Body>
          <Card.Section title="Child Behavioral/Emotional Needs">
            Hello World
          </Card.Section>
          <Card.Section title="Child Behavioral/Emotional Needs">
            Hello World
          </Card.Section>
          <Card.Section title="Child Behavioral/Emotional Needs">
            Hello World
          </Card.Section>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsWithSections;
