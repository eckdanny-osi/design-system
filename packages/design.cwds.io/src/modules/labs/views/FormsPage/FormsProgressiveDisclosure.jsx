import React from 'react';
import { Formik } from 'formik';
import Label from '@cwds/components/lib/Label';
import Input from '@cwds/components/lib/Input';
import FormGroup from '@cwds/components/lib/FormGroup';

const PRIMARY_COLORS = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'yellow', label: 'Yellow' },
];

const SECONDARY_COLORS = [
  { value: 'orange', label: 'Orange' },
  { value: 'purple', label: 'Purple' },
  { value: 'green', label: 'Green' },
];

const initialValues = {};

export default () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      render={props => {
        const onChange = e =>
          props.setFieldValue(e.target.name, e.target.value);
        return (
          <form onSubmit={props.handleSubmit}>
            <h4>Progressive Disclosure</h4>
            <Label>Preference</Label>
            <FormGroup check>
              <Input
                id="preference__primary"
                type="radio"
                name="preference"
                value="primary"
                checked={props.values.preference === 'primary'}
                onChange={onChange}
              />
              <Label htmlFor="preference__primary">Primary</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                id="preference__secondary"
                type="radio"
                name="preference"
                value="secondary"
                checked={props.values.preference === 'secondary'}
                onChange={onChange}
              />
              <Label htmlFor="preference__secondary">Secondary</Label>
            </FormGroup>
            {props.values.preference === 'primary' && (
              <div>
                <Label>Color</Label>
                {PRIMARY_COLORS.map(({ label, value }) => (
                  <FormGroup check key={value}>
                    <Input
                      id={`preference__primary-${value}`}
                      type="radio"
                      name="primary"
                      value={value}
                      checked={props.values.primary === value}
                      onChange={onChange}
                    />
                    <Label htmlFor={`preference__primary-${value}`}>
                      {label}
                    </Label>
                  </FormGroup>
                ))}
              </div>
            )}
            {props.values.preference === 'secondary' && (
              <div>
                <Label>Color</Label>
                {SECONDARY_COLORS.map(({ label, value }) => (
                  <FormGroup check key={value}>
                    <Input
                      id={`preference__secondary-${value}`}
                      type="radio"
                      name="secondary"
                      value={value}
                      checked={props.values.secondary === value}
                      onChange={onChange}
                    />
                    <Label htmlFor={`preference__secondary-${value}`}>
                      {label}
                    </Label>
                  </FormGroup>
                ))}
              </div>
            )}
            <pre>{JSON.stringify(props, null, 2)}</pre>
          </form>
        );
      }}
    />
  );
};
