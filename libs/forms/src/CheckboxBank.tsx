import { IOption, IListType } from './types'
import * as React from 'react'
import cn from 'classnames'
import { Input, FormGroup, Label } from '@cwds/reactstrap'
import CheckboxControl from './CheckboxControl'
import Fieldset from './Fieldset'
import Legend from './Legend'
const uniqueId = require('lodash.uniqueid')

export interface CheckboxBankProps<T = any> extends IListType<T> {
  /** The currently selected choices */
  value: T[]
  /** alksdfj */
  options: IOption<T>[]
  /** Name for the field. Used to generate unique id */
  name: string
  /** Whether or not to enable the _entire_ field */
  disabled: boolean
  /** Use alternate layout */
  inline: boolean
  /** Change handler (traditional callback) */
  onChange: (x: string[]) => void | React.ChangeEventHandler
  /** Blur handler (traditional callback) */
  onBlur: React.EventHandler<any>
}
class CheckboxBank extends React.Component<CheckboxBankProps> {
  static propTypes = {}

  handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { value, checked } = e.target
    if (checked) {
      this.props.onChange([...this.props.value, value])
    } else {
      this.props.onChange(this.props.value.filter(val => val !== value))
    }
  }

  handleBlur = () => {
    this.props.onBlur(true)
  }

  render() {
    const { options } = this.props
    return (
      <Fieldset>
        {options.map(opt => {
          return (
            <CheckboxControl
              key={opt.value}
              value={opt.value}
              checked={this.props.value.includes(opt.value)}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              label={opt.label}
            />
          )
        })}
      </Fieldset>
    )
  }
}

export default CheckboxBank
