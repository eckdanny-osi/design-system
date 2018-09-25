import React, { Fragment } from 'react';
import { Container, Row, Col } from '@cwds/components/lib/Grid';
import Page from '../../components/Layout/Page';
/* eslint-disable import/no-webpack-loader-syntax */
import CoreStyle from '!babel-loader!mdx-loader!./CoreStyle.mdx';

export default () => (
  <Page
    title="Core Style"
    breadcrumb={[]}
    sidenav={() => null}
    main={() => <CoreStyle />}
  />
);
