import React from 'react'
import { Link } from 'react-router-dom'
import {
  Avatar,
  Logo,
  Badge,
  BreadcrumbTrail,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from '@cwds/components'
import getRepoStatus from './macros/repo-status.macro'
const status = getRepoStatus()

const appBarBrand = () => (
  <React.Fragment>
    <Link to="/">
      <Logo />
    </Link>
    <Link to="/status" className="d-none d-sm-inline-block ml-2">
      <Badge color="primary">{status.version}</Badge>
    </Link>
  </React.Fragment>
)

const appBarUserMenu = () => (
  <UncontrolledDropdown>
    <DropdownToggle
      className="bg-transparent border-0 text-white"
      tag="button"
      size="sm"
    >
      <span className="mr-2 text-capitalize">Guest</span>
      <Avatar invert size="sm" />
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem onClick={() => alert('logout!')}>Logout</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
)

const breadcrumbRenderer = items => {
  return !Array.isArray(items) ? (
    <em>Hello World</em>
  ) : (
    <BreadcrumbTrail
      items={items}
      tag={({ path, title, ...props }) => (
        <Link to={path} {...props}>
          {title}
        </Link>
      )}
    />
  )
}

export default {
  appBarBrand,
  appBarUserMenu,
  breadcrumbRenderer,
}
