import React from 'react';
import Button from '@cwds/components/lib/Button';

const Buttons = () => (
  <div>
    <h1>Buttons</h1>
    <Button color="primary">primary</Button>{' '}
    <Button color="secondary">secondary</Button>{' '}
    <Button color="success">success</Button> <Button color="info">info</Button>{' '}
    <Button color="warning">warning</Button>{' '}
    <Button color="danger">danger</Button> <Button color="link">link</Button>
  </div>
);

export default {
  component: Buttons,
  name: 'Buttons',
};
