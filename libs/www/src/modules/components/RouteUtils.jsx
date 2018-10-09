import React, { Fragment } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import ListGroup from '@cwds/components/lib/ListGroups';
import Page from '@cwds/components/lib/Layouts/Page';

// Demo some CTA usage
import SearchWizard from './SearchWizard';
const ContextualActions = () => <SearchWizard />;

const SideNav = withRouter(({ match, routes = [] }) => {
  if (!routes.length) return null;
  return (
    <ListGroup>
      {routes.map(({ path, title }) => (
        <ListGroup.Item
          action
          key={path}
          active={match.path === path}
          tag={Link}
          to={path}
        >
          {title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

const DefaultComponent = () => <div>@TODO</div>;

export const GeneralRoute = ({ route, parentContext = [] }) => {
  const {
    title,
    path,
    children,
    component: MainComponent = DefaultComponent,
  } = route;
  if (route.children) {
    const basePath = getParentPath(parentContext).join('');
    const fullPath = `${basePath}${path}`;
    const trail = getTrail([
      ...parentContext.map(({ path, title }) => ({ path, title })),
      { path, title },
    ]);
    return (
      <Fragment>
        <Route
          path={fullPath}
          exact
          render={() => (
            <Page
              title={title}
              breadcrumb={trail}
              cta={ContextualActions}
              layout="subroutes"
              sidenav={() => (
                <SideNav
                  routes={children.map(child => ({
                    ...child,
                    path: `${fullPath}${child.path}`,
                  }))}
                />
              )}
              main={MainComponent}
            />
          )}
        />
        {children.map((child, i) => (
          <GeneralRoute
            key={i}
            route={child}
            parentContext={[...parentContext, route]}
          />
        ))}
      </Fragment>
    );
  } else {
    const basePath = getParentPath(parentContext).join('');
    const fullPath = `${basePath}${path}`;
    const trail = getTrail([
      ...parentContext.map(({ path, title }) => ({ path, title })),
      { path, title },
    ]);
    return (
      <Route
        path={fullPath}
        render={() => {
          return (
            <Page
              layout="subroutes"
              title={title}
              breadcrumb={trail}
              cta={ContextualActions}
              sidenav={() => (
                <SideNav
                  routes={getSiblingRoutes(parentContext).map(child => ({
                    ...child,
                    path: `${basePath}${child.path}`,
                  }))}
                />
              )}
              main={MainComponent}
            />
          );
        }}
      />
    );
  }
};

//
// Helpers
//

function getParentPath(parentChain) {
  return parentChain.map(({ path }) => path);
}

export function getSiblingRoutes(parentContexts) {
  return parentContexts[parentContexts.length - 1].children;
}

export function getTrail(partialRoutes) {
  const pathsAndTitles = [{ path: '/', title: 'Home' }];
  let prefix = '';
  for (let partial of partialRoutes) {
    prefix += partial.path;
    pathsAndTitles.push({ ...partial, path: prefix });
  }
  return pathsAndTitles;
}
