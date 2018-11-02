import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DataGrid,
} from '@cwds/components'
import mtcars from '../data/mtcars.json'

const columns = [
  { Header: 'Model', accessor: '_row', width: 150 },
  { Header: 'mpg', accessor: 'mpg' },
  { Header: 'cyl', accessor: 'cyl' },
  { Header: 'disp', accessor: 'disp' },
  { Header: 'hp', accessor: 'hp' },
  { Header: 'drat', accessor: 'drat' },
  { Header: 'wt', accessor: 'wt' },
  { Header: 'qsec', accessor: 'qsec' },
  { Header: 'vs', accessor: 'vs' },
  { Header: 'am', accessor: 'am' },
  { Header: 'gear', accessor: 'gear' },
  { Header: 'carb', accessor: 'carb' },
]

const CarsDataGrid = () => (
  <Card>
    <CardHeader>
      <CardTitle>Cars</CardTitle>
    </CardHeader>
    <CardBody className="pt-0">
      <DataGrid data={mtcars} columns={columns} className="-highlight" />
    </CardBody>
  </Card>
)

export default CarsDataGrid
