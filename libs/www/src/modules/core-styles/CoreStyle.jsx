import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Page from '@cwds/components/lib/Layouts/Page';
import JumpNav from '@cwds/components/lib/JumpNav';
/* eslint-disable import/no-webpack-loader-syntax */
import CoreStyle from '!babel-loader!@mdx-js/loader!./CoreStyle.mdx';

const toSlug = str =>
  slugify(str, {
    replacement: '-',
    lower: true,
  });

// const linkReducer = (action, state = []) => {
//   const { type, payload } = action;
//   switch (type) {
//     case 'ADD_LINK': {
//       const { link } = payload;
//       return [...state, link];
//     }
//     case 'REMOVE_LINK': {
//       const { link } = payload;
//       return state.filter(d => d !== link);
//     }
//     default: {
//       return state;
//     }
//   }
// };

const routes = [
  'Experience Principles',
  'Grid System',
  'Functional CSS',
  'Typography',
  'Color System',
  'Iconography',
  'Accessibility',
  'Tone',
].map(title => ({ title, path: `#${toSlug(title)}` }));

class CoreStylePage extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log({ nextProps });
    return false;
  }
  render() {
    return (
      <Page
        title="Core Style"
        layout="jumpnav"
        breadcrumb={[
          { title: 'Home', path: '/' },
          { title: 'Core Style', path: '/core-style' },
        ]}
        sidenav={() => {
          return <JumpNav tag={Link} routes={routes} />;
        }}
        main={() => <CoreStyle />}
      />
    );
  }
}

export default CoreStylePage;
