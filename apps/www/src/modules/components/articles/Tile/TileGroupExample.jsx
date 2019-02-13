import React from 'react'
import { Link } from 'react-router-dom'
import {
  Badge,
  Card,
  CardBody,
  CardDeck,
  CardHeader,
  CardTitle,
  Col,
  MenuItem,
  Row,
  Tile,
  UncontrolledMenu as Menu,
} from '@cwds/components'

const TileGroupExample = () => (
  <Card className="mb-0">
    <CardHeader>
      <CardTitle>Chores</CardTitle>
    </CardHeader>
    <CardBody>
      <CardDeck>
        <Tile
          icon="exclamation-triangle"
          title="Pay Bills"
          Menu={
            <Menu right size="sm">
              <MenuItem>Autopay Settings</MenuItem>
              <MenuItem>Ignore</MenuItem>
              <MenuItem>One-Time Payment</MenuItem>
            </Menu>
          }
        >
          Just some content... I am just a container so pretty much anything can
          be put in me
        </Tile>
        <Tile
          icon="check"
          title="Take Out Trash, but with an excessively long title"
        >
          Not much to see here
        </Tile>
        <Tile
          icon="bell"
          title="Approve Changes"
          Menu={
            <Menu right>
              <MenuItem>Approve</MenuItem>
              <MenuItem>Edit Workflow</MenuItem>
              <MenuItem>Vacation</MenuItem>
            </Menu>
          }
        >
          <div className="my-1">
            <Link to="/">Important Document</Link>
          </div>
          <div className="mb-1">
            <div>
              <small>Last Edit:</small>
              <small className="float-right">
                <Link to="/">5m ago</Link>
              </small>
            </div>
            <div>
              <small>By:</small>
              <small className="float-right">
                <Link to="/">John Smith</Link>
              </small>
            </div>
            <div>
              <small>Labels:</small>
              <small className="float-right">
                <Badge color="success">Foo</Badge>{' '}
                <Badge color="warning">Bar</Badge>{' '}
                <Badge color="danger">Quo</Badge>
              </small>
            </div>
            <Row>
              <Col>
                <small>Recommendation:</small>
              </Col>
              <Col className="text-right">
                <small>
                  <Link to="/">Approve</Link>
                </small>
              </Col>
            </Row>
          </div>
        </Tile>
      </CardDeck>
    </CardBody>
  </Card>
)

export default TileGroupExample
