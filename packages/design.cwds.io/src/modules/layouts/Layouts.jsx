import React from 'react';
import { Link } from 'react-router-dom';
import AnchorNav from '@cwds/components/lib/AnchorNav';
import AppBar from '@cwds/components/lib/AppBar';
import Breadcrumb from '@cwds/components/lib/Breadcrumbs';
import Col from '@cwds/components/lib/Col';
import Container from '@cwds/components/lib/Container';
import Logo from '@cwds/components/lib/Logo';
import PageHeader from '@cwds/components/lib/PageHeader';
import { NavItem, NavLink } from '@cwds/components/lib/Nav';
import Row from '@cwds/components/lib/Row';

import AboutSection from './views/About';
import BasicContentSection from './views/BasicContent';
import DashboardSection from './views/Dashboard';
import LongJumpSection from './views/LongJump';
import RouteNestSection from './views/RouteNest';

const routes = [
  {
    title: 'About',
    slug: 'about',
    component: AboutSection,
  },
  {
    title: 'Page Elements',
    slug: 'page-elements',
    component: () => <div>Page Elements</div>,
    children: [
      {
        title: 'Something',
        slug: 'something',
        component: () => <div>Something</div>,
      },
    ],
  },
  {
    title: 'The Templates',
    slug: 'templates',
    component: () => <h4>The Templates</h4>,
    children: [
      {
        title: 'Basic Content',
        slug: 'basic-content',
        component: BasicContentSection,
      },
      {
        title: 'Dashboard',
        slug: 'dashboard',
        component: DashboardSection,
      },
      {
        title: 'Long Jump',
        slug: 'long-jump',
        component: LongJumpSection,
      },
      {
        title: 'Route Nest',
        slug: 'route-nest',
        component: RouteNestSection,
      },
    ],
  },
];

export default () => {
  return (
    <div>
      <AppBar
        brand={props => {
          return (
            <Link to="/">
              <Logo />
            </Link>
          );
        }}
      />
      <PageHeader title="Layouts" />
      <Container>
        <AnchorNav.Container
          renderNav={() => (
            <AnchorNav
              offset={135}
              items={routes}
              renderItem={({ slug, title }) => <a href={`#${slug}`}>{title}</a>}
            />
          )}
          renderMain={() => {
            function renderSection({
              title,
              slug,
              children,
              component: Component,
            }) {
              if (children) {
                return (
                  <AnchorNav.Section key={slug} id={slug}>
                    <Component />
                    {children.map(renderSection)}
                  </AnchorNav.Section>
                );
              } else {
                return (
                  <AnchorNav.Section key={slug} id={slug}>
                    <Component />
                    <hr className="my-4" />
                  </AnchorNav.Section>
                );
              }
            }
            return <div>{routes.map(renderSection)}</div>;
          }}
        />
      </Container>
    </div>
  );
};