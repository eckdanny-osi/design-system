import React, { Component, Fragment } from 'react';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';
import { Formik, Field, FieldArray } from 'formik';
import { Card, Button, Row, Col } from '@cwds/components';
import { REQUIRED } from './validations';
import { FormText } from 'reactstrap';
import {
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Label,
  Select,
} from '@cwds/components';
import cn from 'classnames';
import FormsSupplement from './FormsSupplement';
import MultiSelectExample from './FormsMultiSelectExample';

const FormCardGrid = ({ children }) => <Col md={6} children={children} />;

class SelectExample extends Component {
  state = { selectedOption: '' };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    }
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        name="form-field-name"
        value={selectedOption}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />
    );
  }
}

const ASSOCIATIONS = [
  ['isFriend', 'Friend'],
  ['isCoWorker', 'CoWorker', true],
  ['isCarPool', 'Car Pool'],
  ['isBarBuddy', 'Bar Buddy'],
];

const getAssocitionsInitialValues = () =>
  ASSOCIATIONS.reduce(
    (acc, [key, label, initialValue]) => ({
      ...acc,
      [key]: initialValue || false,
    }),
    {}
  );

export class FormsExample extends Component {
  static INITIAL_VALUES = {
    firstName: '',
    lastName: '',
    isCool: false,
    associations: getAssocitionsInitialValues(),
    favoriteColor: '',
    dob: '',
  };
  state = {
    formData: {
      firstName: '',
      lastName: '',
      isCool: false,
      associations: {},
      favoriteColor: '',
      dob: '',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      initialValues: { ...FormsExample.INITIAL_VALUES, ...props.initialValues },
    };
    // this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate(values) {
    console.log('validation...');
    const errors = {};
    if (REQUIRED(values.firstName)) errors.firstName = 'Required!';
    if ('Danny' === values.firstName) errors.firstName = 'Noo! Not Danny';
    if (REQUIRED(values.lastName)) errors.lastName = 'Required!';

    return errors;
  }
  // handleOnChange(e) {
  //   const { target } = e;
  //   const name = e.target.name;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     formData: {
  //       ...this.state.formData,
  //       [name]: value,
  //     },
  //   });
  // }
  // handleSubmit(e) {
  //   e.preventDefault();
  // }
  handleSubmit(values, actions) {
    console.log(values);
    console.log(actions);
    setTimeout(() => actions.resetForm(values), 1000);
  }
  render() {
    const { formData } = this.state;
    return (
      <div>
        <div>
          <h3>Forms</h3>
          <p>
            Demonstrate the <em>Look before you Leap</em> principle!
          </p>
          <p>
            Talk about <em>Resource Updates</em> vs <em>Set Membership</em>
          </p>
          <FormsSupplement />
        </div>
        <Formik
          initialValues={this.state.initialValues}
          onSubmit={this.handleSubmit}
          validate={this.validate}
          render={({ values, handleSubmit, handleChange, ...props }) => {
            // Submitted PR to fix https://github.com/jaredpalmer/formik/pull/737
            const mkChangeHandler = field => (...args) => {
              props.setFieldTouched(field);
              return handleChange(...args);
            };
            return (
              <Fragment>
                <Card>
                  <Card.Header>
                    <Card.Title>Add Friend</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <form id="my-form" onSubmit={handleSubmit}>
                      <Row>
                        <FormCardGrid>
                          <FormGroup>
                            <Label htmlFor="firstName">First Name*</Label>
                            <Input
                              type="text"
                              invalid={
                                props.touched.firstName &&
                                !!props.errors.firstName
                              }
                              onChange={mkChangeHandler('firstName')}
                              onBlur={props.handleBlur}
                              value={values.firstName}
                              name="firstName"
                              id="firstName"
                            />
                            {props.touched.firstName &&
                              props.errors.firstName && (
                                <FormFeedback valid={false}>
                                  {props.errors.firstName}
                                </FormFeedback>
                              )}
                          </FormGroup>
                        </FormCardGrid>
                        <FormCardGrid>
                          <FormGroup>
                            <Label htmlFor="lastName">Last Name*</Label>
                            <Input
                              type="text"
                              invalid={
                                props.touched.lastName &&
                                !!props.errors.lastName
                              }
                              onChange={mkChangeHandler('lastName')}
                              onBlur={props.handleBlur}
                              value={values.lastName}
                              name="lastName"
                              id="lastName"
                            />
                            {props.touched.lastName &&
                              props.errors.lastName && (
                                <FormFeedback valid={false}>
                                  {props.errors.lastName}
                                </FormFeedback>
                              )}
                          </FormGroup>
                        </FormCardGrid>
                        <FormCardGrid>
                          <Label>Coolness</Label>
                          <FormGroup check className="ml-2">
                            <Input
                              id="isCool"
                              type="checkbox"
                              name="isCool"
                              value={values.isCool}
                              onChange={handleChange}
                            />
                            <Label htmlFor="isCool">Is a cool peson</Label>
                          </FormGroup>
                        </FormCardGrid>
                        <FormCardGrid>
                          <Label>Association(s)</Label>
                          <FieldArray
                            name="associations"
                            render={({
                              move,
                              swap,
                              push,
                              insert,
                              unshift,
                              pop,
                            }) => {
                              return ASSOCIATIONS.map(([key, label]) => {
                                // console.log(`values.associations[${key}]`);
                                // debugger;
                                return (
                                  <FormGroup key={key} check className="ml-2">
                                    <Input
                                      id={key}
                                      type="checkbox"
                                      name={`associations[${key}]`}
                                      value={`values.associations[${key}]`}
                                      checked={values.associations[key]}
                                      onChange={handleChange}
                                    />
                                    <span>{values.associations[key]}</span>
                                    <Label htmlFor={key}>{label}</Label>
                                  </FormGroup>
                                );
                              });
                            }}
                          />
                        </FormCardGrid>
                        <FormCardGrid>
                          {/* <fieldset> */}
                          {/* <legend>Favorite Color</legend> */}
                          <Label>Something</Label>
                          <FormGroup check className="ml-2">
                            <Input
                              id="favoriteColor1"
                              type="radio"
                              value="yellow"
                              name="favoriteColor"
                              onChange={handleChange}
                            />
                            <Label htmlFor="favoriteColor1">Yellow</Label>
                          </FormGroup>
                          <FormGroup check className="ml-2">
                            <Input
                              id="favoriteColor2"
                              type="radio"
                              value="red"
                              name="favoriteColor"
                              onChange={handleChange}
                            />
                            <Label htmlFor="favoriteColor2">Red</Label>
                          </FormGroup>
                          <FormGroup check className="ml-2">
                            <Input
                              id="favoriteColor3"
                              type="radio"
                              value="blue"
                              name="favoriteColor"
                              onChange={handleChange}
                            />
                            <Label htmlFor="favoriteColor3">Blue</Label>
                          </FormGroup>
                          {/* <label htmlFor="favoriteColor3">Blue</label> */}
                          {/* </fieldset> */}
                        </FormCardGrid>
                        <FormCardGrid>
                          <Label htmlFor="dob">Birthdate</Label>
                          <Input
                            type="date"
                            value={values.dob}
                            id="dob"
                            name="dob"
                            onChange={handleChange}
                          />
                        </FormCardGrid>
                        <FormCardGrid>
                          <Label>Select Example</Label>
                          <SelectExample />
                        </FormCardGrid>
                        <FormCardGrid>
                          <Label>Combobox Example</Label>
                          <MultiSelectExample />
                        </FormCardGrid>
                      </Row>
                    </form>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      type="submit"
                      form="my-form"
                      color="primary"
                      disabled={
                        !(props.dirty && props.isValid) || props.isSubmitting
                      }
                    >
                      {props.isSubmitting ? 'Saving...' : 'Save'}
                    </Button>
                  </Card.Footer>
                </Card>
                <pre>{JSON.stringify({ values, props }, null, 2)}</pre>
              </Fragment>
            );
          }}
        />
      </div>
    );
  }
}

export default {
  name: 'Form Examples',
  component: FormsExample,
};
