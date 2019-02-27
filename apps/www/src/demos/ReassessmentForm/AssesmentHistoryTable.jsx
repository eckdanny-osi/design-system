import React from 'react'
import { DataGrid } from '@cwds/components'
import { data, columns } from './dummydata.js'

const AssesmentHistoryTable = () => (
  <div className="mt-5">
    <DataGrid data={data} columns={columns} />
  </div>
)

export default AssesmentHistoryTable
