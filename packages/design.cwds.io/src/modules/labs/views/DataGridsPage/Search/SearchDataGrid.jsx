import React, { Component } from 'react';
import Card from '@cwds/components/lib/Cards';
import Button from '@cwds/components/lib/Button';
import DataGrid from '@cwds/components/lib/DataGrid';
import Input from '@cwds/components/lib/Input';
import InputGroup from '@cwds/components/lib/InputGroup';
import InputGroupAddon from '@cwds/components/lib/InputGroupAddon';
import Icon from '@cwds/components/lib/Icon';
import data from './data.json';

const toCapitalCase = str => str.charAt(0).toUpperCase() + str.slice(1);

const columns = [
  { Header: 'Last', accessor: 'name.last' },
  { Header: 'First', accessor: 'name.first' },
  {
    Header: 'Active',
    accessor: 'isActive',
    Cell: ({ value }) => (value ? 'Active' : 'Inactive'),
  },
  { Header: 'Age', accessor: 'age' },
  {
    Header: 'Eyes',
    accessor: 'eyeColor',
    Cell: ({ value }) => toCapitalCase(value),
  },
];

const SearchForm = ({ onChange, onSubmit, disabled, value }) => (
  <div className="mb-3">
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <InputGroup>
        <Input
          type="search"
          value={value}
          placeholder="Ex; John Smith, Danny Eck, ..."
          onChange={e => {
            onChange(e.target.value);
          }}
        />
        <InputGroupAddon addonType="append">
          <Button
            color="info"
            type="submit"
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            disabled={Boolean(value) && Boolean(disabled)}
          >
            <Icon icon="search" className="mr-2" /> Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </form>
  </div>
);

class CarsDataGrid extends Component {
  state = {
    data,
    filteredData: null,
    filterValue: null,
    value: '',
  };
  handleChange = value => {
    this.setState({ value });
  };
  handleSubmit = e => {
    const { value } = this.state;
    const filteredData = this.state.data.filter(({ name }) =>
      `${name.first} ${name.last}`.includes(value)
    );
    this.setState({ filteredData, filterValue: value });
  };
  render() {
    const { data, filteredData } = this.state;
    return (
      <Card>
        <Card.Header>
          <Card.Title>People</Card.Title>
        </Card.Header>
        <Card.Body>
          <SearchForm
            value={this.state.value}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            disabled={this.state.value === this.state.filterValue}
          />
          <DataGrid
            data={filteredData || data}
            columns={columns}
            defaultPageSize={10}
            className="-highlight"
            filterable={false}
          />
        </Card.Body>
      </Card>
    );
  }
}

export default CarsDataGrid;
