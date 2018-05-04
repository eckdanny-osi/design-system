import React from 'react';
import Alert from '@cwds/components/lib/Alert';

const AlertsPage = () => (
  <div>
    <h1>Alerts</h1>
    <Alert color="primary">alskdfj</Alert>
    <Alert color="info">alskdfjlaskdjf</Alert>
    <Alert color="danger">Danger</Alert>
    <Alert color="success">alksdjf</Alert>
  </div>
);

export default {
  component: AlertsPage,
  name: 'Alerts',
};
