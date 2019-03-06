import React from 'react'
import { Link } from 'react-router-dom'
import {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  IconButton,
  Page,
} from '@cwds/components'

import ClientInfo from './ClientInfo'
import AssesmentHistory from './AssesmentHistory'

export default () => (
  <Page
    title="CANS"
    Breadcrumb={
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/">Client Search</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Smith, Sarah</BreadcrumbItem>
      </Breadcrumb>
    }
    PageActions={
      <IconButton icon="search" size="sm">
        CLIENT SEARCH
      </IconButton>
    }
    message={<Alert color="success">Hello</Alert>}
    main={() => (
      <div>
        <ClientInfo />
        <AssesmentHistory />
      </div>
    )}
  />
)
