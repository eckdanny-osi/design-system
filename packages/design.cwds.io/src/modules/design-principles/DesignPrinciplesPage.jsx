import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import slugify from 'slugify';
import { LayoutJumpNav } from '@cwds/components/lib/Layouts';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Logo from '@cwds/components/lib/Logo';
import Card from '@cwds/components/lib/Cards';
import Container from '@cwds/components/lib/Container';
import { ListGroup, ListGroupItem } from '@cwds/components/lib/ListGroups';
import Breadcrumb from '@cwds/components/lib/Breadcrumbs';
import AnchorNav from '@cwds/components/lib/AnchorNav';

import IntraPageRoutes from './routes';

import routes from './routes';

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
      <PageHeader title="Principles" />
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a>Principles</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
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
            function renderSection({
              title,
              slug,
              children,
              component: Component,
            }) {
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
            return <div>{routes.map(renderSection)}</div>;
          }}
        />
      </Container>
    </div>
  );
};

// // import ComponentPages from './views';
// const ComponentPages = [
//   { name: 'Values', slug: 'asdfasdf' },
//   { name: 'ScrumBan', slug: 'scrumbad' },
//   { name: 'Component Library', slug: 'component-library' },
//   { name: 'Research', slug: 'research' },
//   { name: 'Team', slug: 'team' },
// ];

// // const Box = ({ children }) => (
// //   <Card>
// //     <CardBody>{children()}</CardBody>
// //   </Card>
// // );

// const DefaultView = () => (
//   <div>
//     <h3>Welcome!</h3>
//     Select a <tt>component</tt> from the list to the left to learn more.
//   </div>
// );

// const toSlug = str => slugify(str, { lower: true });

// const renderAppBar = props => (
//   <AppBar
//     brand={() => {
//       return (
//         <Link to="/">
//           <Logo />
//         </Link>
//       );
//     }}
//   />
// );

// const ListGroupItemLink = withRouter(
//   ({ history, location, match, staticContext: _, to, ...props }) => {
//     return (
//       <ListGroupItem
//         {...props}
//         onClick={() => history.push(to)}
//         action
//         active={to === location.pathname}
//       />
//     );
//   }
// );

// export default ({ match }) => {
//   return (
//     <div>
//       <AppBar
//         brand={props => {
//           return (
//             <Link to="/">
//               <Logo />
//             </Link>
//           );
//         }}
//       />
//       <PageHeader title="Components" />
//       <Container>
//         <Breadcrumb>
//           <Breadcrumb.Item>
//             <a>Principles</a>
//           </Breadcrumb.Item>
//           <Breadcrumb.Item active>Home</Breadcrumb.Item>
//         </Breadcrumb>
//       </Container>
//       <Container>
//         <LayoutJumpNav
//           appBar={renderAppBar}
//           header={() => <PageHeader title="Principles" />}
//           sidebar={() => {
//             return (
//               <ListGroup>
//                 {ComponentPages.map(({ name, slug }) => (
//                   <ListGroupItemLink
//                     key={name}
//                     to={`${match.url}/${slug || toSlug(name)}`}
//                     action
//                     style={{ cursor: 'pointer' }}
//                   >
//                     {name}
//                   </ListGroupItemLink>
//                 ))}
//               </ListGroup>
//             );
//           }}
//           render={props => {
//             return (
//               <div>
//                 {ComponentPages.map(({ name, slug, component: Component }) => {
//                   slug = slug || toSlug(name);
//                   return (
//                     <Route
//                       key={slug}
//                       path={`${match.url}/${slug}`}
//                       component={Component}
//                     />
//                   );
//                 })}
//                 <Route
//                   exact
//                   path={match.url}
//                   render={() => <div>{props => <DefaultView />}</div>}
//                 />
//               </div>
//             );
//           }}
//         />
//       </Container>
//     </div>
//     // <LayoutJumpNav
//     //   appBar={renderAppBar}
//     //   header={() => <PageHeader title="Design Principles" />}
//     //   sidebar={() => {
//     //     return (
//     //       <ListGroup>
//     //         {ComponentPages.map(({ name, slug }) => (
//     //           <ListGroupItemLink
//     //             key={name}
//     //             to={`${match.url}/${slug || toSlug(name)}`}
//     //             action
//     //             style={{ cursor: 'pointer' }}
//     //           >
//     //             {name}
//     //           </ListGroupItemLink>
//     //         ))}
//     //       </ListGroup>
//     //     );
//     //   }}
//     //   render={props => {
//     //     return (
//     //       <div>
//     //         <Breadcrumb>
//     //           <Breadcrumb.Item>
//     //             <a>Principles</a>
//     //           </Breadcrumb.Item>
//     //           <Breadcrumb.Item active>
//     //             <a>Something</a>
//     //           </Breadcrumb.Item>
//     //         </Breadcrumb>
//     //         <div>HELLO WORLD</div>
//     //       </div>
//     //       // <div>
//     //       //   {ComponentPages.map(({ name, slug, component: Component }) => {
//     //       //     slug = slug || toSlug(name);
//     //       //     return (
//     //       //       <Route
//     //       //         key={slug}
//     //       //         path={`${match.url}/${slug}`}
//     //       //         component={Component}
//     //       //       />
//     //       //     );
//     //       //   })}
//     //       //   <Route
//     //       //     exact
//     //       //     path={match.url}
//     //       //     render={() => <Box>{props => <DefaultView />}</Box>}
//     //       //   />
//     //       // </div>
//     //     );
//     //   }}
//     // />
//   );
// };
