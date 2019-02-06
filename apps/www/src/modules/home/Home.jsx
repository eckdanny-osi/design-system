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

const MyBreadcrumbs = () => <em>Welcome to the CARES Design System guide!</em>

const MyPageActions = () => (
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
    Breadcrumb={MyBreadcrumbs}
    main={props => (
      <Row>
        <Col xs={{ order: 2 }} lg={{ size: 9, order: 1 }}>
          <Row>
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

            {/*
            <Col sm={6}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    UX Guidelines / Patterns
                    <small>
                      <Badge color="warning" className="ml-1">
                        TODO
                      </Badge>
                    </small>
                  </CardTitle>
                </CardHeader>
                <CardBody>@TODO</CardBody>
                <CardFooter>
                  <Button color="primary" tag={Link} to="/">
                    Go!
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            */}

            <Col sm={6}>
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
            </Col>

            {/*
            <Col sm={6}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    About
                    <small>
                      <Badge color="warning" className="ml-1">
                        TODO
                      </Badge>
                    </small>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  Defines key terms and identifies the business value of the
                  Design System, a manual for designers, developers, and
                  stakeholders to get the most out of this site
                </CardBody>
                <CardFooter>
                  <Button color="primary" tag={Link} to="/">
                    Go!
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            */}
          </Row>
        </Col>
        <Col
          xs={{ order: 1 }}
          lg={{ size: 3, order: 1 }}
          className="d-none d-sm-block"
        >
          <Row>
            <Col sm={6} md={4} lg={12}>
              <Card>
                <CardBody>Placeholder Widget</CardBody>
              </Card>
            </Col>
            <Col sm={6} md={4} lg={12}>
              <Card>
                <CardBody>Placeholder Widget</CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    )}
  />
)
