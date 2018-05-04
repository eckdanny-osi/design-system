import React from 'react';
import Button from '@cwds/components/lib/Button';

const Buttons = () => (
  <div>
    <h1>Buttons</h1>
    <Button>Default</Button> <Button primary>Primary</Button>{' '}
    <Button warning>Warning</Button>
  </div>
);

export default {
  component: Buttons,
  name: 'Buttons',
};
