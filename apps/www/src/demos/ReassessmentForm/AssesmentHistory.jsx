import React from 'react'
import { Card, CardBody, CardHeader, CardTitle } from '@cwds/components'
import { Link } from 'react-router-dom'

import AssesmentHistoryTile from './AssesmentHistoryTile'
import AssesmentHistoryTable from './AssesmentHistoryTable'

const AssesmentHistory = () => (
  <div>
    <Card>
      <CardHeader>
        <CardTitle>
          Assesment History
          <div className="float-right">
            <Link to="">+REASSESMENT</Link>
          </div>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <AssesmentHistoryTile />
        <div className="mt-0">
          <AssesmentHistoryTable />
        </div>
      </CardBody>
    </Card>
  </div>
)

export default AssesmentHistory
