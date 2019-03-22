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
        <Col sm={6}>
          <div className="mb-3 mb-sm-0">
            <CardTitle>Smtih, Sarah</CardTitle>
            <CardTitle>Smtih, Sarah</CardTitle>
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
      <p className="mb-0">I am collapsible </p>
    </CardBody>
  </UncontrolledCollapsibleCard>
)

export default CollapsibleCardDemo
