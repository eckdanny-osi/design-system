import React, { Fragment } from 'react'
import { Page, Button, Breadcrumb, BreadcrumbItem } from '@cwds/components'

const PageStructure = () => (
  <Page
    layout="dashboard"
    title="Dashboard Layout"
    Brand={<div>Acme Widgets</div>}
    UserMenu={null}
    Breadcrumb={
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Parent</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/">Child</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>GrandChild</BreadcrumbItem>
      </Breadcrumb>
    }
    PageActions={
      <Fragment>
        <Button color="info" size="sm">
          Hello
        </Button>{' '}
        <Button color="info" size="sm">
          Goodbye
        </Button>
      </Fragment>
    }
  >
    Hello World
  </Page>
)

export default PageStructure
