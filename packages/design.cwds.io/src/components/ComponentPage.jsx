import React from 'react';
import { Card, CardHeader, CardBody } from '@cwds/components/lib/Cards';

export default ({ title, main }) => {
  return (
    <Card>
      <CardHeader>{title()}</CardHeader>
      <CardBody>{main()}</CardBody>
    </Card>
  );
};
