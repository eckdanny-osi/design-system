import React, { Component } from "react";
import { Card, CardHeader, CardTitle, CardBody } from "@cwds/components";

class ComplaintHistory extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle id="complaint-history">Complaint History</CardTitle>
        </CardHeader>
        <CardBody>DataGrid here</CardBody>
      </Card>
    );
  }
}

export default ComplaintHistory;
