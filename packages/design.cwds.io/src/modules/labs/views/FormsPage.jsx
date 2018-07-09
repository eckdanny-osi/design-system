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
import CheckboxBank from './CheckboxBank';
import { RadioGroup } from '../components/MyRadioGroup';
import FormsPageTesting from './FormsPageTesting';

const FLAVOURS = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Vanilla', value: 'vanilla' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Caramel', value: 'caramel' },
  { label: 'Cookies and Cream', value: 'cookiescream' },
  { label: 'Peppermint', value: 'peppermint' },
];

const FRAMEWORKS = [
  { value: 'angular', label: 'Angular' },
  { value: 'elm', label: 'Elm' },
  { value: 'ember', label: 'Ember' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
];

const FormCardGrid = ({ children }) => <Col md={6} children={children} />;

class SelectExample extends Component {
  handleChange = option => {
    if (Array.isArray(option)) {
      this.props.onChange(
        this.props.name,
        null === option ? [] : option.map(d => d.value)
      );
    } else {
      this.props.onChange(this.props.name, null === option ? '' : option.value);
    }
  };
  handleBlur = () => {
    this.props.onBlur(this.props.name, true);
  };
  render() {
    return (
      <Fragment>
        <Select
          name="framework"
          value={this.props.value}
          multi={this.props.multi}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          options={this.props.options}
        />
      </Fragment>
    );
  }
}

const ASSOCIATIONS = [
  { value: 'isFriend', label: 'Friend' },
  { value: 'isCoWorker', label: 'CoWorker' },
  { value: 'isCarPool', label: 'Car Pool' },
  { value: 'isBarBuddy', label: 'Bar Buddy' },
];

// const getAssocitionsInitialValues = () =>
//   ASSOCIATIONS.reduce(
//     (acc, [key, label, initialValue]) => ({
//       ...acc,
//       [key]: initialValue || false,
//     }),
//     {}
//   );

export class FormsExample extends Component {
  static INITIAL_VALUES = {
    firstName: '',
    lastName: '',
    isCool: false,
    isCoolAgain: null,
    associations: [],
    flavors: [],
    framework: '',
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
    if (
      values.associations.includes('isBarBuddy') &&
      values.associations.includes('isCarPool')
    ) {
      errors.associations = 'Dont drink and drive!';
    }

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
          <FormsPageTesting />
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
            const mkChangeHandler = e => {
              props.setFieldTouched(e.target.name, true, false);
              return handleChange(e);
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
                              onChange={mkChangeHandler}
                              onBlur={props.handleBlur}
                              value={values.firstName}
                              name="firstName"
                              id="firstName"
                            />
                            {props.touched.firstName &&
                              props.errors.firstName && (
                                <FormFeedback>
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
                              onChange={mkChangeHandler}
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
                          <FormGroup>
                            <Label htmlFor="dob">Birthdate</Label>
                            <Input
                              type="date"
                              value={values.dob}
                              id="dob"
                              name="dob"
                              onChange={handleChange}
                            />
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
                          <SelectExample
                            error={props.errors.associations}
                            name="associations"
                            onBlur={props.setFieldTouched}
                            onChange={props.setFieldValue}
                            options={ASSOCIATIONS}
                            touched={props.touched.associations}
                            value={values.associations}
                            multi={true}
                          />
                        </FormCardGrid>
                        <FormCardGrid>
                          <Label>Association(s) (again)</Label>
                          <CheckboxBank
                            error={props.errors.associations}
                            name="associations"
                            onChange={props.setFieldValue}
                            options={ASSOCIATIONS}
                            touched={props.touched.associations}
                            value={values.associations}
                          />
                        </FormCardGrid>
                        <FormCardGrid>
                          <Label>More Coolness*</Label>
                          <FormGroup check className="ml-2">
                            <Input
                              id="isCoolAgain1"
                              type="radio"
                              value={true}
                              name="isCoolAgain"
                              onChange={handleChange}
                            />
                            <Label htmlFor="isCoolAgain1">Yep</Label>
                          </FormGroup>
                          <FormGroup check className="ml-2">
                            <Input
                              id="isCoolAgain2"
                              type="radio"
                              value={false}
                              name="isCoolAgain"
                              onChange={handleChange}
                            />
                            <Label htmlFor="isCoolAgain2">Nope</Label>
                          </FormGroup>
                          {/* <label htmlFor="favoriteColor3">Blue</label> */}
                          {/* </fieldset> */}
                        </FormCardGrid>
                        <FormCardGrid>
                          <Label>Favorite Color</Label>
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
                          <Label>Favorite Framework</Label>
                          <SelectExample
                            value={values.framework}
                            onChange={props.setFieldValue}
                            onBlur={_ => {}}
                            options={FRAMEWORKS}
                            error={props.errors.framework}
                            touched={props.touched.framework}
                            name="framework"
                          />
                        </FormCardGrid>
                        <FormCardGrid>
                          <Label>Favorite Framework*</Label>
                          <RadioGroup
                            value={values.framework}
                            name="framework"
                            // onChange={e => {
                            //   props.setFieldValue(
                            //     'framework',
                            //     e.target.value,
                            //     false
                            //   );
                            //   handleChange(e);
                            // }}
                            onChange={e => {
                              props.setFieldValue(
                                e.target.name,
                                e.target.value,
                                false
                              );
                              handleChange(e);
                            }}
                            options={FRAMEWORKS}
                            renderOption={props => {
                              return (
                                <FormGroup
                                  check
                                  className="ml-2"
                                  key={props.option.value}
                                >
                                  <Input
                                    id={props.option.value}
                                    type="radio"
                                    name={props.name}
                                    checked={props.value === props.option.value}
                                    value={props.option.value}
                                    onChange={props.onChange}
                                  />
                                  <Label htmlFor={props.option.value}>
                                    {props.option.label}
                                  </Label>
                                </FormGroup>
                              );
                            }}
                          />
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
