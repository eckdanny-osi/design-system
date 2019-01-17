import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col
} from "@cwds/components";
import { Progress } from "@cwds/reactstrap";

class TrackingSummary extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle id="tracking-summary">Tracking Summary</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="4">Aggregate</Col>
            <Col sm="8">
              <Progress value="25" />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm="4">Facility Tracklist</Col>
            <Col sm="8">
              <Progress value="62" />
            </Col>
          </Row>
          <Row>
            <Col sm="4">John Doe</Col>
            <Col sm="8">
              <Progress value="25" />
            </Col>
          </Row>
          <Row>
            <Col sm="4">Jane Doe</Col>
            <Col sm="8">
              <Progress value="13" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default TrackingSummary;
