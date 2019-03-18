import { IOption, IListType } from "./types";
import * as React from "react";
import cn from "classnames";
import { Input, FormGroup, Label } from "@cwds/reactstrap";
import CheckboxControl from "./CheckboxControl";
const uniqueId = require("lodash.uniqueid");

export interface CheckboxBankProps<T = any> extends IListType<T> {
  /** The currently selected choices */
  value: T[];
  /** alksdfj */
  options: IOption<T>[];
  /** Name for the field. Used to generate unique id */
  name: string;
  /** Whether or not to enable the _entire_ field */
  disabled: boolean;
  /** Use alternate layout */
  inline: boolean;
  /** Change handler (traditional callback) */
  onChange: React.ChangeEventHandler;
  /** Blur handler (traditional callback) */
  onBlur: React.EventHandler<any>;
  /** Focus event handler */
  onFocus: React.FocusEventHandler;
}

const CheckboxBank = (props: CheckboxBankProps<any>) => {
  if (!props.options || !props.options.length) return null;
  return (
    <React.Fragment>
      {props.options.map(option => {
        const id = `${props.name}-chk${uniqueId()}-${option.label}`;
        return (
          <FormGroup check key={option.value} inline={props.inline}>
            <CheckboxControl
              id={id}
              value={option.value}
              checked={props.value.includes(option.value)}
              disabled={Boolean(option.disabled)}
              onChange={props.onChange}
              label={option.label}
            />
          </FormGroup>
        );
      })}
    </React.Fragment>
  );
};

CheckboxBank.defaultProps = {
  options: [],
  value: []
};

export default CheckboxBank;
