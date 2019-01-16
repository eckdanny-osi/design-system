import React, { Component } from "react";
import { Card, CardHeader, CardTitle, CardBody } from "@cwds/components";

class HomeInformation extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle id="home-information">Home Information</CardTitle>
        </CardHeader>
        <CardBody>HOME INFORMATION FORM HERE</CardBody>
      </Card>
    );
  }
}

export default HomeInformation;
