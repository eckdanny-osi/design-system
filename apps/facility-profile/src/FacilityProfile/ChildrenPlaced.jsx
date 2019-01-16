import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  DataGrid
} from "@cwds/components";

const data = [
  {
    name: "John Doe",
    gender: "Male",
    dob: "8/25/2013 (6yrs)",
    dop: "1/12/2017 (3yrs)",
    socialWorker: "John Smith",
    countyOfOrigin: "San Joaquin"
  }
];

const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Gender", accessor: "gender" },
  { Header: "Date of Birth", accessor: "dob" },
  { Header: "Date of Placement", accessor: "dop" },
  { Header: "Child's Social Worker", accessor: "socialWorker" },
  { Header: "County of Origin", accessor: "countyOfOrigin" }
];

class ChildrenPlaced extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle id="children-placed">
            Children Currently Placed in Facility
          </CardTitle>
        </CardHeader>
        <CardBody className="pt-0">
          <DataGrid data={data} columns={columns} />
        </CardBody>
      </Card>
    );
  }
}

export default ChildrenPlaced;
