import React, { Component } from "react";
import { Card, CardHeader, CardTitle, CardBody } from "@cwds/components";

class ChildrenPlaced extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle id="children-placed">
            Children Currently Placed in Facility
          </CardTitle>
        </CardHeader>
        <CardBody>DataGrid Here</CardBody>
      </Card>
    );
  }
}

export default ChildrenPlaced;
