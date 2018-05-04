import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import { Breadcrumb, BreadcrumbItem } from '@cwds/components/lib/Breadcrumb';
import Logo from '@cwds/components/lib/Logo';
import Container from '@cwds/components/lib/Container';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';
import { Card, CardBody } from '@cwds/components/lib/Cards';

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
      <PageHeader title="Design Principles" />
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Library</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Data</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col md="4" lg="3">
            <Card>
              <CardBody>
                <p>
                  For <tt>Components</tt>, go <Link to="/components">here</Link>.
                </p>
                <p>
                  For <tt>Page Layouts</tt>, go{' '}
                  <Link to="/page-layouts">here</Link>.
                </p>
                <p>
                  For <tt>Core</tt> stuff, go <Link to="/core">here</Link>.
                </p>
                <p>
                  For <tt>Operating Principles</tt> stuff, go{' '}
                  <Link to="/principles">here</Link>.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="8" lg="9">
            <Card>
              <CardBody>
                <em>Oooooohhhhh....</em> Wouldn't you like to know?
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardBody>
                <h2>Background</h2>
                <p>
                  The people working in the state, county, and tribal areas of
                  CA are the people we entrust to respond to, protect, and
                  maintain the safety, well being, and home permanency of CA's
                  at risk children. At Child Welfare Digital Services (CWDS) we
                  are redesigning the tools that help these case workers, social
                  workers, home approval and licensing workers, and
                  administrative staff who do this work. When we increase the
                  time social workers and other professionals interact with the
                  children in the child welfare system, it leads to better
                  outcomes for children. We aim to do that by designing more
                  efficient tools.
                </p>
                <p>
                  CWS-CARES will replace multiple, disjointed state and county
                  systems currently in use, including the statewide CWS/Case
                  Management System that was created in 1997.
                </p>
                <h2>Vision</h2>
                <p>We will design solutions that that:</p>
                <ul>
                  <li>
                    Meet user needs based on primary user research and feedback
                    from county and tribal workers
                  </li>
                  <li>Address changing policy requirements</li>
                  <li>Improve the quality of data entered into the system</li>
                </ul>

                <p>
                  CWS-CARES will be reliable, responsive, and intuitive to use.
                  Workers will be able to better monitor the safety, well being
                  and home permanency of children touched by the CA child
                  welfare system.
                </p>

                <p>
                  The design will encourage workers to identify and capture
                  valuable information. It will allow both workers and policy
                  makers to pull actionable insights from the data.
                </p>

                <p>
                  The design will keep simple things simple and make complex
                  things understandable.
                </p>

                <p>
                  CWS-CARES will be one of the best child welfare
                  decision-making tools in the nation. We will share the
                  research insights that lead to our design decisions as well as
                  resulting the principles, design system, and solutions. We
                  invite other states to use and build on our work.
                </p>

                <p>
                  We believe that government can build excellent user-centered
                  digital services.
                </p>

                <h2>Goals</h2>
                <ul>
                  <li>Efficiency</li>
                  <li>Consistency</li>
                  <li>Foster Design System thinking</li>
                  <li>Continue to establish what’s there and what’s missing</li>
                  <li>Determine areas to contribute to the living framework</li>
                  where decisions live
                  <li>Collect and document decisions in living framework</li>
                  <li>Provide priority of needs across design system</li>
                  (components, patterns, visual language, etc)
                  <li>Establish a governance model</li>
                  <li>Include a voice from all service teams</li>
                  <li>Support Digital Service Teams</li>
                  <li>Maintain and foster growth of the design system</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
