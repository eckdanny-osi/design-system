import * as React from 'react';
import { Formik, Field, FieldArray } from 'formik';
import RadioGroup from '../components/RadioGroup';
import { FormGroup, Input, Label, FormFeedback } from '@cwds/components';

const COLORS = [
  { label: 'Red', value: 'red' },
  { label: 'Orange', value: 'orange' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue', disabled: true },
  { label: 'Indigo', value: 'indigo' },
  { label: 'Violet', value: 'violet' },
];

const validate = ({ color }) => {
  let errors = {};
  if (/^g/i.test(color)) {
    errors.color = 'No colors that start with "G" please!';
  }
  return errors;
};

const renderOption = props => (
  <FormGroup check className="ml-2" key={props.option.value}>
    <Input
      id={props.option.value}
      invalid={
        props.touched && !!props.error && props.value === props.option.value
      }
      type="radio"
      name={props.name}
      checked={props.value === props.option.value}
      value={props.option.value}
      onChange={props.onChange}
      disabled={props.option.disabled}
    />
    <Label check htmlFor={props.option.value}>
      {props.option.label}
    </Label>
  </FormGroup>
);

const renderError = errMsg => (
  <FormFeedback style={{ display: 'block' }}>{errMsg}</FormFeedback>
);

const initialValues = { color: '' };

export default () => (
  <Formik
    initialValues={initialValues}
    onSubmit={() => {}}
    validate={validate}
    render={props => {
      return (
        <React.Fragment>
          <form onSubmit={props.handleSubmit}>
            <RadioGroup
              name="color"
              options={COLORS}
              value={props.values.color}
              error={props.errors.color}
              onChange={e => {
                props.setFieldTouched('color', true, false);
                props.setFieldValue('color', e.target.value);
              }}
              renderOption={renderOption}
              renderError={renderError}
              touched={props.touched.color}
            />
          </form>
          <pre>{JSON.stringify(props, null, 2)}</pre>
        </React.Fragment>
      );
    }}
  />
);
