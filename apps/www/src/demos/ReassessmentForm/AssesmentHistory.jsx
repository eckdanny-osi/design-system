import React from 'react'
import { Card, CardBody, CardHeader, CardTitle } from '@cwds/components'

import AssesmentHistoryTile from './AssesmentHistoryTile'
import AssesmentHistoryTable from './AssesmentHistoryTable'

const AssesmentHistory = () => (
  <div>
    <Card>
      <CardHeader>
        <CardTitle>Assesment History</CardTitle>
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
