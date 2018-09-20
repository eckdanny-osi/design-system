import React, { Fragment, Component } from 'react';
import { Formik } from 'formik';
import Card from '@cwds/components/lib/Cards';
import MultiCard from '@cwds/components/lib/Cards/CardMultiContext';
import Button from '@cwds/components/lib/Button';
import { Row, Col } from '@cwds/components/lib/Grid';
import FormGroup from '@cwds/components/lib/FormGroup';
import Label from '@cwds/components/lib/Label';
import Input from '@cwds/components/lib/Input';
import Icon from '@cwds/components/lib/Icon';
import Alert from '@cwds/components/lib/Alert';
import Modal from '@cwds/components/lib/Modal';

class Example extends Component {
  state = {
    values: {
      timeUnit: 'years',
      relative: 'fathers',
      place: 'continent',
      verbPast: 'dedicated',
      animal: 'men',
    },
    isSaved: false,
    needsConfirmation: false,
  };

  handleSubmit = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 1000);
    });
    return promise;
  };

  handleConfirmationDiscardOk = cb => {
    this.setState({ needsConfirmation: false }, cb());
  };

  handleConfirmationDiscardCancel = () => {
    this.setState({ needsConfirmation: false });
  };

  handleCancel = () => {
    alert('are you sure?');
  };

  render() {
    return (
      <MultiCard
        title="Speech Wizard"
        read={({ renderHeader, toggleScope, scope }) => {
          const {
            timeUnit,
            relative,
            place,
            animal,
            verbPast,
          } = this.state.values;
          return (
            <Card>
              {renderHeader({ scope })}
              <Card.Body>
                <blockquote
                  style={{
                    fontFamily: 'serif',
                    fontSize: '185%',
                    fontStyle: 'italic',
                    fontWeight: 500,
                  }}
                >
                  Four score and seven <strong>{timeUnit}</strong> ago our{' '}
                  <strong>{relative}</strong> brought forth on this{' '}
                  <strong>{place}</strong>, a new nation, conceived in Liberty,
                  and <strong>{verbPast}</strong> to the proposition that all{' '}
                  <strong>{animal}</strong> are created equal.
                </blockquote>
              </Card.Body>
            </Card>
          );
        }}
        edit={({ renderHeader, toggleScope, scope }) => (
          <Formik
            initialValues={this.state.values}
            onSubmit={(values, actions) => {
              this.handleSubmit().then(() => {
                actions.resetForm(values);
                this.setState({
                  values,
                  isSaved: true,
                });
              });
            }}
            render={props => {
              const onChange = e =>
                props.setFieldValue(e.target.name, e.target.value);
              return (
                <Fragment>
                  <form onSubmit={props.handleSubmit} autoComplete="off">
                    <Card>
                      {renderHeader({ scope })}
                      <Card.Body>
                        {this.state.isSaved && (
                          <Alert color="success">Hooray! Changes saved.</Alert>
                        )}
                        <Row>
                          <Col md={4}>
                            <FormGroup>
                              <Label htmlFor="multiscopedemo__timeUnit">
                                Time Unit (plural)
                              </Label>
                              <Input
                                id="multiscopedemo__timeUnit"
                                name="timeUnit"
                                type="text"
                                onChange={onChange}
                                value={props.values.timeUnit}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={4}>
                            <FormGroup>
                              <Label htmlFor="multiscopedemo__relative">
                                Relative (plural)
                              </Label>
                              <Input
                                id="multiscopedemo__relative"
                                name="relative"
                                type="text"
                                onChange={onChange}
                                value={props.values.relative}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={4}>
                            <FormGroup>
                              <Label htmlFor="multiscopedemo__verbPast">
                                Verb (past tense)
                              </Label>
                              <Input
                                id="multiscopedemo__verbPast"
                                name="verbPast"
                                type="text"
                                onChange={onChange}
                                value={props.values.verbPast}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={4}>
                            <FormGroup>
                              <Label htmlFor="multiscopedemo__animal">
                                Animal (plural)
                              </Label>
                              <Input
                                id="multiscopedemo__animal"
                                name="animal"
                                type="text"
                                onChange={onChange}
                                value={props.values.animal}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Card.Body>
                      <Card.Footer>
                        <Button
                          disabled={props.isSubmitting}
                          onClick={() => {
                            const { initialValues, values, dirty } = props;
                            if (dirty) {
                              // const discardChanges = window.confirm(
                              //   'Oh No! You may lose work. Discard changes?'
                              // );
                              // this.setState({
                              //   confirmationDialog: new Promise((resolve, reject) => {

                              //   })
                              // });
                              this.setState({
                                needsConfirmation: true,
                              });
                              // if (discardChanges) {
                              //   props.resetForm();
                              //   toggleScope();
                              // } else {
                              //   // do nothing
                              // }
                            } else {
                              this.setState({ isSaved: false });
                              toggleScope();
                            }
                          }}
                        >
                          Go Back
                        </Button>{' '}
                        <Button
                          type="submit"
                          color="primary"
                          disabled={
                            !(props.dirty && props.isValid) ||
                            props.isSubmitting
                          }
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
                  </form>
                  <Modal isOpen={this.state.needsConfirmation}>
                    <Modal.Header>Oops!</Modal.Header>
                    <Modal.Body>
                      Do you want to discard your unsaved changes?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        color="secondary"
                        onClick={this.handleConfirmationDiscardCancel}
                      >
                        Edit
                      </Button>{' '}
                      <Button
                        color="warning"
                        onClick={() =>
                          this.handleConfirmationDiscardOk(() => {
                            props.resetForm();
                            toggleScope();
                          })
                        }
                      >
                        Discard
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Fragment>
              );
            }}
          />
        )}
      />
    );
  }
}

export default Example;
