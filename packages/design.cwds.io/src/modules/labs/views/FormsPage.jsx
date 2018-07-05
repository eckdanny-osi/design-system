import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { Card, Button, Row, Col } from '@cwds/components';
import { REQUIRED } from './validations';
import {
  // Form,
  // FormGroup,
  Label,
  // Input,
  // FormFeedback,
  FormText,
} from 'reactstrap';
import { Form, FormGroup, FormFeedback, Input } from '@cwds/components';
import cn from 'classnames';

const FormControl = ({ children }) => (
  <Col md={6}>
    <div className="form-control">{children}</div>
  </Col>
);

export class FormsExample extends Component {
  static INITIAL_VALUES = {
    firstName: 'Danny',
    lastName: '',
    isCool: false,
    favoriteColor: '',
    dob: '',
  };
  state = {
    formData: {
      firstName: '',
      lastName: '',
      isCool: false,
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
    if (REQUIRED(values.firstName)) return { firstName: 'Required!' };
    if ('Danny' === values.firstName) return { firstName: 'Noo! Not Danny' };

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
  renderDemo() {
    return (
      <Formik
        initialValues={{ name: 'jared' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={props => (
          <Fragment>
            <form onSubmit={props.handleSubmit} id="my-form">
              <Input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                is-valid={false}
                name="name"
              />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
            </form>
            <button type="submit" form="my-form">
              Submit
            </button>
          </Fragment>
        )}
      />
    );
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
        </div>
        <Formik
          initialValues={this.state.initialValues}
          onSubmit={this.handleSubmit}
          validate={this.validate}
          render={({ values, handleSubmit, handleChange, ...props }) => (
            <Fragment>
              <Card>
                <Card.Header>
                  <Card.Title>Add Friend</Card.Title>
                </Card.Header>
                <Card.Body>
                  <form id="my-form" onSubmit={handleSubmit}>
                    <Row>
                      <FormControl>
                        <FormGroup>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            type="text"
                            invalid={!!props.errors.firstName}
                            onChange={handleChange}
                            onBlur={props.handleBlur}
                            value={values.firstName}
                            name="firstName"
                            id="firstName"
                          />

                          {props.errors.firstName && (
                            <FormFeedback valid={false}>
                              {props.errors.firstName}
                            </FormFeedback>
                          )}
                        </FormGroup>
                      </FormControl>
                      <FormControl>
                        <FormGroup>
                          <Label for="exampleEmail">Valid input</Label>
                          <Input valid />
                          <FormFeedback valid>
                            Sweet! that name is available
                          </FormFeedback>
                          <FormText>
                            Example help text that remains unchanged.
                          </FormText>
                        </FormGroup>
                      </FormControl>
                      <FormControl>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          id="lastName"
                          type="text"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl>
                        <label htmlFor="isCool">Cool</label>
                        <input
                          id="isCool"
                          type="checkbox"
                          name="isCool"
                          value={values.isCool}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl>
                        <fieldset>
                          <legend>Favorite Color</legend>
                          <input
                            id="favoriteColor1"
                            type="radio"
                            value="yellow"
                            name="favoriteColor"
                            onChange={handleChange}
                          />
                          <label htmlFor="favoriteColor1">Yellow</label>
                          <input
                            id="favoriteColor2"
                            type="radio"
                            value="red"
                            name="favoriteColor"
                            onChange={handleChange}
                          />
                          <label htmlFor="favoriteColor2">Red</label>
                          <input
                            id="favoriteColor3"
                            type="radio"
                            value="blue"
                            name="favoriteColor"
                            onChange={handleChange}
                          />
                          <label htmlFor="favoriteColor3">Blue</label>
                        </fieldset>
                      </FormControl>
                      <FormControl>
                        <label htmlFor="dob">Birthdate</label>
                        <input
                          type="date"
                          value={values.dob}
                          id="dob"
                          name="dob"
                          onChange={handleChange}
                        />
                      </FormControl>
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
          )}
        />
      </div>
    );
  }
}

export default {
  name: 'Form Examples',
  component: FormsExample,
};
