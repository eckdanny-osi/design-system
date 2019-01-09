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

const Brand = () => (
  <React.Fragment>
    <Link to="/">
      <Logo />
    </Link>
    <Link to="/status" className="d-none d-sm-inline-block ml-2">
      <Badge color="primary">{status.version}</Badge>
    </Link>
  </React.Fragment>
)

const UserMenu = () => (
  <UncontrolledUserMenu>
    <MenuItem onClick={() => alert('logout!')}>Logout</MenuItem>
  </UncontrolledUserMenu>
)

const Breadcrumbs = ({ breadcrumb, items }) => {
  if (breadcrumb) return breadcrumb
  return !Array.isArray(items) ? (
    <em>Hello World</em>
  ) : (
    <BreadcrumbTrail
      items={items}
      tag={({ path, title, ...props }) => {
        return (
          <Link to={path} {...props}>
            {title}
          </Link>
        )
      }}
    />
  )
}

export default {
  Brand,
  UserMenu,
  // Breadcrumbs,
  // breadcrumbRenderer,
}
