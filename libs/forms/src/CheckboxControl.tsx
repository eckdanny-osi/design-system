import { IOption } from "./types";
import React, { Fragment } from "react";
import { Label } from "@cwds/reactstrap";
import cn from "classnames";

interface CheckboxControlProps {
  id?: string;
  label: string;
  value: string | boolean | number;
  checked: boolean;
  disabled: boolean;
  onChange?: React.FormEventHandler;
}

const CheckboxControl = (props: CheckboxControlProps) => {
  return (
    <Fragment>
      <input
        id={props.id}
        type="checkbox"
        value={String(props.value)}
        checked={props.checked}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <Label htmlFor={props.id}>{props.label}</Label>
    </Fragment>
  );
};

export default CheckboxControl;
