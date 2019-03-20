import { IOption } from './types'
import React, { Fragment } from 'react'
import { FormGroup, Input, Label, Util } from '@cwds/reactstrap'
import cn from 'classnames'
import Styles from './CheckboxControl.module.scss'

const mapToCssModules = Util.mapToCssModules

// console.log(mapToCssModules())j

console.log(mapToCssModules('form-check'))

interface CheckboxControlProps {
  id?: string
  className?: string
  labelClassName?: string
  inline?: boolean
  name: string
  label: string
  value: string | boolean | number
  checked: boolean
  defaultChecked: boolean
  disabled: boolean
  onChange?(e: React.ChangeEvent<any>): void //  ?: React.ChangeEvent,
  onBlur?: React.FormEventHandler
}

// form-check-inline .form-check-input { margin-right: 0.375rem }

const CheckboxControl = (props: CheckboxControlProps) => {
  return (
    <FormGroup
      check
      inline={props.inline}
      // className={cn(props.className)}
      className={cn(Styles.CheckboxControlFocus)}
    >
      <Input
        type="checkbox"
        id={props.id}
        name={props.name}
        checked={props.checked}
        defaultChecked={props.defaultChecked}
        // className={mapToCssModules(cn('form-check-input'))}
        // className="form-check-input"
        disabled={props.disabled}
        value={String(props.value)}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <Label
        className={cn('form-check-label d-block', props.labelClassName)}
        htmlFor={props.id}
      >
        {props.label}
      </Label>
    </FormGroup>
  )
}

export default CheckboxControl
