import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import ListGroup from '@cwds/components/lib/ListGroups';
import { Container, Row, Col } from '@cwds/components/lib/Grid';

import routes from './slabs.routes';
import Page from '../../components/Layout/Page';

import { GeneralRoute } from './RouteUtils';

export default () => {
  return <GeneralRoute route={routes} />;
};

const Sidenav = withRouter(({ location, match, routes }) => {
  if (!routes || !routes.length) return null;
  return (
    <ListGroup>
      {routes.map(({ path, title }) => (
        <ListGroup.Item
          action
          key={path}
          active={match.path === `/slabs${path}`}
          tag={Link}
          to={`/slabs${path}`}
        >
          {title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

const RouteWithSubRoutes = ({ path, component: Component, children }) => (
  <Route
    path={path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <Component {...props} children={children} />
    )}
  />
);

export const OLDdefault = () => {
  return (
    <Fragment>
      <Route
        path="/slabs"
        exact
        render={props => (
          <Page
            title="SLabs"
            breadcrumb={['Components']}
            sidenav={() => <Sidenav routes={routes.children} />}
            main={props => <div>pick something!</div>}
          />
        )}
      />
      {routes.children.map(({ path, title, children }) => (
        <Route
          path={`/slabs${path}`}
          key={path}
          render={props => {
            if (children) {
              const parentTitle = title;
              return (
                <Fragment>
                  {children.map(({ path, title, children }) => {
                    return (
                      <Route
                        path={`${props.match.url}${path}`}
                        key={`${path}`}
                        render={props => {
                          return (
                            <Page
                              title={title}
                              breadcrumb={['Components', parentTitle, title]}
                              sidenav={() => <Sidenav routes={routes} />}
                              main={props => (
                                <div>
                                  Hello from <mark>{title}</mark>!
                                </div>
                              )}
                            />
                          );
                        }}
                      />
                    );
                  })}
                  <Route
                    path={`${props.match.url}`}
                    exact
                    render={props => {
                      return (
                        <Page
                          title={title}
                          breadcrumb={['Components', title]}
                          sidenav={() => <Sidenav routes={children} />}
                          main={props => (
                            <div>
                              Hello from <mark>{title}</mark>!
                            </div>
                          )}
                        />
                      );
                    }}
                  />
                  {/* <Route
                    path={`${props.match.url}/foo`}
                    render={_ => <h2>FOO</h2>}
                  />
                  <Route
                    path={`${props.match.url}/bar`}
                    render={_ => <h2>BAR</h2>}
                  />
                  <Route
                    path={`${props.match.url}/quo`}
                    render={_ => <h2>QUO</h2>}
                  /> */}
                </Fragment>
              );
            }
            return (
              <Page
                title={title}
                breadcrumb={['Components', title]}
                sidenav={() => <Sidenav routes={routes.children} />}
                main={props => (
                  <div>
                    Hello from <mark>{title}</mark>!
                  </div>
                )}
              />
            );
          }}
        />
      ))}
    </Fragment>
  );
};
