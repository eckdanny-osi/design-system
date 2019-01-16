import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col
} from "@cwds/components";

class HomeInformation extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle id="licensing-approval-worker">
            Licensing / Approval Worker
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="6" md="4" className="p-2">
              <div>Name</div>
              <div>
                <a href="/">Jane Doe</a>
              </div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <div>Phone Number</div>
              <div>916 555-8888</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <div>Email</div>
              <div>janedoe@cwds.ca.gov</div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default HomeInformation;
