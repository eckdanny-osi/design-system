import * as React from 'react';
import { FormikProps, FormikHandlers, FormikState } from 'formik';
import PropTypes from 'prop-types';

const noop = () => {};

interface IOption {
  value: string | number;
  label?: string;
  disabled?: boolean;
}

interface ICheckboxBankProps {
  options: IOption[];
  onChange?: (e: React.ChangeEvent<any>) => void;
  renderOption?: (props: any) => React.ReactNode;
}

export const CheckboxBank: React.SFC<ICheckboxBankProps> = props => {
  return (
    <div>
      {props.options.map(option => {
        option.value;
      })}
    </div>
  );
};

interface IRadioGroupProps {
  value: any;
  name: string;
  options: IOption[];
  // renderOption: (props: IDefaultRendererRadioGroup) => React.ReactNode;
  renderOption: (props: IDefaultRendererRadioGroup) => React.ReactNode;
  renderError: (error: string) => React.ReactNode;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: any) => void;
  dirty?: boolean;
  error?: string;
}

interface IDefaultRendererRadioGroup {
  name: string;
  onBlur?: (e: any) => void;
  onChange?: (e: React.ChangeEvent<any>) => void;
  option: {
    value: any;
    label?: string;
    disabled?: boolean;
  };
  value: any;
}
const defaultRendererRadioGroup: React.SFC<IDefaultRendererRadioGroup> = ({
  name,
  onBlur: handleBlur,
  onChange: handleChange,
  option,
  value,
}) => {
  const id = `uniq__${name}`;
  return (
    <React.Fragment>
      <input
        id={id}
        name={name}
        type="radio"
        checked={option.value === value} // @todo(dce): Fix this!
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label htmlFor={id}>{option.label}</label>
    </React.Fragment>
  );
};
defaultRendererRadioGroup.defaultProps = {
  onBlur: noop,
  onChange: noop,
};

// assume all FormikRenderProps available here
//  =>  <radioGroup {...} />

const getItemRenderProps = (
  props: Partial<FormikHandlers> & { name: string; option: IOption; value: any }
) => ({
  onChange: props.handleChange,
  onBlur: props.handleBlur,
  name: props.name,
  option: props.option,
  value: props.value,
});

export const RadioGroup: React.SFC<
  IRadioGroupProps & FormikHandlers & FormikState<{}>
> = props => {
  const {
    handleBlur,
    handleChange,
    name,
    options,
    renderOption,
    renderError,
    error,
    value,
    onChange,
    onBlur,
  } = props;
  return (
    <React.Fragment>
      {options.map((option: IOption) =>
        renderOption({ option, name, onChange, onBlur, value })
      )}
      {error && renderError(error)}
    </React.Fragment>
  );
};

RadioGroup.propTypes = {};
RadioGroup.defaultProps = {
  renderOption: defaultRendererRadioGroup,
};

interface MyRadioGroupProps {
  error: string;
  name: string;
  onBlur: FormikHandlers['handleBlur'];
  onChange: (e: React.ChangeEvent) => void;
  options: Array<IOption>;
  value: any;
  valueAccessor: (option: IOption) => any;
  renderItem: (props: any) => React.ReactNode;
  renderError: (props: any) => React.ReactNode;
  touched?: boolean;
}

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
class MyRadioGroup extends React.Component<MyRadioGroupProps> {
  // static propTypes = {
  //   name: PropTypes.string,
  // };
  static defaultProps = {
    error: '',
    onChange: noop,
    options: [],
    valueAccessor: (option: IOption) => option.value,
  };
  renderOption = (option: IOption, index: number) => {
    // TODO: generate uuid here?
    return this.props.renderItem({
      option,
      index,
      name: this.props.name,
      value: this.props.value,
      onChange: this.handleChange,
    });
  };
  renderError = () => {};
  handleBlur = (e: React.FormEvent) => {
    console.debug('handleBlur()');
    this.props.onBlur(e);
  };
  handleChange = (e: React.ChangeEvent) => {
    debugger;
    this.props.onChange(e);
  };
  render() {
    return (
      <React.Fragment>
        {this.props.options.map(this.renderOption)}
        {this.props.error && this.props.renderError(this.props.error)}
      </React.Fragment>
    );
  }
}
