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
    name: "Person Name",
    role: "Administrator",
    age: "03/01/1968 (50 yrs)",
    status: "Cleared",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Biological Child",
    age: "(~12 yrs)",
    status: "Pending",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Family Member",
    age: "(~26 yrs)",
    status: "Pending",
    dates: "start-end"
  },
  {
    name: "Person Name",
    role: "Applicant",
    age: "03/01/1968 (50 yrs)",
    status: "Pending",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Employee",
    age: "03/01/1968 (50 yrs)",
    status: "Cleared",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Role",
    age: "",
    status: "Pending",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Role",
    age: "",
    status: "Pending",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Role",
    age: "",
    status: "Pending",
    dates: "01/01/2015 - 02/25/2016"
  },
  {
    name: "Person Name",
    role: "Administrator",
    age: "03/01/1968 (50 yrs)",
    status: "Cleared",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Biological Child",
    age: "(~12 yrs)",
    status: "Pending",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Family Member",
    age: "(~26 yrs)",
    status: "Pending",
    dates: "start-end"
  },
  {
    name: "Person Name",
    role: "Applicant",
    age: "03/01/1968 (50 yrs)",
    status: "Pending",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Employee",
    age: "03/01/1968 (50 yrs)",
    status: "Cleared",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Role",
    age: "",
    status: "Pending",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Role",
    age: "",
    status: "Pending",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Role",
    age: "",
    status: "Pending",
    dates: "01/01/2015 - 02/25/2016"
  },
  {
    name: "Person Name",
    role: "Administrator",
    age: "03/01/1968 (50 yrs)",
    status: "Cleared",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Biological Child",
    age: "(~12 yrs)",
    status: "Pending",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Family Member",
    age: "(~26 yrs)",
    status: "Pending",
    dates: "start-end"
  },
  {
    name: "Person Name",
    role: "Applicant",
    age: "03/01/1968 (50 yrs)",
    status: "Pending",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Employee",
    age: "03/01/1968 (50 yrs)",
    status: "Cleared",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Role",
    age: "",
    status: "Pending",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Role",
    age: "",
    status: "Pending",
    dates: "01/01/2015 - present"
  },
  {
    name: "Person Name",
    role: "Role",
    age: "",
    status: "Pending",
    dates: "01/01/2015 - 02/25/2016"
  }
];

const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Role", accessor: "role" },
  { Header: "Age", accessor: "age" },
  { Header: "Background", accessor: "status" },
  { Header: "Dates", accessor: "dates" }
];

class AssociatedPeople extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle id="associated-people">Associated People</CardTitle>
        </CardHeader>
        <CardBody className="pt-0">
          <DataGrid data={data} columns={columns} />
        </CardBody>
      </Card>
    );
  }
}

export default AssociatedPeople;
