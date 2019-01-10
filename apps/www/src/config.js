import React from 'react'
import { Link } from 'react-router-dom'
import {
  Logo,
  Badge,
  BreadcrumbTrail,
  MenuItem,
  UncontrolledUserMenu,
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
  <UncontrolledUserMenu>
    <MenuItem onClick={() => alert('logout!')}>Logout</MenuItem>
  </UncontrolledUserMenu>
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
