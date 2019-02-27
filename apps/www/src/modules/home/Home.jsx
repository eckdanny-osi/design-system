import React from 'react'
import { Link } from 'react-router-dom'
import {
  Page,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col,
} from '@cwds/components'
import githubLogo from '../status/GitHub-Mark-Light-64px.png'

const MyPageActions = (
  <Button
    color="info"
    size="sm"
    href="https://github.com/ca-cwds/design-system"
    style={{
      height: '36px',
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}
    target="_blank"
  >
    <img
      src={githubLogo}
      style={{
        display: 'block',
        maxHeight: '22px',
        marginRight: '0.5rem',
      }}
      alt="github logo"
    />
    GitHub
  </Button>
)

export default () => (
  <Page
    layout="dashboard"
    title="Design System"
    PageActions={MyPageActions}
    Breadcrumb={<em>Welcome to the CARES Design System guide!</em>}
    main={props => (
      <Row>
        <Col xs={{ order: 2 }} lg={{ size: 9, order: 1 }}>
          <Row>
            <Col sm={6}>
              <Card>
                <CardHeader>
                  <CardTitle>About CARES</CardTitle>
                </CardHeader>
                <CardBody>
                  Our success in designing and developing CARES depends on all
                  of us understanding who our users are and what mindset they
                  are in when they use the application.
                </CardBody>
                <CardFooter>
                  <Button color="primary" tag={Link} to="/about-cares">
                    Go!
                  </Button>
                </CardFooter>
              </Card>
            </Col>

            <Col sm={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Component Library</CardTitle>
                </CardHeader>
                <CardBody>
                  Component documentation and visual showcase for developers and
                  designers with usage guidelines and reference implementation
                  examples
                </CardBody>
                <CardFooter>
                  <Button color="primary" tag={Link} to="/components">
                    Go!
                  </Button>
                </CardFooter>
              </Card>
            </Col>

            <Col sm={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Core Style</CardTitle>
                </CardHeader>
                <CardBody>
                  Foundational UX principles and overarching design decisions
                  including color system, typography, grid system, tone,
                  iconography, and accessibility
                </CardBody>
                <CardFooter>
                  <Button color="primary" tag={Link} to="/core-style">
                    Go!
                  </Button>
                </CardFooter>
              </Card>
            </Col>

            {/* <Col sm={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Labs</CardTitle>
                </CardHeader>
                <CardBody>
                  Not everything in here is ready for general use, but it should
                  be showcased for the purpose of design critique and
                  solicitation of general feedback
                </CardBody>
                <CardFooter>
                  <Button color="primary" tag={Link} to="/labs">
                    Go!
                  </Button>
                </CardFooter>
              </Card>
            </Col> */}
          </Row>
        </Col>
      </Row>
    )}
  />
)
