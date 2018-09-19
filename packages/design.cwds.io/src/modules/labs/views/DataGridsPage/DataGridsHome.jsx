import React, { Component } from 'react';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import { Container, Row, Col } from '@cwds/components/lib/Grid';

export default () => {
  return <div>Hello World</div>;
};

export default ({ match }) => {
  return (
    <LayoutJumpNav
      appBar={() => <AppBar />}
      header={() => (
        <Fragment>
          <PageHeader title="DataGrids" />
          <Container>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/">Labs</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>DataGrids</Breadcrumb.Item>
            </Breadcrumb>
          </Container>
        </Fragment>
      )}
      sidebar={() => (
        <ListGroup>
          {ComponentPages.map(({ name, slug }) => (
            <ListGroupItemLink
              key={name}
              to={`${match.url}/${slug || toSlug(name)}`}
              action
              style={{ cursor: 'pointer' }}
            >
              {name}
            </ListGroupItemLink>
          ))}
        </ListGroup>
      )}
      render={props => (
        <Fragment>
          {ComponentPages.map(({ name, slug, component: Component }) => {
            slug = slug || toSlug(name);
            return (
              <Route
                key={slug}
                path={`${match.url}/${slug}`}
                component={Component}
              />
            );
          })}
          <Route
            exact
            path={match.url}
            render={() => (
              <div>
                <h3>Welcome to our Labs Area!</h3>
                Select a <tt>component</tt> from the list to the left to learn
                more.
              </div>
            )}
          />
        </Fragment>
      )}
    />
  );
};
