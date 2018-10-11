import React, { Component } from 'react';
import { Row, Col } from '@cwds/components/dist/Grid';
import Card from '@cwds/components/dist/Cards';
import DataGrid from '@cwds/components/dist/DataGrid';
import CheckboxBank from '@cwds/components/dist/CheckboxBank';
import Input from '@cwds/components/dist/Input';
import PeopleService from './mockService';
import Collapse from '@cwds/components/dist/Collapse';
import Button from '@cwds/components/dist/Button';
import Toggle from '@cwds/components/dist/Toggle';

import { toCapitalCase } from '../utils';

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

const AdvancedPeopleSearchForm = ({
  onSearchFormToggle,
  isOpenSearchForm = true,
}) => {
  return (
    <Card
      style={{
        backgroundColor: 'rgba(10, 121, 142, .15)',
      }}
    >
      {/* <Card.Header style="">alsdkfj</Card.Header> */}
      <div className="text-right">
        <Button onClick={onSearchFormToggle}>Toggle</Button>
      </div>
      <Collapse isOpen={isOpenSearchForm}>
        {/* <Card.Body> */}
        <section>
          <form>
            <Row>
              <Col md={6}>
                <label>alsdkfj</label>
                <Input type="text" />
              </Col>
              <Col md={6}>
                <label>alsdkfj</label>
                <Input type="text" />
              </Col>
              <Col md={6}>
                <label>Range</label>
                <Input type="range" />
              </Col>
              <Col md={6}>
                <fieldset>
                  <legend>Pick Something</legend>
                  <CheckboxBank
                    inline
                    name="pick-something"
                    value={[]}
                    options={[
                      { label: 'Foo', value: 'foo' },
                      { label: 'Bar', value: 'bar' },
                      { label: 'Quo', value: 'quo' },
                      { label: 'Qux', value: 'qux' },
                    ]}
                    onChange={() => {}}
                  />
                </fieldset>
              </Col>
            </Row>
            <div className="text-right mt-3">
              <Button type="button" color="info">
                Submit
              </Button>
            </div>
          </form>
        </section>
        {/* </Card.Body> */}
        {/* <Card.Footer> */}
        {/* </Card.Footer> */}
      </Collapse>
    </Card>
  );
};

class AdvancedPeopleSearchDataGrid extends Component {
  peopleService = new PeopleService();
  state = {
    loading: false,
    pages: null,
    page: 0,
    pageSize: 10,
    isOpenSearchForm: true,
    viewType: 'table',
  };
  componentDidMount() {
    this._mounted = true;
  }
  componentWillUnmount() {
    this._mounted = false;
  }
  onSearchChange() {}
  onFetchData = (state, instance) => {
    this.setState({ loading: true });
    this.peopleService
      .search({
        from:
          0 === this.state.page ? 0 : (state.page - 1) * this.state.pageSize,
        size: this.state.pageSize,
        sort: [],
        query: [],
      })
      .then(res => {
        // console.log(res);
        this._mounted &&
          this.setState({
            loading: false,
            data: res.records,
            pages: Math.ceil(res.meta.total / 10),
          });
      })
      .catch(err => {});
  };
  onSearchFormToggle = () => {
    this.setState({
      isOpenSearchForm: !this.state.isOpenSearchForm,
    });
  };
  render() {
    const { loading, pages, data } = this.state;
    return (
      <Card>
        <Card.Header>
          <Card.Title>People</Card.Title>
        </Card.Header>
        <Card.Body>
          <AdvancedPeopleSearchForm
            isOpenSearchForm={this.state.isOpenSearchForm}
            onSearchFormToggle={this.onSearchFormToggle}
          />
          <div className="text-right my-3">
            <Toggle value="table">
              <Toggle.Option value="table">Table</Toggle.Option>
              <Toggle.Option value="foo">Grid</Toggle.Option>
              <Toggle.Option value="whatever">Map</Toggle.Option>
            </Toggle>
          </div>
          <DataGrid
            data={data}
            pages={pages}
            page={this.state.page}
            pageSize={this.state.pageSize}
            loading={loading}
            columns={columns}
            className="-highlight"
            onFetchData={this.onFetchData}
            onSortedChange={sorted => this.setState({ sorted })}
            onPageChange={page => this.setState({ page })}
            onPageSizeChange={(pageSize, page) => {
              this.setState({ page, pageSize });
              console.log('hi');
            }}
            onExpandedChange={expanded => this.setState({ expanded })}
            onResizedChange={resized => this.setState({ resized })}
            onFilteredChange={filtered => this.setState({ filtered })}
          />
        </Card.Body>
      </Card>
    );
  }
}

export default AdvancedPeopleSearchDataGrid;
