import React from 'react'
import ReactTable from 'react-table'
import './DataGrid.module.scss'
import cn from 'classnames'
import { config } from './DataGridConfig'

config() // side-effect

const displayPagination = data => {
  if (data) {
    return !(data.length < config().defaultPageSize)
  }
  return false
}

export default ({ className, ...props }) => (
  <ReactTable
    className={cn(className, '-highlight')}
    {...props}
    showPagination={displayPagination(props.data)}
  />
)
