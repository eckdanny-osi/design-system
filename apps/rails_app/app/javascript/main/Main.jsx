import React from 'react'
import '@cwds/core/dist/styles.css'
import {
  AlertUncontrolled,
  Avatar,
  Button,
  Card,
  Col,
  Container,
  Page,
  Row,
} from '@cwds/components'

export const App = ({}) => (
  <Page
    title="rails_app"
    layout="jumpnav"
    breadcrumb={() => (
      <span>
        Hello from <tt>Ruby on Rails</tt>!
      </span>
    )}
    sidenav={() => 'Sidenav'}
    main={() => (
      <div>
        <main>
          <Container>
            <AlertUncontrolled color="warning">
              <strong>Attention!</strong> This is not the guide site you're
              looking for.
            </AlertUncontrolled>

            <section>
              <h2>About</h2>
              <Card className="my-3">
                <p>
                  This is a sample app build with <tt>@cwds/components</tt> and{' '}
                  <tt>rails + webpacker</tt>. The app demonstrates integration
                  and may be used for automated test routines as well.
                </p>
                <p>
                  This is <strong>not</strong> a source of documentation! For
                  that, please refer to the{' '}
                  <a href="http://design.eckdanny.com">guide site</a>.
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
                <Row>
                  <Col sm="6">alksdjf</Col>
                  <Col sm="6">alksdjf</Col>
                </Row>
                <Row>
                  <Col sm="6">alksdjf</Col>
                  <Col sm="6">alksdjf</Col>
                </Row>
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
          </Container>
        </main>
      </div>
    )}
  />
)

export default App
