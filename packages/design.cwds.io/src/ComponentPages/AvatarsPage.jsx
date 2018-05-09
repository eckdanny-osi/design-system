import React from 'react';
import Avatar from '@cwds/components/lib/Avatar';
import { Card, CardBody } from '@cwds/components/lib/Cards';

const AvatarsPage = () => (
  <Card>
    <CardBody>
      <h2>Avatars</h2>
      <Avatar />
    </CardBody>
  </Card>
);

export default {
  component: AvatarsPage,
  name: 'Avatars',
};
