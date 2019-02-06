import React from 'react'
import { Link } from 'react-router-dom'
import { Alert, Page, Breadcrumb, BreadcrumbItem } from '@cwds/components'

const NotFound = () => (
  <Page
    title="Components"
    layout="dashboard"
    Breadcrumb={() => (
      <Breadcrumb>
        {[
          { title: 'Home', path: '/' },
          { title: 'Components', path: '/components' },
        ].map(d => (
          <BreadcrumbItem key={d.path}>
            <Link to={d.path}>{d.title}</Link>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    )}
    main={() => (
      <div>
        <Alert color="danger">Component not found!</Alert>
      </div>
    )}
  />
)

export default NotFound
