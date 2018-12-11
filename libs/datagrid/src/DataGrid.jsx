import React from 'react'
import ReactTable from 'react-table'
import './DataGrid.module.scss' // side-effect
import cn from 'classnames'
import { config } from './DataGridConfig'

config()

export default ({ className, ...props }) => (
  <ReactTable className={cn(className, '-highlight')} {...props} />
)
