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
    id: 'XXXXXXXXXXX',
    date: '10/12/2017',
    assignedWorker: 'Jane Smith',
    controlNumber: 'XXXXXXXXXXX',
    priorityLevel: 'XXXXXXXX',
    status: 'XXXXXXXXXX',
    approvalDate: '2017-10-12',
  },
]

const columns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Date', accessor: 'date' },
  { Header: 'Assigned Worker', accessor: 'assignedWorker' },
  { Header: 'Control Number', accessor: 'controlNumber' },
  { Header: 'Priority', accessor: 'priorityLevel' },
  { Header: 'Status', accessor: 'status' },
  { Header: 'Approval Date', accessor: 'approvalDate' },
]

class ComplaintHistory extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle id="complaint-history">Complaint History</CardTitle>
        </CardHeader>
        <CardBody className="pt-0">
          <DataGrid data={data} columns={columns} />
        </CardBody>
      </Card>
    )
  }
}

export default ComplaintHistory
