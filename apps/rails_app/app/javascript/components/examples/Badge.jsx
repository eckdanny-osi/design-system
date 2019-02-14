import React from 'react'
import { Card, CardBody, Badge } from '@cwds/components'

export default () => (
  <Card>
    <CardBody>
      <div className="mb-3">
        {[
          'info',
          'success',
          'primary',
          'warning',
          'danger',
          'dark',
          'light',
        ].map(d => (
          <Badge className="mr-1" key={d} color={d}>
            {d}
          </Badge>
        ))}
      </div>
      <hr />
      <div className="mb-3">
        {[
          'info',
          'success',
          'primary',
          'warning',
          'danger',
          'dark',
          'light',
        ].map(d => (
          <Badge className="mr-1" pill key={d} color={d}>
            {d}
          </Badge>
        ))}
      </div>
      <hr />
      <div className="mb-3">
        {[
          'info',
          'success',
          'primary',
          'warning',
          'danger',
          'dark',
          'light',
        ].map(d => (
          <Badge className="mr-1" href="badge" key={d} color={d}>
            {d}
          </Badge>
        ))}
      </div>
    </CardBody>
  </Card>
)
