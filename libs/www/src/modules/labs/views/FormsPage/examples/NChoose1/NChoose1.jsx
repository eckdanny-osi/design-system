import React from 'react';
import { Formik } from 'formik';
import { Row, Col } from '@cwds/components/dist/Grid';
import Card from '@cwds/components/dist/Cards';
import FormFeedback from '@cwds/components/dist/FormFeedback';
import FormGroup from '@cwds/components/dist/FormGroup';
import Label from '@cwds/components/dist/Label';
import Select from '@cwds/components/dist/Select';
import RadioGroup from '@cwds/components/dist/RadioGroup';

export default () => (
  <Formik
    initialValues={{
      myField: '',
    }}
    onSubmit={_ => {}}
    render={props => {
      const options = [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Quo', value: 'quo' },
        { label: 'Qux', value: 'qux' },
      ];
      return (
        <Card>
          <Row>
            <Col md={6}>
              <RadioGroup
                required
                name="myField"
                legend="My Radio Group"
                options={options}
                value={props.values.myField}
                // TODO: Should look more like this
                // onChange={value => props.setFieldValue('myField', value)}
                onChange={e => {
                  props.setFieldValue(e.target.name, e.target.value, false);
                  props.handleChange(e);
                }}
              />
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label required>My Select</Label>
                <Select
                  name="myField"
                  options={options}
                  onChange={option => {
                    props.setFieldValue('myField', option ? option.value : '');
                  }}
                  onBlur={_ => props.setFieldTouched('methodOfContact')}
                  value={props.values.myField}
                />
                <FormFeedback>{props.errors.myField}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
        </Card>
      );
    }}
  />
);
