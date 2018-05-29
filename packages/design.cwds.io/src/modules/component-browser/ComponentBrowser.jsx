import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Logo from '@cwds/components/lib/Logo';
import Container from '@cwds/components/lib/Container';
import Breadcrumb from '@cwds/components/lib/Breadcrumbs';
import AnchorNav from '@cwds/components/lib/AnchorNav';
import IntraPageRoutes from './ComponentRouteManager';

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
      <PageHeader title="Components" />
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a>Guide</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a>Principles</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Whatever</Breadcrumb.Item>
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
