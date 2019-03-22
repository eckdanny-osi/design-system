import React from 'react'
import { CardBody, CardHeader, CardTitle, Row, Col } from '@cwds/components'
import { Card } from '@cwds/reactstrap'

const SimpleCard = () => (
  <Card>
    <CardHeader>
      <Row>
        <Col sm={6}>
          <div>
            <CardTitle>Smtih, Sarah</CardTitle>
            <div>## years old</div>
            <div>DOB mm/dd/yyyy</div>
          </div>
        </Col>
        <Col sm={6}>
          <div className="float-sm-right">
            <CardTitle>San Joaquin County</CardTitle>
            <div>Cas/Referral Number</div>
            <div>6324-344-6524-34636353</div>
          </div>
        </Col>
      </Row>
    </CardHeader>
    <CardBody>
      <p className="mb-0">NOT a collapsible Card</p>
    </CardBody>
  </Card>
)

export default SimpleCard
