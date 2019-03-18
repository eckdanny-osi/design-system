import { IOption } from "./types";
import React, { Fragment } from "react";
import { FormGroup, Input, Label } from "@cwds/reactstrap";
import cn from "classnames";

interface CheckboxControlProps {
  id?: string;
  inline: boolean;
  label: string;
  value: string | boolean | number;
  checked: boolean;
  disabled: boolean;
  onChange?: React.FormEventHandler;
}

const CheckboxControl = (props: CheckboxControlProps) => {
  return (
    <FormGroup check inline={props.inline}>
      <Input
        type="checkbox"
        defaultChecked={props.checked}
        id={props.id}
        className={cn("form-check-input")}
        value={String(props.value)}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <Label className="form-check-label" htmlFor={props.id}>
        {props.label}
      </Label>
    </FormGroup>
  );
};

export default CheckboxControl;
