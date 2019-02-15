import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, IconButton, Page } from '@cwds/components'

export default () => (
  <Page
    title="CANS"
    layout="jumpnav"
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
    main={() => <div />}
  />
)
