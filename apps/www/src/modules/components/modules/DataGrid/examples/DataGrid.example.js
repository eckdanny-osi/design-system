import React, { Component } from 'react'
import Card from '../Cards'
import DataGrid from '../DataGrid'
import { data, columns } from './mtcars'

class CarsDataGrid extends Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Title>MTCars Data Set</Card.Title>
        </Card.Header>
        <Card.Body className="pt-0">
          <DataGrid data={data} columns={columns} defaultPageSize={10} />
        </Card.Body>
      </Card>
    )
  }
}

export default CarsDataGrid
