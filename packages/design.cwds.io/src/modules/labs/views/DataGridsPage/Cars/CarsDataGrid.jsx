import React, { Component } from 'react';
import Card from '@cwds/components/lib/Cards';
import DataGrid from '@cwds/components/lib/DataGrid';
import mtcars from '../data/mtcars.json';

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
];

const CarsDataGrid = () => (
  <Card>
    <Card.Header>
      <Card.Title>Cars</Card.Title>
    </Card.Header>
    <Card.Body className="pt-0">
      <DataGrid data={mtcars} columns={columns} className="-highlight" />
    </Card.Body>
  </Card>
);

export default CarsDataGrid;
