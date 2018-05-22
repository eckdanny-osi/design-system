import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import slugify from 'slugify';
import { LayoutJumpNav } from '@cwds/components/lib/Layouts';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Logo from '@cwds/components/lib/Logo';
import { Card, CardBody } from '@cwds/components/lib/Cards';
import { ListGroup, ListGroupItem } from '@cwds/components/lib/ListGroups';
import ComponentPages from './ComponentPages';

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

const renderPageHeader = props => <PageHeader title="Components" />;

export default ({ match }) => {
  return (
    <LayoutJumpNav
      appBar={renderAppBar}
      header={renderPageHeader}
      sidebar={() => {
        return (
          //   <ListGroup>
          //     <ListGroupItem active tag="a" href="#" action>
          //       Cras justo odio
          //     </ListGroupItem>
          //     <ListGroupItem tag="a" href="#" action>
          //       Dapibus ac facilisis in
          //     </ListGroupItem>
          //     <ListGroupItem tag="a" href="#" action>
          //       Morbi leo risus
          //     </ListGroupItem>
          //     <ListGroupItem tag="a" href="#" action>
          //       Porta ac consectetur ac
          //     </ListGroupItem>
          //     <ListGroupItem disabled tag="a" href="#" action>
          //       Vestibulum at eros
          //     </ListGroupItem>
          //   </ListGroup>
          // );

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
            {new Array(10).fill(1).map((_, i) => {
              return (
                <ListGroupItem key={`fake-${i}`}>
                  <Link to="/components">Welcome</Link>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        );

        // return (
        //   <ul>
        //     <li>
        //       <Link to="/components">Welcome</Link>
        //     </li>
        //     {ComponentPages.map(({ name, slug }) => {
        //       slug = slug || toSlug(name);
        //       return (
        //         <li key={name}>
        //           <Link to={`${match.url}/${slug}`}>{name}</Link>
        //         </li>
        //       );
        //     })}
        //   </ul>
        // );
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

// export default () => {
//   return (
//     <LayoutSimple
//       render={() => {
//         return (
//           <div>
//             <Row>
//               <Col sm="4">
//                 <Card>
//                   <CardBody>laksdjf</CardBody>
//                 </Card>
//                 <Card>
//                   <CardBody>laksdjf</CardBody>
//                 </Card>
//                 <Card>
//                   <CardBody>laksdjf</CardBody>
//                 </Card>
//               </Col>
//               <Col sm="8">
//                 <Card>
//                   <CardBody>laksdjf</CardBody>
//                 </Card>
//               </Col>
//             </Row>
//           </div>
//         );
//       }}
//     />
//   );
// };
