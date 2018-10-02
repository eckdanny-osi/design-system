import React from 'react';
import { Container, Row, Col } from '@cwds/components/lib/Grid';
import routes from './slabs.routes';
import { GeneralRoute } from './RouteUtils';

export default () => {
  return <GeneralRoute route={routes} />;
};
