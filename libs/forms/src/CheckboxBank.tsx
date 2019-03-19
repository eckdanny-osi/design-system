import { IOption } from "./types";
import * as React from "react";
import { IListType } from "./types";
import cn from "classnames";
import { Input, FormGroup, Label } from "@cwds/reactstrap";
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
}

const CheckboxBank = (props: CheckboxBankProps<any>) => {
  if (!props.options || !props.options.length) return null;
  return (
    <React.Fragment>
      {props.options.map(option => {
        const id = `${props.name}-chk${uniqueId()}-${option.label}`;
        return (
          <FormGroup
            check
            key={option.value}
            className={cn("mx-2", "pretty p-default", {
              "d-inline-block mr-4": props.inline
            })}
          >
            <input
              id={id}
              type="checkbox"
              value={option.value}
              checked={props.value.includes(option.value)}
              disabled={option.disabled}
              onChange={props.onChange}
            />
            <div className="state">
              <Label
                htmlFor={id}
                className={cn({
                  "text-muted": option.disabled
                })}
              >
                {option.label}
              </Label>
            </div>
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
