import React from 'react';
import Button from '@cwds/components/lib/Button';
import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
} from '@cwds/components/lib/Cards';

const Buttons = () => (
  <Card>
    <CardHeader>
      <h2>Buttons</h2>
    </CardHeader>
    <CardBody>
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
      <CardSubtitle>Placement</CardSubtitle>
    </CardBody>
  </Card>
);

export default {
  component: Buttons,
  name: 'Buttons',
};
