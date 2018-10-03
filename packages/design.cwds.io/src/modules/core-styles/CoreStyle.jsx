import React from 'react';
import Page from '@cwds/components/lib/Layouts/Page';
/* eslint-disable import/no-webpack-loader-syntax */
import CoreStyle from '!babel-loader!@mdx-js/loader!./CoreStyle.mdx';

export default () => (
  <Page
    title="Core Style"
    layout="jumpnav"
    breadcrumb={[
      { title: 'Home', path: '/' },
      { title: 'Core Style', path: '/core-style' },
    ]}
    sidenav={() => null}
    main={() => <CoreStyle />}
  />
);
