import { IOption } from "./types";
import React, { Fragment } from "react";
import { FormGroup, Input, Label, Util } from "@cwds/reactstrap";
import cn from "classnames";

const mapToCssModules = Util.mapToCssModules;

// console.log(mapToCssModules())j

console.log(mapToCssModules("form-check-input"));

interface CheckboxControlProps {
  id?: string;
  className?: string;
  inline?: boolean;
  label: string;
  value: string | boolean | number;
  checked: boolean;
  disabled: boolean;
  onChange?: React.FormEventHandler;
}

const CheckboxControl = (props: CheckboxControlProps) => {
  return (
    <FormGroup check inline={props.inline} className={cn(props.className)}>
      <Input
        type="checkbox"
        id={props.id}
        checked={props.checked}
        className={mapToCssModules(cn("form-check-input"))}
        disabled={props.disabled}
        onChange={props.onChange}
        value={String(props.value)}
      />
      <Label
        className={mapToCssModules(cn("form-check-label"))}
        htmlFor={props.id}
      >
        {props.label}
      </Label>
    </FormGroup>
  );
};

export default CheckboxControl;
