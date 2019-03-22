import React from 'react'
import { CardBody, CardHeader, CardTitle, Col, Row } from '@cwds/components'
import { Card } from '@cwds/reactstrap'

const SimpleCard = () => (
  <Card>
    <CardHeader>
      <Row>
        <Col>
          <CardTitle>Smtih, Sarah</CardTitle>
          <div>## years old</div>
          <div>DOB mm/dd/yyyy</div>
        </Col>
        <Col className="float-right" xs="auto">
          <CardTitle>San Joaquin County</CardTitle>
          <div>Cas/Referral Number</div>
          <div>6324-344-6524-34636353</div>
        </Col>
      </Row>
    </CardHeader>
    <CardBody>
      <p className="mb-0">NOT a collapsible Card</p>
    </CardBody>
  </Card>
)

export default SimpleCard
