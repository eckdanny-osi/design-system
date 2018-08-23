import React from 'react';
import ButtonGroup from '@cwds/components/lib/ButtonGroup';
import Button from '@cwds/components/lib/Button';
import Card from '@cwds/components/lib/Cards';

export default () => (
  <Card>
    <Card.Header>
      <h2>ButtonGroups</h2>
    </Card.Header>
    <Card.Body>
      <p>
        When you want to group <tt>Button</tt> components together!
      </p>
      <ButtonGroup>
        <Button>Left</Button>
        <Button active>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </Card.Body>
  </Card>
);
