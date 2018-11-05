import React from 'react'
import PropTypes from 'prop-types'
import DS from '@cwds/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = props => {
  const { name, icon, color, themeColors, ...restProps } = props
  return (
    <FontAwesomeIcon
      focusable="false"
      icon={name || icon}
      color={themeColors[color] || color}
      {...restProps}
    />
  )
}
Icon.propTypes = { ...FontAwesomeIcon.propTypes }
Icon.defaultProps = {
  ...FontAwesomeIcon.defaultProps,
  color: 'info',
  themeColors: DS.themeColors,
}

export default Icon
