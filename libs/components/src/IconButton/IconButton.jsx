import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import pick from 'lodash.pick'
import { Button } from '@cwds/reactstrap'
import Icon from '@cwds/icons'

const getIconProps = ({ className, color, ...props }) =>
  pick(props, 'iconClassName', Object.keys(Icon.propTypes))

const getButtonProps = props => pick(props, Object.keys(Button.propTypes))

const isLightIcon = (
  color = Button.defaultProps.color,
  light = 'text-light',
  dark = 'text-dark'
) => {
  return [
    'primary',
    // 'secondary',
    'accent',
    'success',
    'info',
    'warning',
    'danger',
    // 'light',
    'dark',
    'link',
  ].includes(color)
    ? light
    : dark
  // return [] 'text-light' : 'text-dark'
}

const IconButton = ({ children, ...props }) => {
  const { className: iconClassName, ...iconProps } = getIconProps(props)
  return (
    <Button {...getButtonProps(props)}>
      <Icon
        className={cn('mr-2', iconClassName, isLightIcon(props.color))}
        {...iconProps}
      />
      {children}
    </Button>
  )
}

IconButton.propTypes = {
  ...Button.propTypes,
  ...Icon.propTypes,
  getIconProps: PropTypes.func,
  getButtonProps: PropTypes.func,
}
IconButton.defaultProps = {
  ...Button.defaultProps,
  ...Icon.defaultProps,
  getIconProps: getIconProps,
  getButtonProps: getButtonProps,
}

export default IconButton
