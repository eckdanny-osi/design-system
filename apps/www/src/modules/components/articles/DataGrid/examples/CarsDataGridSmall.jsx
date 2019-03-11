import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DataGrid,
} from '@cwds/components'
import { data, columns } from './mtcars.js'

const subset = data.slice(0, 3)

const CarsDataGrid = () => (
  <Card>
    <CardHeader>
      <CardTitle>Cars</CardTitle>
    </CardHeader>
    <CardBody className="pt-0">
      <DataGrid data={subset} columns={columns} />
    </CardBody>
  </Card>
)

export default CarsDataGrid
