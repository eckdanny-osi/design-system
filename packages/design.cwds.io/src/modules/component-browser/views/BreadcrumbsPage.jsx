import React from 'react';
import Card from '@cwds/components/lib/Cards';
import Breadcrumb from '@cwds/components/lib/Breadcrumbs';

export default () => (
  <div>
    <h2>Breadcrumbs</h2>
    <Card>
      <Card.Body>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a>Foo</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a>Bar</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Quo</Breadcrumb.Item>
        </Breadcrumb>
      </Card.Body>
    </Card>
  </div>
);
