import React from 'react';
import Avatar from '@cwds/components/lib/Avatar';
import { Card, CardBody, CardHeader } from '@cwds/components/lib/Cards';

export default () => (
  <Card>
    <CardHeader>
      <h2>Avatars</h2>
    </CardHeader>
    <CardBody>
      <Avatar />
    </CardBody>
  </Card>
);

// export default {
//   component: AvatarsPage,
//   name: 'Avatars',
// };
