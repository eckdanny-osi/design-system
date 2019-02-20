import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, Badge, MenuItem, UncontrolledUserMenu } from '@cwds/components'
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

export default {
  Brand,
  UserMenu,
}
