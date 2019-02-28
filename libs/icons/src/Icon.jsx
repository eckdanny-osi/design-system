import React from 'react'
import PropTypes from 'prop-types'
import { themeColors } from '@cwds/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  /** Alias for `icon` */
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  /** Either a key in `themeColors` or a valid color */
  color: PropTypes.string,
  /** Mapping of thematic colors to valid color values */
  themeColors: PropTypes.object,
  /** The Fontawesome subset (e.g.; `fas`, `far`) */
  set: PropTypes.string,
}
Icon.defaultProps = {
  ...FontAwesomeIcon.defaultProps,
  color: 'info',
  themeColors: themeColors,
}

export default Icon

//
// Helper functions
//

function normalizeIconDef({ icon, name, set }) {
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
