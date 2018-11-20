import React from 'react'
import BreadcrumbTrail from '../BreadcrumbTrail'
import Logo from '../Logo'
import Avatar from '../Avatar'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from '@cwds/reactstrap'

const breadcrumbRenderer = breadcrumb => {
  return !Array.isArray(breadcrumb) ? (
    <em>Welcome to CARES!</em>
  ) : (
    <BreadcrumbTrail items={breadcrumb} />
  )
}

const appBarBrand = () => (
  <a href="/">
    <Logo />
  </a>
)

const appBarUserMenu = () => (
  <UncontrolledDropdown>
    <DropdownToggle className="bg-transparent border-0 text-white" size="sm">
      <span className="mr-2 text-capitalize">Guest</span>
      <Avatar invert size="sm" />
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>Logout</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
)

export const defaultConfig = {
  breadcrumbRenderer,
  appBarUserMenu,
  appBarBrand,
}

const context = React.createContext(defaultConfig)

export default context

export const CaresProvider = context.Provider
