import React from 'react'
import { IListType } from './types'
import Select from 'react-select'
const Styles = require('./SelectList.module.scss')

export interface IListBoxProps extends IListType<any> {
  name: string
}

const SelectList = (props: IListBoxProps) => (
  <Select isMulti className={Styles.SelectList} {...props} />
)

export default SelectList
