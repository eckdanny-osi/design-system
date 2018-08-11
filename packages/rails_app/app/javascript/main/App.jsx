import React from 'react';
import { AppBar, Container, Button, PageHeader, Card } from '@cwds/components';
import '@cwds/components/lib/global/styles';
// import PropTypes from 'prop-types';
// import foo from './App.scss';
// import AppBar from '@cwds/components/lib/AppBar';
// import PageHeader from '@cwds/components/lib/PageHeader';
// import Button from '@cwds/components/lib/Button';
// import Icon from '@cwds/components/lib/Icon';
// import Container from '@cwds/components/lib/Container';
// import Row from '@cwds/components/lib/Row';
// import Col from '@cwds/components/lib/Col';
// import Logo from '@cwds/components/lib/Logo';
// import Alert, { AlertUncontrolled } from '@cwds/components/lib/Alert';
// import Badge from '@cwds/components/lib/Badge';
// import { Breadcrumb, BreadcrumbItem } from '@cwds/components/lib/Breadcrumbs';
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
// } from '@cwds/components/lib/Cards';

const propTypes = {};
const defaultProps = {};

export const App = ({}) => (
  <div>
    <AppBar />
    <PageHeader title="Sample Rails App" />
    <Container>
      <main>
        <section>
          <h2>About</h2>
          <Card className="mb-3">
            <Button>Foo</Button>
            <Button>Foo</Button>
            <div>
              <Button>Foo</Button>
            </div>
          </Card>
          <p>alskdfjasdlkfj</p>
        </section>
        <section>
          <h2>Another Section</h2>
          <Card>Hello World</Card>
        </section>
      </main>
    </Container>
  </div>
);

// const App = ({ name }) => (
//   <div>
//     <AppBar
//       brand={props => {
//         return (
//           <a>
//             <Logo />
//           </a>
//         );
//       }}
//     />
//     <PageHeader title={() => 'Rails App'} />
//     <Container>
//       <section id="alerts">
//         <h3>Alerts</h3>
//         <Alert color="success">
//           Do <tt>Alert</tt>s work? <em>Awesome!</em>
//         </Alert>
//         <AlertUncontrolled color="warning">
//           Do <tt>AlertUncontrolled</tt>s work? <em>Awesome!</em>
//         </AlertUncontrolled>
//       </section>
//       <section>
//         <h3>Avatars</h3>
//         <pre>
//           <code>@todo</code>
//         </pre>
//       </section>
//       <section>
//         <h3>Badges</h3>
//         <Badge color="success">
//           Awesome!
//         </Badge> <Badge color="info">OK!</Badge>{' '}
//         <Badge color="warning">Careful!</Badge>{' '}
//         <Badge color="danger">Enough!</Badge>
//       </section>
//       <section>
//         <h3>BreadCrumbs</h3>
//         <Breadcrumb>
//           <BreadcrumbItem>
//             <a href="#">Foo</a>
//           </BreadcrumbItem>
//           <BreadcrumbItem>
//             <a href="#">Bar</a>
//           </BreadcrumbItem>
//           <BreadcrumbItem active>Quo</BreadcrumbItem>
//         </Breadcrumb>
//       </section>
//       <h1>alskdjfasdkf</h1>
//       <Alert color="primary">alskdfj</Alert>
//       <Button color="primary">Hello!</Button> <Button>Default Button</Button>{' '}
//       <Button color="warning">Be Careful</Button>
//       <p>asdf</p>
//       <Button color="primary" disabled>
//         <Icon icon="circleNotch" transform={{ rotate: 42 }} spin /> Saving...
//       </Button>{' '}
//       <Button color="success">
//         <Icon style={{ marginRight: '5px' }} icon="check" /> Save
//       </Button>
//       <Card>
//         <CardBody>Hello World</CardBody>
//       </Card>
//       <Alert color="info">I'm an alert. Just chillin' out here.</Alert>
//       <div
//         style={{
//           border: '3px solid #EEEEEE',
//           backgroundColor: 'white',
//           padding: '10px',
//           textAlign: 'right',
//         }}
//       >
//         <Button>Cancel</Button> <Button color="primary">Save</Button>
//       </div>
//       <h3>Question about button states...</h3>
//       <Button color="primary">Save</Button>
//       <p>
//         <em>begets...</em>
//       </p>
//       <Button color="primary" disabled>
//         <Icon style={{ marginRight: '5px' }} icon="circleNotch" spin />{' '}
//         Saving...
//       </Button>
//       <p>
//         <em>begets...</em>
//       </p>
//       <Button color="primary">
//         <Icon style={{ marginRight: '5px' }} icon="check" /> Saved
//       </Button>
//       <br />
//       <br />
//     </Container>
//   </div>
// );

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
