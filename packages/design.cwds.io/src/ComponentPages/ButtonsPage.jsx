import React from 'react';
import Button from '@cwds/components/lib/Button';
import { Card, CardBody } from '@cwds/components/lib/Cards';

const Buttons = () => (
  <Card>
    <CardBody>
      <h2>Buttons</h2>
      <Button color="secondary">secondary</Button>{' '}
      <Button color="primary">primary</Button>
      <br />
      <br />
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button> <Button color="link">link</Button>
    </CardBody>
  </Card>
);

export default {
  component: Buttons,
  name: 'Buttons',
};
