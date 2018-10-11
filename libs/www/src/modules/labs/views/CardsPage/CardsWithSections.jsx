import React from 'react';
import Card from '@cwds/components/dist/Cards';

const CardsWithSections = () => {
  return (
    <div>
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
