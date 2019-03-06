import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Col,
  DataGrid,
  Label,
  Row,
  Icon,
  Util,
} from '@cwds/components'
import data from './people.json'

const toCapitalCase = str => str.charAt(0).toUpperCase() + str.slice(1)
const columns = [
  {
    expander: true,
    Header: () => <div>More</div>,
    width: 70,
    Expander: ({ isExpanded }) =>
      isExpanded ? (
        <Icon name={'chevron-down'} sz={'sm'} />
      ) : (
        <Icon name={'chevron-down'} sz={'sm'} rotation={Util.ROTATION.LEFT} />
      ),
    style: { textAlign: 'center' },
  },
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
]
const subcomponent = row => {
  const { company, email, phone } = row.original
  return (
    <Row className="pl-3">
      <Col className="pl-0 offset-sm-1" md="2">
        <Label>Company</Label>
        <div>{company}</div>
      </Col>
      <Col className="pl-3" md="4">
        <Label>Email</Label>
        <div>{email}</div>
      </Col>
      <Col className="pl-4" md="5">
        <Label>Phone</Label>
        <div>{phone}</div>
      </Col>
    </Row>
  )
}
const PeopleCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>People</CardTitle>
      </CardHeader>
      <CardBody className="pt-0">
        <DataGrid data={data} columns={columns} SubComponent={subcomponent} />
      </CardBody>
    </Card>
  )
}

export default PeopleCard
