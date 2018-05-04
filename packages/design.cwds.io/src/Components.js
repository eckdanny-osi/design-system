import React from 'react';
import { Route, Link } from 'react-router-dom';
import slugify from 'slugify';
import { LayoutJumpNav } from '@cwds/components/lib/Layouts';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Logo from '@cwds/components/lib/Logo';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';
import { Card, CardBody } from '@cwds/components/lib/Cards';
import ComponentPages from './ComponentPages';

const toSlug = str => slugify(str, { lower: true });

const ButtonsPage = () => <div>Buttons Page</div>;

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

const renderPageHeader = props => <PageHeader title="Components" />;

export default ({ match }) => {
  return (
    <LayoutJumpNav
      appBar={renderAppBar}
      header={renderPageHeader}
      sidebar={() => {
        return (
          <ul>
            <li>
              <Link to="/components">Welcome</Link>
            </li>
            {ComponentPages.map(({ name, slug }) => {
              slug = slug || toSlug(name);
              return (
                <li key={name}>
                  <Link to={`${match.url}/${slug}`}>{name}</Link>
                </li>
              );
            })}
          </ul>
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
              render={() => <div>Select a component to learn more...</div>}
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
