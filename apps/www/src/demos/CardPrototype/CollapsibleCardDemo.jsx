import React from 'react'
import {
  UncontrolledCollapsibleCard,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from '@cwds/components'

const CollapsibleCardDemo = () => (
  <UncontrolledCollapsibleCard>
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
      <p className="mb-0">I am collapsible </p>
    </CardBody>
  </UncontrolledCollapsibleCard>
)

export default CollapsibleCardDemo
