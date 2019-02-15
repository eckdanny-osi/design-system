import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, IconButton, Page } from '@cwds/components'

import AssesmentHistory from './AssesmentHistory/AssesmentHistory'

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
    main={() => (
      <div>
        <AssesmentHistory />
      </div>
    )}
  />
)
