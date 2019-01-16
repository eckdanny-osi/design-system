import React, { Component } from "react";
import { Card, CardHeader, CardTitle, CardBody } from "@cwds/components";

class ContactsSummary extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle id="contacts-summary">Contacts Summary</CardTitle>
        </CardHeader>
        <CardBody>DataGrid Here</CardBody>
      </Card>
    );
  }
}

export default ContactsSummary;
