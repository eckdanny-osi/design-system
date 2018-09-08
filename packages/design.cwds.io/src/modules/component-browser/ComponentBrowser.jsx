import React from 'react';
import { Link } from 'react-router-dom';
import AnchorNav from '@cwds/components/lib/AnchorNav';

import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Breadcrumb from '@cwds/components/lib/Breadcrumbs';
import { Container } from '@cwds/components/lib/Grid';

import IntraPageRoutes from './ComponentRouteManager';

export default () => {
  return (
    <div>
      <AppBar />
      <PageHeader title="Components" />
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Components</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container>
        <AnchorNav.Container
          renderNav={() => (
            <AnchorNav
              items={IntraPageRoutes}
              renderItem={({ slug, title }) => <a href={`#${slug}`}>{title}</a>}
            />
          )}
          renderMain={() => {
            return (
              <div>
                {IntraPageRoutes.map(({ slug, component: Component }) => {
                  return (
                    <AnchorNav.Section
                      key={slug}
                      id={slug}
                      registerRef={() => {}}
                    >
                      <Component />
                      <hr className="my-4" />
                    </AnchorNav.Section>
                  );
                })}
              </div>
            );
          }}
        />
      </Container>
    </div>
  );
};
