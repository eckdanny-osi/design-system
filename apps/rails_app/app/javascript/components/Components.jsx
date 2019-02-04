import React from 'react'
import startCase from 'lodash.startcase'
import kebabCase from 'lodash.kebabcase'
import '@cwds/components/scss/global.scss'
import { Page } from '@cwds/components'
import * as Examples from './examples'

const ListView = () => {
  return (
    <Page
      title="Components"
      breadcrumb={<div>Pick a component</div>}
      main={() => {
        return (
          <div>
            {Object.keys(Examples).map(componentName => (
              <a
                className="d-block"
                key={componentName}
                href={`/components/${kebabCase(componentName)}`}
              >
                {componentName}
              </a>
            ))}
          </div>
        )
      }}
    />
  )
}

const Components = ({ component: path }) => {
  if (!path) return <ListView />
  const componentName = startCase(path).replace(/\s/gi, '')
  const Example = Examples[componentName]
  return (
    <Page
      title={componentName}
      breadcrumb={<div>Integration Test</div>}
      main={Example}
    />
  )
}

export default Components
