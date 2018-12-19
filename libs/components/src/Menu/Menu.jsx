import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Arrow } from 'react-popper'
import Icon, { getIconContrast } from '@cwds/icons'
import { Dropdown, DropdownMenu, DropdownToggle } from '@cwds/reactstrap'
import pick from 'lodash.pick'
import Styles from '@cwds/core/dist/bootstrap-cares.module.css'

const propTypes = {
  getDropdownProps: PropTypes.func.isRequired,
  getDropdownToggleProps: PropTypes.func.isRequired,
  getDropdownMenuProps: PropTypes.func.isRequired,
  dropdownToggle: PropTypes.func.isRequired,
  dropdownMenu: PropTypes.func.isRequired,
}

const defaultProps = {
  getDropdownProps,
  getDropdownToggleProps,
  getDropdownMenuProps,
  dropdownToggle: DropdownToggle,
  dropdownMenu: DropdownMenu,
}

const Menu = ({
  children,
  getDropdownProps,
  getDropdownToggleProps,
  getDropdownMenuProps,
  dropdownToggle: ToggleComponent,
  dropdownMenu: MenuComponent,
  ...props
}) => {
  return (
    <Dropdown
      {...getDropdownProps(props)}
      className={cn(props.className, {
        [Styles.WithArrow]: !props.label,
      })}
    >
      <ToggleComponent {...getDropdownToggleProps(props)} />
      <MenuComponent {...getDropdownMenuProps(props)}>
        {children}
        {props.isOpen && <Arrow className={Styles.DropdownArrow} />}
      </MenuComponent>
    </Dropdown>
  )
}

Menu.propTypes = propTypes
Menu.defaultProps = defaultProps

export default Menu

//
// Helpers
//

function getDropdownProps(props) {
  return pick(props, ['isOpen', 'toggle'])
}

function getDropdownToggleProps(props) {
  let children
  if (!props.label) {
    children = <Icon name="ellipsis-v" color={getIconContrast(props.color)} />
  } else {
    children = (
      <Fragment>
        {props.label}
        <Icon
          name="chevron-down"
          color={getIconContrast(props.color)}
          className={props.label && 'ml-2'}
        />
      </Fragment>
    )
  }
  return {
    ...pick(props, Object.keys(DropdownToggle.propTypes)),
    caret: true,
    children,
  }
}

function getDropdownMenuProps(props) {
  return {
    ...pick(props, Object.keys(DropdownMenu.propTypes)),
  }
}
