import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Input, Label } from '@cwds/reactstrap'
import cn from 'classnames'
import Styles from './CheckboxControl.module.scss'

interface CheckboxControlProps {
  id?: string
  className?: string
  labelClassName?: string
  error?: boolean
  inline?: boolean
  name?: string
  label: string
  value: string | boolean | number
  checked: boolean
  disabled?: boolean
  onChange?(e: React.ChangeEvent<any>): void //  ?: React.ChangeEvent,
  onBlur?: React.FormEventHandler
}

const propTypes = {
  /** Foo */
  id: PropTypes.string,
}

const defaultProps = {}

// form-check-inline .form-check-input { margin-right: 0.375rem }

const CheckboxControl = (props: CheckboxControlProps) => {
  const id = props.id || `${props.name}__${String(props.value)}`
  return (
    <FormGroup
      check
      inline={props.inline}
      className={cn(Styles.CheckboxControlFocus)}
    >
      <Input
        type="checkbox"
        id={id}
        name={props.name}
        checked={props.checked}
        disabled={props.disabled}
        value={String(props.value)}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <Label
        className={cn('form-check-label d-block', props.labelClassName, {
          'text-danger': !!props.error,
        })}
        htmlFor={id}
      >
        {props.label}
      </Label>
    </FormGroup>
  )
}

CheckboxControl.propTypes = propTypes
CheckboxControl.defaultProps = defaultProps

export default CheckboxControl
