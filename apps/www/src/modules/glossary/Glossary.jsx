import React from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Page,
  Button,
  Badge,
  Form,
  Input,
  Label,
  FormGroup,
} from '@cwds/components'

export default () => (
  <Page
    layout="dashboard"
    title="Glossary"
    breadcrumb={[
      { path: '/', title: 'Home' },
      { path: '/glossary', title: 'Glossary' },
    ]}
    main={props => (
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Form>
                <FormGroup className="mb-0">
                  <Label for="term-search">Search</Label>
                  <Input
                    id="term-search"
                    type="search"
                    name="search"
                    placeholder="Button"
                  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )}
  />
)
