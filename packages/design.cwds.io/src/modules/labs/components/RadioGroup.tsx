import * as React from 'react';
import { FormikProps, FormikHandlers } from 'formik';
import * as PropTypes from 'prop-types';
import { IOption } from './types';
import { noop } from './utils';
import { Legend, Input, FormGroup } from '@cwds/components';

interface RadioGroupProps {
  error: string;
  name: string;
  onBlur: FormikHandlers['handleBlur'];
  legend: string | React.ReactNode;
  onChange: (e: React.ChangeEvent) => void;
  options: Array<IOption>;
  value: any;
  valueAccessor: (option: IOption) => any;
  renderOption: (props: renderProps) => React.ReactNode;
  renderError: (props: renderProps) => React.ReactNode;
  touched?: boolean;
}

interface renderProps {
  option: IOption;
  index: number;
  name: string;
  value: any;
  touched: boolean;
  error: string;
  onChange: (e: React.ChangeEvent) => void;
}

const defaultRenderOption: React.SFC<renderProps> = ({
  name,
  // onBlur: handleBlur,
  onChange: handleChange,
  option,
  value,
}) => {
  const id = `uniq__${name}--${option.label}`;
  return (
    <FormGroup key={id} check className="ml-2">
      <Input
        id={id}
        name={name}
        type="radio"
        checked={option.value === value} // @todo(dce): Fix this!
        // onBlur={handleBlur}
        onChange={handleChange}
        value={option.value}
      />
      <label htmlFor={id}>{option.label}</label>
    </FormGroup>
  );
};

/**
 * MyRadioGroup
 *
 * @example
 * <MyRadioGroup
 *   name="color"
 *   options={COLOR_OPTIONS}
 *   onChange={}
 *   touched={props.touched.color}
 *   error={props.errors.color}
 *   renderItem={({ error }) => (
 *     <div>{error}</div>
 *   )}
 * />
 */
export default class RadioGroup extends React.Component<RadioGroupProps> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  };
  static defaultProps: Partial<RadioGroupProps> = {
    error: '',
    onChange: noop,
    options: [],
    valueAccessor: (option: IOption) => option.value,
    renderOption: defaultRenderOption,
    renderError: errMsg => null,
  };
  renderOption = (option: IOption, index: number) => {
    // TODO: generate uuid here?
    return this.props.renderOption({
      option,
      index,
      name: this.props.name,
      value: this.props.value,
      onChange: this.handleChange,
      touched: this.props.touched,
      error: this.props.error,
    });
  };
  renderError = () => {};
  handleBlur = (e: React.FormEvent) => {
    console.debug('RadioGroup#handleBlur()');
    this.props.onBlur(e);
  };
  handleChange = (e: React.ChangeEvent) => {
    console.debug('RadioGroup#handleChange()');
    this.props.onChange(e);
  };
  render() {
    return (
      <React.Fragment>
        <fieldset>
          <Legend required>{this.props.legend}</Legend>
          {this.props.options.map(this.renderOption)}
        </fieldset>
        {this.props.error && this.props.renderError(this.props.error)}
      </React.Fragment>
    );
  }
}
