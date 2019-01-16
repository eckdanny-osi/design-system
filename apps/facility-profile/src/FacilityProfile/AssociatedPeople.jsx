import React, { Component } from "react";
import { Card, CardHeader, CardTitle, CardBody } from "@cwds/components";

class AssociatedPeople extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle id="associated-people">Associated People</CardTitle>
        </CardHeader>
        <CardBody>DataGrid Here</CardBody>
      </Card>
    );
  }
}

export default AssociatedPeople;
