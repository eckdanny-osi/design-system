import React from 'react';
import Badge from '@cwds/components/lib/Badge';
import { Card } from '@cwds/components';

export default () => (
  <div>
    <h2>Badges</h2>

    <Card>
      <Card.Header>
        <Card.Title>alksdjf</Card.Title>
      </Card.Header>
      <Card.Body>
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="light">Light</Badge>
        <Badge color="dark">Dark</Badge>
      </Card.Body>
    </Card>
  </div>
);

// export default {
//   component: Buttons,
//   name: 'Badges',
// };
