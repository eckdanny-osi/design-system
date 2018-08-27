import React from 'react';
import { Badge, Card } from '@cwds/components';
import { CONTEXT } from '@cwds/components/lib/utils';

export default () => (
  <div>
    <h2>Badges</h2>
    <Card>
      <section>
        <Card.Subtitle>Standard</Card.Subtitle>
        {Object.values(CONTEXT).map(context => (
          <Badge key={context} color={context} className="m-1">
            {context}
          </Badge>
        ))}
      </section>
      <section>
        <Card.Subtitle>Pills</Card.Subtitle>
        {Object.values(CONTEXT).map(context => (
          <Badge key={context} pill color={context} className="m-1">
            {context}
          </Badge>
        ))}
      </section>
      <section className="mt-2">
        <h5>Example</h5>
        <Badge color="info" pill>
          systems nominal
        </Badge>
      </section>
    </Card>
  </div>
);
