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

class Example extends Component {
  state = {
    values: {
      timeUnit: 'years',
      relative: 'fathers',
      place: 'continent',
      verbPast: 'dedicated',
      animal: 'men',
    },
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
              setTimeout(() => {
                actions.resetForm(values);
                this.setState({ values });
                toggleScope();
              }, 1000);
            }}
            render={props => {
              const onChange = e =>
                props.setFieldValue(e.target.name, e.target.value);
              return (
                <form onSubmit={props.handleSubmit} autoComplete="off">
                  <Card>
                    {renderHeader({ scope })}
                    <Card.Body>
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
                      <Button onClick={toggleScope}>Cancel</Button>{' '}
                      <Button
                        type="submit"
                        color="primary"
                        disabled={
                          !(props.dirty && props.isValid) || props.isSubmitting
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
              );
            }}
          />
        )}
      />
    );
  }
}

export default Example;
