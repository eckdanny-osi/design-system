import React, { Fragment } from 'react';
import { Formik } from 'formik';
import {
  Button,
  Card,
  Col,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from '@cwds/components';
import RadioGroup from '../../components/RadioGroup';
import CheckboxBank from '../../components/CheckboxBank';
import { REQUIRED } from './validations';

const FRAMEWORKS = [
  { value: 'angular', label: 'Angular' },
  { value: 'elm', label: 'Elm' },
  { value: 'ember', label: 'Ember' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
];

const ASSOCIATIONS = [
  { value: 'isFriend', label: 'Friend' },
  { value: 'isCoWorker', label: 'CoWorker' },
  { value: 'isCarPool', label: 'Car Pool' },
  { value: 'isBarBuddy', label: 'Bar Buddy' },
];

const validate = values => {
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
};

export default () => (
  <Fragment>
    <h4>Appropriate Use Cases of FormElements</h4>
    <p>alsdfjasdf</p>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        isCool: false,
        isCoolAgain: null,
        associations: [],
        flavors: [],
        framework: '',
        favoriteColor: '',
        dob: '',
      }}
      onSubmit={() => {}}
      validate={validate}
      render={({ values, handleSubmit, handleChange, ...props }) => {
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
                    <Col md={6}>
                      <FormGroup>
                        <Label htmlFor="firstName">First Name*</Label>
                        <Input
                          type="text"
                          invalid={
                            props.touched.firstName && !!props.errors.firstName
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
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label htmlFor="lastName">Last Name*</Label>
                        <Input
                          type="text"
                          invalid={
                            props.touched.lastName && !!props.errors.lastName
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
                    </Col>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
                      <Label>Association(s)</Label>
                      {/* <SelectExample
                          error={props.errors.associations}
                          name="associations"
                          onBlur={props.setFieldTouched}
                          onChange={props.setFieldValue}
                          options={ASSOCIATIONS}
                          touched={props.touched.associations}
                          value={values.associations}
                          multi={true}
                        /> */}
                    </Col>
                    <Col md={6}>
                      <Label>Association(s) (again)</Label>
                      <CheckboxBank
                        error={props.errors.associations}
                        name="associations"
                        onChange={props.setFieldValue}
                        options={ASSOCIATIONS}
                        touched={props.touched.associations}
                        value={values.associations}
                      />
                    </Col>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
                      <Label>Favorite Framework</Label>
                      {/* <SelectExample
                          value={values.framework}
                          onChange={props.setFieldValue}
                          onBlur={_ => {}}
                          options={FRAMEWORKS}
                          error={props.errors.framework}
                          touched={props.touched.framework}
                          name="framework"
                        /> */}
                    </Col>
                    <Col md={6}>
                      <RadioGroup
                        value={values.framework}
                        legend="Favorite Framework"
                        required
                        name="framework"
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
                    </Col>
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
  </Fragment>
);
