import React from 'react'
import { Card, CardHeader, CardTitle, CardBody, Table } from '@cwds/components'

const ResponsiveTag = props => (
  <div {...props} style={{ overflowX: 'scroll', marginTop: '-1px' }} />
)

const PropTable = ({ docgen }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{docgen.displayName} PropTypes</CardTitle>
      </CardHeader>
      <CardBody className="pt-0">
        <Table
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
        </Table>
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
