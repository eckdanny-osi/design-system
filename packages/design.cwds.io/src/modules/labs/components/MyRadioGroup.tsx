import * as React from 'react';
import { FormikProps, FormikHandlers, FormikState } from 'formik';

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
  renderOption: (props: IDefaultRendererRadioGroup) => React.ReactNode;
  renderError: (error: string) => React.ReactNode;
  onChange: (e: React.ChangeEvent<any>) => void;
  dirty?: boolean;
  error?: string;
}

interface IDefaultRendererRadioGroup {
  name: string;
  onBlur: (e: any) => void;
  onChange: (e: React.ChangeEvent<any>) => void;
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

// assume all FormikRenderProps available here
//  =>  <radioGroup {...} />

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
  } = props;
  return (
    <React.Fragment>
      {options.map(option => renderOption({ option, name, onChange, value }))}
      {error && renderError(error)}
    </React.Fragment>
  );
};

RadioGroup.propTypes = {};
RadioGroup.defaultProps = {
  renderOption: defaultRendererRadioGroup,
};
