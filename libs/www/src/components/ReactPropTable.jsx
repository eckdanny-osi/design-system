import React from 'react'
import PropsTable from '@storybook/addon-info/dist/components/PropTable'

export const propDefsFunc = props => {
  return Object.keys(props).map(property => {
    const prop = props[property]
    return {
      property,
      propType: prop.type,
      required: prop.required,
      description: prop.description,
      defaultValue: prop.defaultValue,
    }
  })
}

export const ReactPropTable = ({ propDefinitions }) => {
  return (
    <div>
      <PropsTable
        type={() => {}}
        propDefinitions={propDefinitions}
        maxPropObjectKeys={10}
        maxPropArrayLength={10}
        maxPropStringLength={10}
      />
    </div>
  )
}
