import React, { Component } from 'react';
import Card from '../Cards';
import DataGrid from '../DataGrid';
import mtcars from './mtcars.json';

class CarsDataGrid extends Component {
  render() {
    return React.createElement(Card, null, React.createElement(Card.Header, null, React.createElement(Card.Title, null, "MTCars Data Set")), React.createElement(Card.Body, {
      className: "pt-0"
    }, React.createElement(DataGrid, {
      data: mtcars,
      columns: [{
        Header: 'Model',
        accessor: '_row',
        width: 150
      }, {
        Header: 'mpg',
        accessor: 'mpg'
      }, {
        Header: 'cyl',
        accessor: 'cyl'
      }, {
        Header: 'disp',
        accessor: 'disp'
      }, {
        Header: 'hp',
        accessor: 'hp'
      }, {
        Header: 'drat',
        accessor: 'drat'
      }, {
        Header: 'wt',
        accessor: 'wt'
      }, {
        Header: 'qsec',
        accessor: 'qsec'
      }, {
        Header: 'vs',
        accessor: 'vs'
      }, {
        Header: 'am',
        accessor: 'am'
      }, {
        Header: 'gear',
        accessor: 'gear'
      }, {
        Header: 'carb',
        accessor: 'carb'
      }],
      defaultPageSize: 10,
      className: "-highlight"
    })));
  }

}

export default CarsDataGrid;