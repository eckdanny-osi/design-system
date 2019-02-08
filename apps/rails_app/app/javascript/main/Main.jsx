import React from 'react'
import '@cwds/components/scss/global.scss'
import {
  AlertUncontrolled,
  Avatar,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Col,
  Page,
  Row,
} from '@cwds/components'

const WelcomeMarquee = () => (
  <div>
    Just a <code>rails</code> app build with <code>@cwds/components</code>!
  </div>
)

const MyPageActions = () => (
  <Button color="info" size="sm" href="/components">
    Components
  </Button>
)

export const App = () => (
  <Page
    title="Yay! You're on Rails!"
    layout="dashboard"
    PageActions={MyPageActions}
    Breadcrumb={<WelcomeMarquee />}
    sidenav={() => 'Sidenav'}
    main={() => (
      <div>
        <AlertUncontrolled color="warning">
          <strong>Attention!</strong> This is not the guide site you&apos;re
          looking for.
        </AlertUncontrolled>

        <section>
          <h2>About</h2>
          <Card className="my-3">
            <CardBody>
              <p>
                This is a sample app build with <tt>@cwds/components</tt> and{' '}
                <tt>rails + webpacker</tt>. The app demonstrates integration and
                may be used for automated test routines as well.
              </p>
              <p className="mb-0">
                This is <strong>not</strong> a source of documentation! For
                that, please refer to the{' '}
                <a href="https://cws-cares.netlify.com">guide site</a>.
              </p>
            </CardBody>
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
              <Card>
                <CardBody>Just a simple Card</CardBody>
              </Card>
            </section>

            <section>
              <h4>Structured Card</h4>
              <Card>
                <CardHeader>
                  <CardTitle>Header</CardTitle>
                </CardHeader>
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>
            </section>

            <section>
              <h4 className="text-danger">Multi-Context Card</h4>
              <p>TODO</p>
            </section>
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
        </section>
      </div>
    )}
  />
)

export default App
