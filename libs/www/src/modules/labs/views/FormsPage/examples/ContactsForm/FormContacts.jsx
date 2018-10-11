import React, { Fragment } from 'react';
import { Formik } from 'formik';
import Button from '@cwds/components/dist/Button';
import Card from '@cwds/components/dist/Cards';
import Collapse from '@cwds/components/dist/Collapse';
import FormGroup from '@cwds/components/dist/FormGroup';
import { Row, Col } from '@cwds/components/dist/Grid';
import Input from '@cwds/components/dist/Input';
import Label from '@cwds/components/dist/Label';
import Select from '@cwds/components/dist/Select';
import Icon from '@cwds/components/dist/Icon';
import FormFeedback from '@cwds/components/dist/FormFeedback';
import RadioGroup from '@cwds/components/dist/RadioGroup';
import {
  CLASSIFICATION_OPTIONS,
  CONCTACT_METHOD_OPTIONS,
  CONTACT_METHOD,
  LOCATION_OPTIONS,
  NOTICE_OPTIONS,
  COLLATERAL_VISIT_OPTIONS,
  VISIT_TYPE_OPTIONS,
} from './contactsFormEnums';
import initialValues from './contactsFormInitialValues';
import validate from './contactsFormValidate';

export default () => (
  <Formik
    onSubmit={values => alert(JSON.stringify(values, null, 2))}
    initialValues={initialValues}
    validate={validate}
    render={props => {
      return (
        <Card>
          <Card.Header>
            <Card.Title>Create New Contact</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>
              Lorem ipsum dolor sit amet, consealksdjf lkj asdlfkj alsdkfj
              lasjkdf lkajsdflkja sldkfj asldfjasdfj alsdf jk
            </p>
            <p>
              <strong>Note</strong>: All fields are required unless labeled
              "Optional".
            </p>
            <form onSubmit={props.handleSubmit} id="contact-form">
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label htmlFor="contact__date">Date*</Label>
                    <Input
                      id="contact__date"
                      type="date"
                      value={props.values.date}
                      invalid={!!props.errors.date}
                      name="date"
                      onChange={props.handleChange}
                    />
                    <FormFeedback>{props.errors.date}</FormFeedback>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <RadioGroup
                      name="classification"
                      legend="Classification"
                      value={props.values.classification}
                      options={CLASSIFICATION_OPTIONS}
                      onChange={props.handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label htmlFor="contact__methodOfContact">
                      Method of Contact*
                    </Label>
                    {/* @TODO: How to get cssModule className in here? */}
                    <Select
                      id="contact__methodOfContact"
                      name="methodOfContact"
                      options={CONCTACT_METHOD_OPTIONS}
                      onChange={option => {
                        props.setFieldValue(
                          'methodOfContact',
                          option ? option.value : ''
                        );
                      }}
                      onBlur={_ => props.setFieldTouched('methodOfContact')}
                      value={props.values.methodOfContact}
                    />
                    <FormFeedback>{props.errors.methodOfContact}</FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
              <Collapse
                style={{ width: '100%' }}
                isOpen={
                  CONTACT_METHOD.IN_PERSON === props.values.methodOfContact
                }
              >
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="contact__inPersonDetail.location">
                        Location
                      </Label>
                      <Select
                        id="contact__inPersonDetail.location"
                        name="inPersonDetail.location"
                        value={props.values.inPersonDetail.location}
                        options={LOCATION_OPTIONS}
                        onChange={option => {
                          props.setFieldValue(
                            'inPersonDetail.location',
                            option ? option.value : ''
                          );
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <RadioGroup
                        legend="Notice"
                        name="inPersonDetail.notice"
                        value={props.values.inPersonDetail.notice}
                        options={NOTICE_OPTIONS}
                        onChange={props.handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <RadioGroup
                            name="inPersonDetail.collateralVisit"
                            legend="Collateral Visit?"
                            value={props.values.inPersonDetail.collateralVisit}
                            options={COLLATERAL_VISIT_OPTIONS}
                            onChange={props.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Collapse
                        style={{ width: '100%' }}
                        isOpen={
                          'yes' === props.values.inPersonDetail.collateralVisit
                        }
                      >
                        <Col md={12}>
                          <Row>
                            <Col md={6}>
                              <FormGroup>
                                <Label htmlFor="startTime">Start Time</Label>
                                <Input
                                  type="time"
                                  value={
                                    props.values.inPersonDetail
                                      .collateralVisitDetail.startTime
                                  }
                                  id="startTime"
                                  name="inPersonDetail.collateralVisitDetail.startTime"
                                  onChange={props.handleChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col md={6}>
                              <FormGroup>
                                <Label htmlFor="endTime">End Time</Label>
                                <Input
                                  type="time"
                                  value={
                                    props.values.inPersonDetail
                                      .collateralVisitDetail.endTime
                                  }
                                  id="endTime"
                                  name="inPersonDetail.collateralVisitDetail.endTime"
                                  onChange={props.handleChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Collapse>
                    </Row>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label htmlFor="contact__inPersonDetail.visitType">
                        Type
                      </Label>
                      <Select
                        id="contact__inPersonDetail.visitType"
                        name="inPersonDetail.visitType"
                        value={props.values.inPersonDetail.visitType}
                        options={VISIT_TYPE_OPTIONS}
                        onChange={option => {
                          props.setFieldValue(
                            'inPersonDetail.visitType',
                            option ? option.value : ''
                          );
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Collapse>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label htmlFor="contact__title">Title*</Label>
                    <Input
                      id="contact__title"
                      type="text"
                      name="title"
                      invalid={props.touched.title && !!props.errors.title}
                      maxLength={200}
                      value={props.values.title}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    <FormFeedback>{props.errors.title}</FormFeedback>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label htmlFor="contact__notes">Notes</Label>
                    <Input
                      id="contact__notes"
                      type="textarea"
                      name="notes"
                      value={props.values.notes}
                      onChange={props.handleChange}
                      rows="10"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </form>
          </Card.Body>
          <Card.Footer>
            <Button
              onClick={() => alert(JSON.stringify(props.values, null, 2))}
              type="button"
            >
              Cancel
            </Button>{' '}
            <Button
              type="submit"
              form="contact-form"
              color="primary"
              disabled={!(props.dirty && props.isValid) || props.isSubmitting}
            >
              {props.isSubmitting ? (
                <Fragment>
                  <Icon className="mr-2" icon="circleNotch" spin />
                  Saving...
                </Fragment>
              ) : (
                'Save'
              )}
            </Button>
          </Card.Footer>
        </Card>
      );
    }}
  />
);
