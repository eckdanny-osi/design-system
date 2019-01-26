import React, { Component } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  DataGrid,
} from '@cwds/components'

const data = [
  {
    date: '06/16/2018',
    method: 'Telephone',
    type: '',
    title: 'Lorem ipsum dolor sed do eiusmod temaut…',
  },
  {
    date: '06/06/2018',
    method: 'Email',
    type: '',
    title: 'Ipsum dolor lorem por incididunt ut lab…',
  },
  {
    date: '06/03/2018',
    method: 'In Person',
    type: 'Initial Assessment - Psyc...',
    title: 'Dolor lorem ipsum laboris ni ut aliquip entr…',
  },
  {
    date: '06/01/2018',
    method: 'In Person',
    type: 'Initial Home Inspection',
    title: 'Lorem nulla nam sed aute irure dolrepre …',
  },
]

const columns = [
  { Header: 'Date', accessor: 'date' },
  { Header: 'Method', accessor: 'method' },
  { Header: 'Type', accessor: 'type' },
  { Header: 'Title', accessor: 'title' },
]

class ContactsSummary extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle id="contacts-summary">Contacts Summary</CardTitle>
        </CardHeader>
        <CardBody className="pt-0">
          <DataGrid data={data} columns={columns} />
        </CardBody>
      </Card>
    )
  }
}

export default ContactsSummary
