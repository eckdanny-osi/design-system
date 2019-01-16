import React, { Component } from "react";
import { Formik } from "formik";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardFooter,
  Col,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Row
} from "@cwds/components";

const data = {
  facilityName: "",
  id: "",
  type: "",
  licenseeName: ""
};

const formStructure = [
  {
    id: "summary__name",
    name: "name",
    label: "Facility / Home Name",
    type: "text"
    // editable: "//DERIVED VALUE"
    // disabled: "",
    // value: '',
    // initialVlaue: "",
    // helpText: '',
    // error: () => ()
  },
  {
    id: "summary__id",
    name: "id",
    label: "License Number / Family ID",
    type: "string"
  },
  {
    id: "summary__type",
    name: "type",
    label: "Facility Home Type",
    type: "string"
  },
  {
    id: "summary_licensee",
    name: "licensee",
    label: "Name of Licensee / Parents",
    type: "string"
  },
  {
    id: "summary__status",
    name: "Status",
    label: "Status",
    type: "string"
  },
  {
    id: "summary_applicationReceiveDate",
    name: "applicationReceiveDate",
    label: "Application Recieved Date",
    type: "date"
  },
  {
    id: "summary__assignedOversightAgency",
    name: "assignedOversightAgency",
    label: "Assigned Oversight Agency",
    type: "string"
  },
  {
    id: "summary__ageRange",
    name: "ageRange",
    label: "Age Range",
    type: "string" // SHOULDN"T THIS BE CHECKBOX BANK OR SELECT??
  },
  {
    id: "summary__capacityLastChangedDate",
    name: "capacityLastChangedDate",
    label: "Date Capacity Last Changed",
    type: "date"
  },
  {
    id: "summary__capacity",
    name: "capacity",
    label: "Capacity",
    type: "number"
  },
  {
    id: "summary__adjustedCapacity",
    name: "adjustedCapacity",
    label: "Adjusted Capacity",
    type: "number"
  },
  {
    id: "summary__availableBeds",
    name: "availableBeds",
    label: "Available Beds",
    type: "number"
  }
  // Facility / Home Name	Text (abc)
  // License Number / Family ID	Text (abc123)
  // Facility Home Type	Enum (single)
  // Name of Licensee / Parents	Text (abc)
  // Status	Enum (single)
  // Application Recieved Date	Date
  // Assigned Oversight Agency	Enum (single)
  // Capacity	Number (123)
  // Date Capacity Last Changed	Date
  // Age Range	Number (range)
];

class Summary extends Component {
  state = {
    context: "view"
  };

  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
  }

  validate() {}

  renderEditView() {
    return (
      <Formik
        onSubmit={values => alert("hi")}
        initialValues={{}}
        validate={this.validate}
        render={props => {
          return (
            <form onSubmit={props.handleSubmit} id="summary-form">
              <Card>
                <CardHeader>
                  <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    {/* <Col sm="6" md="4" className="p-2">
                      <FormGroup>
                        <Label>Facility / Home Name</Label>
                        <Input
                          id="facility-summary__name"
                          type="text"
                          value={props.values.date}
                          invalid={!!props.errors.date}
                          name="date"
                          onChange={props.handleChange}
                        />
                        <FormFeedback>{props.errors.date}</FormFeedback>
                      </FormGroup>
                    </Col> */}
                    {formStructure.map(({ id, name, label, type }) => (
                      <Col sm="6" md="4" className="p-2">
                        <FormGroup>
                          <Label>{label}</Label>
                          <Input
                            id={id}
                            type={type}
                            value={props.values.date}
                            invalid={!!props.errors.date}
                            name={name}
                            onChange={props.handleChange}
                          />
                          <FormFeedback>{props.errors.date}</FormFeedback>
                        </FormGroup>
                      </Col>
                    ))}
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button onClick={() => this.setState({ context: "view" })}>
                    Cancel
                  </Button>{" "}
                  <Button color="primary">Save</Button>
                </CardFooter>
              </Card>
            </form>
          );
        }}
      />
    );
  }

  renderReadView() {
    return (
      <Card>
        <CardHeader>
          <Row>
            <Col>
              <CardTitle id="summary">Summary</CardTitle>
            </Col>
            <Col className="text-right">
              <Button onClick={() => this.setState({ context: "edit" })}>
                Edit
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="6" md="4" className="p-2">
              <div>Facility / Home Name</div>
              <div>
                <a href="/">Cambell Family Home</a>
              </div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <div>License Number / Family ID</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <div>Facility Home Type</div>
              <div>SOME VALUE</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <div>Name of Licensee / Parents</div>
              <div>SOME VALUE</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <div>Status</div>
              <div>SOME VALUE</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <div>Application Recieved Date</div>
              <div>SOME VALUE</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <div>Assigned Oversight Agency</div>
              <div>SOME VALUE</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <div>Capacity</div>
              <div>6</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <div>Capacity Last Changed</div>
              <div>12/12/2018</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <div>Age Range</div>
              <div>8 - 16</div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }

  render() {
    switch (this.state.context) {
      case "view":
        return this.renderReadView();
      case "edit":
        return this.renderEditView();
      default:
        break;
    }
    return "OOOOPS";
  }
}

export default Summary;
