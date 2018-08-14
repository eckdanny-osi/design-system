import React, { Fragment } from 'react';
import { Formik } from 'formik';
import {
  Card,
  Collapse,
  FormGroup,
  Button,
  Row,
  Col,
  Input,
  Label,
  Select,
  FormFeedback,
  Icon,
} from '@cwds/components';
import RadioGroup from '../../components/RadioGroup';
import {
  LOCATION,
  CLASSIFICATION_OPTIONS,
  CONCTACT_METHOD_OPTIONS,
  CONTACT_METHOD,
  LOCATION_OPTIONS,
  NOTICE_OPTIONS,
  COLLATERAL_VISIT_OPTIONS,
  VISIT_TYPE_OPTIONS,
} from './FormContactEnums';

const initialValues = {
  date: new Date().toISOString().slice(0, 10),
  classification: '',
  methodOfContact: '',
  inPersonDetail: {
    location: '',
    notice: '',
    collateralVisit: '',
    visitType: '',
    collateralVisitDetail: {
      startTime: '',
      endTime: '',
    },
  },
  title: '',
  notes: '',
};

const validate = values => {
  let errors = {};

  if ('' === values.date) errors.date = 'Required!';

  if ('' === values.methodOfContact) errors.methodOfContact = 'Required!';

  if (
    values.inPersonDetail.location === LOCATION.HOME_FACILITY &&
    '' === values.inPersonDetail.notice
  ) {
    errors.notice = 'Required!';
  }

  if ('' === values.classification) {
    errors.classification = 'Required!';
  }

  if ('' === values.title) {
    errors.title = 'Required!';
  }

  if (CONTACT_METHOD.IN_PERSON === values.methodOfContact) {
    let inPersonDetailErrors = {};
    if ('' === values.inPersonDetail.notice) {
      inPersonDetailErrors.notice = 'Required!';
    }
    if ('' === values.inPersonDetail.collateralVisit) {
      inPersonDetailErrors.notice = 'Required!';
    }
    if (Object.keys(inPersonDetailErrors).length) {
      errors.inPersonDetail = inPersonDetailErrors;
    }
  }

  return errors;
};

export const ContactForm = () => {
  return (
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
                      <Label htmlFor="date">Date*</Label>
                      <Input
                        type="date"
                        value={props.values.date}
                        invalid={!!props.errors.date}
                        id="date"
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
                        inline
                        value={props.values.classification}
                        options={CLASSIFICATION_OPTIONS}
                        onChange={props.handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Method of Contact*</Label>
                      {/* @TODO: How to get cssModule className in here? */}
                      <Select
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
                      <FormFeedback>
                        {props.errors.methodOfContact}
                      </FormFeedback>
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
                        <Label>Location</Label>
                        <Select
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
                              value={
                                props.values.inPersonDetail.collateralVisit
                              }
                              options={COLLATERAL_VISIT_OPTIONS}
                              onChange={props.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Collapse
                          style={{ width: '100%' }}
                          isOpen={
                            'yes' ===
                            props.values.inPersonDetail.collateralVisit
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
                        <Label>Type</Label>
                        <Select
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
                      <Label>Title*</Label>
                      <Input
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
                      <Label>Notes</Label>
                      <Input
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
};
