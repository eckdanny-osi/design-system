import React from 'react';
import Alert, { AlertUncontrolled } from '@cwds/components/lib/Alert';
// import { Card, Card.Body, Card.Header } from '@cwds/components/lib/Cards';
import Card from '@cwds/components/lib/Cards';

export default () => (
  <div>
    <Card>
      <Card.Header>
        <h2>Alerts</h2>
      </Card.Header>
      <Card.Body>
        {/* <Alert color="primary">This is a primary alert — check it out!</Alert> */}
        {/* <Alert color="secondary">
          This is a secondary alert — check it out!
        </Alert> */}
        <Alert color="success">This is a success alert — check it out!</Alert>
        <Alert color="danger">This is a danger alert — check it out!</Alert>
        <Alert color="warning">This is a warning alert — check it out!</Alert>
        <Alert color="info">This is a info alert — check it out!</Alert>
        {/* <Alert color="light">This is a light alert — check it out!</Alert> */}
        {/* <Alert color="dark">This is a dark alert — check it out!</Alert> */}
        <AlertUncontrolled color="warning" className="mb-0">
          This is a warning alert — check it out! You may also be interested to
          see how the overflow conditions work here...
        </AlertUncontrolled>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <p>
          <tt>Alert</tt>s are one of the few components that can exist{' '}
          <em>outside</em> of a <tt>Card</tt>!
        </p>
      </Card.Body>
    </Card>
    <br />
    <Alert color="info">I'm an alert. Just chillin' out here.</Alert>
  </div>
);

// export default {
//   component: AlertsPage,
//   name: 'Alerts',
// };
