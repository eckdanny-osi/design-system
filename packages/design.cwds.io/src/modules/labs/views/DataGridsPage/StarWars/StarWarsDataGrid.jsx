import React, { Component } from 'react';
import DataGrid from '@cwds/components/lib/DataGrid';
import Card from '@cwds/components/lib/Cards';
import PeopleService from './people-service';
import Icon from '@cwds/components/lib/Icon';

// TODO left justify
// TODO bold
// TODO no shadows
// TODO border radius
// TODO pagination

const columnConfig = [
  {
    Header: 'Name',
    accessor: 'name',
    width: 300,
  },
  {
    Header: 'Gender',
    accessor: 'gender',
  },
  {
    Header: 'Eye Color',
    accessor: 'eye_color',
  },
  {
    Header: 'Height',
    accessor: 'height',
  },
  {
    Header: 'Mass',
    accessor: 'mass',
  },
];

const columnSort = [
  {
    id: 'name',
    desc: true,
  },
];

export default class DataGridsExample extends Component {
  state = {
    data: undefined,
    status: 'idle',
    pages: -1,
    pageSize: undefined,
  };
  constructor(props) {
    super(props);
    this._service = PeopleService.create();
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this._mounted = true;
  }
  componentWillUnmount() {
    this._mounted = false;
  }
  fetchData(tableState) {
    this.setState({
      status: 'loading',
    });
    this._service
      .get('/people', {
        params: {
          page: 1 + tableState.page,
        },
      })
      .then(res => res.data)
      .then(({ results, ...meta }) => {
        this._mounted &&
          this.setState({
            data: results,
            status: 'idle',
            pageSize: tableState.pageSize,
            pages: Math.ceil(meta.count / tableState.pageSize),
          });
      })
      .catch(err => {
        debugger;
      });
  }
  render() {
    const { data } = this.state;
    return (
      <Card>
        <Card.Header>
          <Card.Title>StarWars</Card.Title>
        </Card.Header>
        <Card.Body className="pt-0">
          <DataGrid
            data={data}
            pages={this.state.pages}
            columns={columnConfig}
            onFetchData={this.fetchData}
            defaultSorted={columnSort}
            defaultPageSize={10}
            loading={this.state.status === 'loading'}
            className="-highlight"
            manual
          />
        </Card.Body>
      </Card>
    );
  }
}
