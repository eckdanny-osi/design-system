import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import slugify from 'slugify';
import { LayoutJumpNav } from '@cwds/components/lib/Layouts';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Logo from '@cwds/components/lib/Logo';
import { Card, CardBody } from '@cwds/components/lib/Cards';
import { ListGroup, ListGroupItem } from '@cwds/components/lib/ListGroups';
import ComponentPages from './views';

const Box = ({ children }) => (
  <Card>
    <CardBody>{children()}</CardBody>
  </Card>
);

const DefaultView = () => (
  <div>
    <h3>Welcome!</h3>
    Select a <tt>component</tt> from the list to the left to learn more.
  </div>
);

const toSlug = str => slugify(str, { lower: true });

const renderAppBar = props => (
  <AppBar
    brand={() => {
      return (
        <Link to="/">
          <Logo />
        </Link>
      );
    }}
  />
);

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
      appBar={renderAppBar}
      header={() => <PageHeader title="Labs" />}
      sidebar={() => {
        return (
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
        );
      }}
      render={props => {
        return (
          <div>
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
              render={() => <Box>{props => <DefaultView />}</Box>}
            />
          </div>
        );
      }}
    />
  );
};
