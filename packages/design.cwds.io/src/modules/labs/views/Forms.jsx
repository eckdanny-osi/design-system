import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from 'reactstrap';
import { Card, Button, Row, Col } from '@cwds/components';

const FormControl = ({ children }) => (
  <Col md={6}>
    <div className="form-control">{children}</div>
  </Col>
);

export class FormsExample extends Component {
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
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e) {
    const { target } = e;
    const name = e.target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  }
  handleSubmit(e) {
    e.preventDefault();
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
        <Card>
          <Card.Header>
            <Card.Title>Add Friend</Card.Title>
          </Card.Header>
          <Card.Body>
            <form id="my-form" onSubmit={this.handleSubmit}>
              <Row>
                <FormControl>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={this.handleOnChange}
                  />
                </FormControl>
                <FormControl>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={this.handleOnChange}
                  />
                </FormControl>
                <FormControl>
                  <label htmlFor="isCool">Cool</label>
                  <input
                    id="isCool"
                    type="checkbox"
                    name="isCool"
                    value={formData.isCool}
                    onChange={this.handleOnChange}
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
                      onChange={this.handleOnChange}
                    />
                    <label htmlFor="favoriteColor1">Yellow</label>
                    <input
                      id="favoriteColor2"
                      type="radio"
                      value="red"
                      name="favoriteColor"
                      onChange={this.handleOnChange}
                    />
                    <label htmlFor="favoriteColor2">Red</label>
                    <input
                      id="favoriteColor3"
                      type="radio"
                      value="blue"
                      name="favoriteColor"
                      onChange={this.handleOnChange}
                    />
                    <label htmlFor="favoriteColor3">Blue</label>
                  </fieldset>
                </FormControl>
                <FormControl>
                  <label htmlFor="dob">Birthdate</label>
                  <input
                    type="date"
                    value={formData.dob}
                    id="dob"
                    name="dob"
                    onChange={this.handleOnChange}
                  />
                </FormControl>
              </Row>
            </form>
          </Card.Body>
          <Card.Footer>
            <Button type="submit" form="my-form" value="Submit" color="primary">
              Submit
            </Button>
          </Card.Footer>
        </Card>
        <pre>{JSON.stringify(this.state.formData, null, 2)}</pre>
      </div>
    );
  }
}

export default {
  name: 'Form Examples',
  component: FormsExample,
};
