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
  name: string;
  label: string;
  value: string | boolean | number;
  checked: boolean;
  disabled: boolean;
  onChange?: React.FormEventHandler;
  onBlur?: React.FormEventHandler;
}

const CheckboxControl = (props: CheckboxControlProps) => {
  return (
    <FormGroup check inline={props.inline} className={cn(props.className)}>
      <Input
        type="checkbox"
        id={props.id}
        name={props.name}
        checked={props.checked}
        className={mapToCssModules(cn("form-check-input"))}
        disabled={props.disabled}
        value={String(props.value)}
        onChange={props.onChange}
        onBlur={props.onBlur}
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
