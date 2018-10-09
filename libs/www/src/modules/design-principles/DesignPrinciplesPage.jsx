import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import { Container } from '@cwds/components/lib/Grid';
import Breadcrumb from '@cwds/components/lib/Breadcrumbs';
import AnchorNav from '@cwds/components/lib/AnchorNav';

import routes from './routes';

function renderSection({ title, slug, children, component: Component }) {
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

export default () => {
  return (
    <div>
      <AppBar />
      <PageHeader title="Principles" />
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Principles</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container>
        <AnchorNav.Container
          renderNav={() => (
            <AnchorNav
              items={routes}
              renderItem={({ slug, title }) => <a href={`#${slug}`}>{title}</a>}
            />
          )}
          renderMain={() => <div>{routes.map(renderSection)}</div>}
        />
      </Container>
    </div>
  );
};
