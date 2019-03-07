import React from 'react'
import ReactTable from 'react-table'
import './DataGrid.module.scss'
import cn from 'classnames'
import { config } from './DataGridConfig'

config() // side-effect

export default ({ className, ...props }) => (
  <ReactTable className={cn(className, '-highlight')} {...props} />
)
