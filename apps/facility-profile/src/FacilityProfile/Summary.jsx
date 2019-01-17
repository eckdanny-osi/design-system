import React, { Component } from "react";
import { Formik } from "formik";
import pick from "lodash.pick";
import get from "lodash.get";
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
  Select,
  Row
} from "@cwds/components";

class Summary extends Component {
  state = {
    context: "view",
    initialValues: {
      name: "Cambell Family Home",
      id: "123456789a",
      type: "Resource Family home",
      licenseeName: "Cambell, Sara & Katie",
      status: "RFA Probationary",
      originalApplicationRecievedDate: "2019-01-14",
      districtOffice: "Sacramento", // assignedOversightAgency?
      // (ageRange) <== // TODO: this is not on the facility model? 8 - 16
      capacity: 6,
      capacityLastChanged: "2019-01-14",
      adjustedCapacity: undefined,
      availableBeds: 6
    }
  };

  schema = [
    {
      id: "summary__name",
      name: "name",
      label: "Facility / Home Name",
      type: "text",
      required: true

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
      type: "string",
      required: true
    },
    {
      id: "summary__type",
      name: "type",
      label: "Facility Home Type",
      type: "string"
    },
    {
      id: "summary_licenseeName",
      name: "licenseeName",
      label: "Name of Licensee / Parents",
      type: "string"
    },
    {
      id: "summary__status",
      name: "status",
      label: "Status"
      // type: "string"
    },
    {
      id: "summary_originalApplicationRecievedDate",
      name: "originalApplicationRecievedDate",
      label: "Application Recieved Date",
      type: "date"
    },
    {
      id: "summary__districtOffice",
      name: "districtOffice",
      label: "Assigned Oversight Agency",
      type: "string"
    },
    // {
    //   id: "summary__ageRange",
    //   name: "ageRange",
    //   label: "Age Range",
    //   type: "string" // SHOULDN"T THIS BE CHECKBOX BANK OR SELECT??
    // },
    {
      id: "summary__capacityLastChanged",
      name: "capacityLastChanged",
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
  ];

  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate(values) {
    const errors = {};

    // Required fields
    this.schema.filter(({ required }) => !!required).forEach(fieldSpec => {
      if (!get(values, fieldSpec.name)) {
        errors[fieldSpec.name] = "Required!";
      }
    });

    return errors;
  }

  handleSubmit(values) {
    this.setState({ context: "view", initialValues: values });
  }

  renderEditView() {
    return (
      <Formik
        initialValues={this.state.initialValues}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        render={props => {
          return (
            <form onSubmit={props.handleSubmit} id="summary-form">
              <Card>
                <CardHeader>
                  <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    {this.schema.map(({ id, name, label, type }) => (
                      <Col sm="6" md="4" className="p-2" key={id}>
                        <FormGroup>
                          <Label>{label}</Label>
                          <Input
                            id={id}
                            type={type}
                            value={props.values[name]}
                            invalid={
                              props.errors[name] &&
                              props.touched[name] &&
                              !!props.errors[name]
                            }
                            name={name}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                          />
                          <FormFeedback>{props.errors[name]}</FormFeedback>
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
              <Label>Facility / Home Name</Label>
              <div>
                <a href="/">Cambell Family Home</a>
              </div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <Label>License Number / Family ID</Label>
              <div>{this.state.initialValues.districtOffice}</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <Label>Facility Home Type</Label>
              <div>{this.state.initialValues.type}</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <Label>Name of Licensee / Parents</Label>
              <div>{this.state.initialValues.licenseeName}</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <Label>Status</Label>
              <div>{this.state.initialValues.status}</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <Label>Application Recieved Date</Label>
              <div>
                {this.state.initialValues.originalApplicationRecievedDate}
              </div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <Label>Assigned Oversight Agency</Label>
              <div>{this.state.initialValues.districtOffice}</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <Label>Capacity</Label>
              <div>{this.state.initialValues.capacity}</div>
            </Col>
            <Col sm="6" md="4" className="p-2">
              <Label>Capacity Last Changed</Label>
              <div>{this.state.initialValues.capacityLastChanged}</div>
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

//
//
//

function getFacilityTypes() {
  return [
    {
      value: "Adoption Agency",
      id: 1
    },
    {
      value: "Community Treatment Facility",
      id: 11
    },
    {
      value: "County Shelter/Receiving Home(Non EA/AFDC)",
      id: 16
    },
    {
      value: "Court Specified Home",
      id: 17
    },
    {
      value: "Crisis Nursery",
      id: 7
    },
    {
      value: "Foster Fam Agency Cert Resource Fam Home",
      id: 23
    },
    {
      value: "Foster Family Agency",
      id: 3
    },
    {
      value: "Foster Family Agency Certified Home",
      id: 22
    },
    {
      value: "Foster Family AG-Sub",
      id: 4
    },
    {
      value: "Foster Family Home",
      id: 6
    },
    {
      value: "GH-Enhanced Behavioral Supports Home",
      id: 12
    },
    {
      value: "Group Home",
      id: 13
    },
    {
      value: "Guardian Home",
      id: 19
    },
    {
      value: "Out Of State GH",
      id: 14
    },
    {
      value: "Relative/NREFM Home",
      id: 20
    },
    {
      value: "Resource Family Home",
      id: 2
    },
    {
      value: "Runaway And Homeless Youth Shelter-GH",
      id: 24
    },
    {
      value: "Short Term Residential Therapeutic Program",
      id: 15
    },
    {
      value: "Small Family Home",
      id: 5
    },
    {
      value: "Supervised Independent Living Placement",
      id: 21
    },
    {
      value: "Temporary Shelter Care Facility",
      id: 8
    },
    {
      value: "Transitional Housing Placement Program",
      id: 10
    },
    {
      value: "Transitional Shelter Care",
      id: 9
    },
    {
      value: "Tribe Specified Home",
      id: 18
    }
  ];
}
