import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Label,
  Row,
} from '@cwds/components'

const ClienInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Information</CardTitle>
        <CardBody>
          <Row>
            <Col className="p-2" md="3">
              <Label>First Name</Label>
              <div className="font-weight-bold">Sarah</div>
            </Col>
            <Col className="p-2" md="3">
              <Label>Middle Name</Label>
              <div>--</div>
            </Col>
            <Col className="p-2" md="3">
              <Label>Last Name</Label>
              <div className="font-weight-bold">Smith</div>
            </Col>
            <Col className="p-2" md="3">
              <Label>Suffix Name</Label>
              <div>--</div>
            </Col>
          </Row>
          <Row>
            <Col className="p-2" md="3">
              <Label>Date of Birth</Label>
              <div>02/26/2006</div>
            </Col>
            <Col className="p-2" md="3">
              <Label>County</Label>
              <div>San Joaquin</div>
            </Col>
            <Col className="p-2" md="3">
              <Label>Client ID</Label>
              <div>5558-3936-8494-865435</div>
            </Col>
            <Col className="p-2" md="3" />
          </Row>
        </CardBody>
      </CardHeader>
    </Card>
  )
}

export default ClienInfo
