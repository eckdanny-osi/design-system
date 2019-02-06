import React, { Fragment } from 'react'
import startCase from 'lodash.startcase'
import kebabCase from 'lodash.kebabcase'
import '@cwds/components/scss/global.scss'
import { Page, Breadcrumb, BreadcrumbItem } from '@cwds/components'
import * as Examples from './examples'

const ListView = () => {
  return (
    <Page
      title="Components"
      Breadcrumb={
        <Breadcrumb>
          <BreadcrumbItem active>Components</BreadcrumbItem>
        </Breadcrumb>
      }
    >
      <Fragment>
        {Object.keys(Examples).map(componentName => (
          <a
            className="d-block"
            key={componentName}
            href={`/components/${kebabCase(componentName)}`}
          >
            {componentName}
          </a>
        ))}
      </Fragment>
    </Page>
  )
}

const Components = ({ component: path }) => {
  if (!path) return <ListView />
  const componentName = startCase(path).replace(/\s/gi, '')
  const Example = Examples[componentName]
  return (
    <Page
      title={componentName}
      Breadcrumb={
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/components">Components</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>{componentName}</BreadcrumbItem>
        </Breadcrumb>
      }
      main={Example}
    />
  )
}

export default Components
