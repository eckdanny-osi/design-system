import * as React from 'react'
import { IListType } from './types'
import cn from 'classnames'
const uniqueId = require('lodash.uniqueid')
import { Input, FormGroup, Label } from '@cwds/reactstrap'


export interface RadioGroupProps<T> extends IListType<T> {
  /** The currently selected value */
  value: T
  /** Name for the field. Used to generate unique id */
  name: string
  /** Whether or not to enable the _entire_ field */
  disabled: boolean
  /** Change handler (traditional callback) */
  onChange: React.ChangeEventHandler
  /** Blur handler (traditional callback) */
  onBlur: React.EventHandler<any>
  /** Legend */
  legend: string
}

const RadioGroup = (props: RadioGroupProps<any>) => {
  const grpId = `${props.name}-rdo${uniqueId()}`
  return (
    <FormGroup tag="fieldset">
      <legend className="sr-only">{props.legend}</legend>
      {props.options.map(option => {
        const id = `${grpId}-${option.label}`
        return (
          <FormGroup check key={option.value} className={cn('mx-2')}>
            <Label check>
              <Input
                type="radio"
                name={grpId}
                disabled={option.disabled}
                value={option.value}
                checked={props.value === option.value}
                onChange={props.onChange}
              />
              <span className={cn({ 'text-muted': option.disabled })}>
                {option.label}
              </span>
            </Label>
          </FormGroup>
        )
      })}
    </FormGroup>
  )
}

export default RadioGroup
