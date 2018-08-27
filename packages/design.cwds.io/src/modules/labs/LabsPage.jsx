import React, { Fragment } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import slugify from 'slugify';
import {
  AppBar,
  PageHeader,
  Breadcrumb,
  Container,
  Card,
  ListGroup,
  ListGroupItem,
} from '@cwds/components';
import { LayoutJumpNav } from '@cwds/components/lib/Layouts';
import ComponentPages from './views';

const toSlug = str => slugify(str, { lower: true });

const ListGroupItemLink = withRouter(
  ({ history, location, match, staticContext: _, to, ...props }) => {
    return (
      <ListGroupItem
        {...props}
        onClick={() => history.push(to)}
        action
        active={to === location.pathname}
      />
    );
  }
);

export default ({ match }) => {
  return (
    <LayoutJumpNav
      appBar={() => <AppBar />}
      header={() => (
        <Fragment>
          <PageHeader title="Labs" />
          <Container>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Labs</Breadcrumb.Item>
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
