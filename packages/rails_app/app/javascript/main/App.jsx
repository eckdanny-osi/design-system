import React from 'react';
import {
  AppBar,
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Grid,
  PageHeader,
} from '@cwds/components';
import '@cwds/components/lib/global/styles';

export const App = ({}) => (
  <div>
    <AppBar />
    <PageHeader title="Sample Rails App" />
    <Grid.Container>
      <main>
        <section>
          <h2>About</h2>
          <Card className="mb-3">
            <p>
              This is a sample app build with <tt>@cwds/components</tt> and{' '}
              <tt>rails + webpacker</tt>. The app demonstrates integration and
              may be used for automated test routines as well. This is{' '}
              <strong>not</strong> a source of documentation! (Refer to the
              guide site at design.cwds.io if that is what you're looking for.)
            </p>
          </Card>
        </section>

        <section>
          <h2>Components</h2>
          <section>
            <h3>Avatar</h3>
            <Avatar />
          </section>
          <section>
            <h3>Breadcrumb</h3>
            <Breadcrumb />
          </section>
          <section>
            <h3>Button</h3>
            <Button>Hello</Button>
            <br />
            <Button color="success">Hello</Button>
          </section>
          <section>
            <h3>Card</h3>
            <section>
              <h4>Simple Card</h4>
              <Card>Just a simple Card</Card>
            </section>
            <section>
              <h4>Structured Card</h4>
              <Card>
                <Card.Header>Header</Card.Header>
                <Card.Body>Body</Card.Body>
                <Card.Footer>Footer</Card.Footer>
              </Card>
            </section>
            <section>
              <h4 className="text-danger">Multi-Context Card</h4>
              <p>TODO</p>
            </section>
          </section>
          <section>
            <h3>Collapse</h3>
            {/* <Collapse /> */}
          </section>
          <section>
            <h3>Grid</h3>
            <Grid.Row>
              <Grid.Col sm="6">alksdjf</Grid.Col>
              <Grid.Col sm="6">alksdjf</Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col sm="6">alksdjf</Grid.Col>
              <Grid.Col sm="6">alksdjf</Grid.Col>
            </Grid.Row>
          </section>
          <section>
            <h3>Icon</h3>
            {/* <Icon /> */}
          </section>
          <section>
            <h3>Logo</h3>
            {/* <Logo /> */}
          </section>
          <section>
            <h3>PageHeader</h3>
            {/* <PageHeader /> */}
          </section>
          <section>
            <h3>Tooltip</h3>
            {/* <Tooltip /> */}
          </section>
          <section>
            <h3>InfoTip</h3>
            {/* <InfoTip /> */}
          </section>
        </section>
      </main>
    </Grid.Container>
  </div>
);
export default App;
