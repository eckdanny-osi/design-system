import React from 'react'
import { Card, CardBody, DataGrid } from '@cwds/components'
import { data, columns } from './dummydata.js'

const AssesmentHistoryTable = () => (
  <Card>
    <CardBody className="pt-0">
      <DataGrid data={data} columns={columns} />
    </CardBody>
  </Card>
)

export default AssesmentHistoryTable
