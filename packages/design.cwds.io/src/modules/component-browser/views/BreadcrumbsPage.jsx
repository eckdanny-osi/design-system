import React from 'react';
import Badge from '@cwds/components/lib/Breadcrumbs';
import { Card, CardBody, CardHeader } from '@cwds/components/lib/Cards';
import Breadcrumb from '@cwds/components/lib/Breadcrumbs';

export default () => (
  <Card>
    <CardHeader>
      <h2>Breadcrumbs</h2>
    </CardHeader>
    <CardBody>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href>Foo</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href>Bar</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Quo</Breadcrumb.Item>
      </Breadcrumb>
    </CardBody>
  </Card>
);
