import React from 'react'
import PropTypes from 'prop-types'
import DS from '@cwds/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const normalizeIconDef = ({ icon, name, set }) => {
  const iconArg = icon || name
  if (typeof set === 'string' && set.length) {
    if (Array.isArray(iconArg))
      throw Error(
        'the `set` prop may only be used with string `icon` | `name` values'
      )
    if (typeof iconArg === 'string') return [set, iconArg]
  }
  return iconArg
}

const Icon = props => {
  const { name, icon, color, set, themeColors, ...restProps } = props
  return (
    <FontAwesomeIcon
      focusable="false"
      icon={normalizeIconDef({ name, icon, set })}
      color={themeColors[color] || color}
      {...restProps}
    />
  )
}
Icon.propTypes = {
  ...FontAwesomeIcon.propTypes,
  color: PropTypes.string,
  themeColors: PropTypes.object,
  set: PropTypes.string,
}
Icon.defaultProps = {
  ...FontAwesomeIcon.defaultProps,
  color: 'info',
  themeColors: DS.themeColors,
}

export default Icon
