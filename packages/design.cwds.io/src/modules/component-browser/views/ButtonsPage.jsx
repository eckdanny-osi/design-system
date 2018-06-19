import React from 'react';
import Button from '@cwds/components/lib/Button';
import { Card } from '@cwds/components/lib/Cards';

export default () => (
  <div>
    <h2>Buttons</h2>
    <Card>
      <Card.Body>
        <p>
          The typical instance(s) of the <tt>Button</tt> component:
        </p>
        <p>
          <Button color="secondary">secondary</Button>{' '}
          <Button color="primary">primary</Button>
        </p>
        <p>
          Though other contextual variants exist, they are to be used far less
          frequently.
        </p>
        <p>
          <Button color="success">success</Button>{' '}
          <Button color="info">info</Button>{' '}
          <Button color="warning">warning</Button>{' '}
          <Button color="danger">danger</Button>{' '}
          <Button color="link">link</Button>
        </p>
        <blockquote>
          When possible, the number of contextual user interactions should be
          limited to two.
        </blockquote>
        <Card.Subtitle>Placement</Card.Subtitle>
      </Card.Body>
    </Card>
  </div>
);

// export default {
//   component: Buttons,
//   name: 'Buttons',
// };
