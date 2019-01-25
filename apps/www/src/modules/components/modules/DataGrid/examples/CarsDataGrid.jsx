import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DataGrid,
} from '@cwds/components'
import { data, columns } from './mtcars.js'

const CarsDataGrid = () => (
  <Card>
    <CardHeader>
      <CardTitle>Cars</CardTitle>
    </CardHeader>
    <CardBody className="pt-0">
      <DataGrid data={data} columns={columns} />
    </CardBody>
  </Card>
)

export default CarsDataGrid
