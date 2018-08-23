/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
// import Alert, { AlertUncontrolled } from '@cwds/components/lib/Alert';
// import { Card, Card.Body, Card.Header } from '@cwds/components/lib/Cards';
import { Alert, AlertUncontrolled, Card } from '@cwds/components';

import MyDocPage from '!babel-loader!mdx-loader!./MyDocPage.md';

export default () => (
  <div>
    <h2>Alerts</h2>
    <Alert color="success">This is a success alert — check it out!</Alert>
    <Alert color="danger">This is a danger alert — check it out!</Alert>
    <Alert color="warning">This is a warning alert — check it out!</Alert>
    <Alert color="info">This is a info alert — check it out!</Alert>
    {/* <Alert color="light">This is a light alert — check it out!</Alert> */}
    {/* <Alert color="dark">This is a dark alert — check it out!</Alert> */}
    <p>Uncontrolled Alerts</p>
    <AlertUncontrolled color="warning" className="mb-0">
      This is a warning alert — check it out! You may also be interested to see
      how the overflow conditions work here...
    </AlertUncontrolled>

    <Card className="mt-4">
      <Card.Body>
        <p>
          <tt>Alert</tt>s are one of the few components that can exist{' '}
          <em>outside</em> of a <tt>Card</tt>!
        </p>
      </Card.Body>
    </Card>
    <br />
    <Alert color="info">I'm an alert. Just chillin' out here.</Alert>
    <MyDocPage />
  </div>
);

// export default {
//   component: AlertsPage,
//   name: 'Alerts',
// };
