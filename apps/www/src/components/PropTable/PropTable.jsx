import React, { Fragment } from 'react'
import cn from 'classnames'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Badge,
} from '@cwds/components'
import AnchorLink from '../AnchorLink'
import Styles from './PropTable.module.scss'

const ResponsiveTag = props => (
  <div {...props} style={{ overflowX: 'scroll', marginTop: '-1px' }} />
)

const PropDoc = ({ propDef, tag: Tag = 'h4' }) => {
  const { description, defaultValue, name, required, type } = propDef
  return (
    <div className={cn(Styles.PropDoc, 'py-3')}>
      <AnchorLink tag={Tag} className="text-monospace" parentClassName="mb-0">
        {name}
      </AnchorLink>

      <Table
        className="mb-0 mt-2"
        size="sm"
        bordered
        responsive
        responsiveTag={ResponsiveTag}
      >
        <tbody>
          <tr>
            <td style={{ width: '20%' }}>Type</td>
            <td>
              <span className="text-monospace">{renderType(type)}</span>
              {required && <Badge color="warning">required</Badge>}
            </td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{description || <span>None given</span>}</td>
          </tr>
          {defaultValue && (
            <tr>
              <td>Default</td>
              <td>
                <pre className="mb-0" style={{ verticalAlign: 'middle' }}>
                  <code>{defaultValue.value}</code>
                </pre>
              </td>
            </tr>
          )}
          {/* <td>
              <code className="text-dark">{renderType(type)}</code>
            </td>
            <td>
              <code className="text-dark">{required}</code>
            </td>
            <td>
              <code className="text-dark">
                {defaultValue && defaultValue.value}
              </code>
            </td>
            <td>
              <code className="text-dark">{description}</code>
            </td> */}
        </tbody>
      </Table>

      {/* <div>
        Type: <span className="text-monospace">{renderType(type)}</span>
        {required && <Badge color="warning">required</Badge>}
      </div>
      <div>
        Description
        <br />
        {description || <div>None given</div>}
      </div>
      {defaultValue && (
        <div>
          Default Value
          <pre className="mb-0">
            <code>{defaultValue.value}</code>
          </pre>
        </div>
      )} */}
    </div>
  )
}

const PropDocs = ({ docgen, headingLevel }) => (
  <div className={Styles.PropDocs}>
    {getPropsIterable(docgen.props).map(propDef => {
      return <PropDoc key={propDef.name} propDef={propDef} />
    })}
  </div>
)

const PropTable = ({ docgen }) => {
  return (
    <Card>
      {/* <CardHeader>
        <CardTitle>{docgen.displayName} PropTypes</CardTitle>
      </CardHeader> */}
      <CardBody className="py-0">
        <PropDocs docgen={docgen} />
        {/* <Table
          className="mb-0"
          size="sm"
          responsive
          responsiveTag={ResponsiveTag}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Required</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {getPropsIterable(docgen.props).map((prop, i) => {
              const { description, name, required, defaultValue, type } = prop
              return (
                <tr key={i}>
                  <td>
                    <code className="text-info">{name}</code>
                  </td>
                  <td>
                    <code className="text-dark">{renderType(type)}</code>
                  </td>
                  <td>
                    <code className="text-dark">{required}</code>
                  </td>
                  <td>
                    <code className="text-dark">
                      {defaultValue && defaultValue.value}
                    </code>
                  </td>
                  <td>
                    <code className="text-dark">{description}</code>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table> */}
      </CardBody>
    </Card>
  )
}

export default PropTable

//
// Helpers
//

function getPropsIterable(propsMap) {
  return Object.keys(propsMap).map(key => {
    return {
      ...propsMap[key],
      name: key,
    }
  })
}

function renderType({ name, value }) {
  if (name === 'union') {
    return value.map(d => d.name).join(' | ')
  }
  return name
}
