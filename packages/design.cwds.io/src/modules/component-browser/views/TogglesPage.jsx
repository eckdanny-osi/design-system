import React from 'react';
import Card from '@cwds/components/lib/Cards';
import Toggle from '@cwds/components/lib/Toggle';

export default () => (
  <div>
    <h2>Toggles</h2>
    <Card>
      <Card.Body>
        <Toggle>
          <Toggle.Option value="1">Thing 1</Toggle.Option>
          <Toggle.Option value="2">Thing 2</Toggle.Option>
          <Toggle.Option value="3">Thing 3</Toggle.Option>
          <Toggle.Option value="4">Thing 4</Toggle.Option>
        </Toggle>
      </Card.Body>
    </Card>
  </div>
);
