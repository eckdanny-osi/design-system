import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col
} from "@cwds/components";

class TrackingSummary extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle id="tracking-summary">Tracking Summary</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col>Aggregate</Col>
            <Col>PROGRESS_BAR 42%</Col>
          </Row>
          <hr />
          <Row>
            <Col>Facility Tracklist</Col>
            <Col>PROGRESS_BAR 62%</Col>
          </Row>
          <Row>
            <Col>John Doe</Col>
            <Col>PROGRESS_BAR 25%</Col>
          </Row>
          <Row>
            <Col>Jane Doe</Col>
            <Col>PROGRESS_BAR 13%</Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default TrackingSummary;
