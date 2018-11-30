import React from 'react'
import IconSquare from './IconSquare'
import { ICON_NAMES } from '@cwds/components'

export default ({ className }) => {
  return (
    <div className={className}>
      {ICON_NAMES.map(name => {
        return Array.isArray(name) ? (
          <IconSquare key={name.join('')} name={name} />
        ) : (
          <IconSquare key={name} name={name} />
        )
      })}
    </div>
  )
}
